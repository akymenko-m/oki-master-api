import { Request, Response, NextFunction } from 'express';
import { HttpError, ctrlWrapper } from 'helpers';
import { OrderModel } from 'models';

export const PER_PAGE = 10;

const listOrders = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { page = 1 } = req.query;
  const limit = PER_PAGE * Number(page);
  const total = await OrderModel.find().sort({ date: 1 });
  const result = await OrderModel.find().sort({ date: 1 }).skip(0).limit(limit);

  res.json({ total: total.length, orders: result });
};

const getByQuery = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { query } = req.query;
  const queryString = query as string;
  const regex = new RegExp(queryString, 'i');

  const result = await OrderModel.find({
    $or: [{ orderNumber: { $regex: regex } }, { phone: { $regex: regex } }],
  }).sort({ date: -1 });

  res.json(result);
};

const getOrder = async (req, res) => {
  const { query } = req.query;
  const queryString = query as string;

  const result = await OrderModel.findOne({
    $or: [{ orderNumber: queryString }, { phone: queryString }],
  }).sort({ date: -1 });

  if (!result) {
    throw HttpError(404, 'Not found');
  }

  res.json(result);
};

const addOrder = async (req: Request, res: Response) => {
  const result = await OrderModel.create({ ...req.body });
  res.status(201).json(result);
};

const removeOrder = async (req: Request, res: Response) => {
  const { orderId } = req.params;

  const result = await OrderModel.findByIdAndDelete(orderId);
  if (!result) {
    throw HttpError(404, 'Not found');
  }

  res.status(200).json(`order ${orderId} deleted`);
};

const updateOrder = async (req: Request, res: Response) => {
  const { orderId } = req.params;

  const result = await OrderModel.findByIdAndUpdate(orderId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, 'Not found');
  }

  res.status(200).json(result);
};

export default {
  listOrders: ctrlWrapper(listOrders),
  addOrder: ctrlWrapper(addOrder),
  removeOrder: ctrlWrapper(removeOrder),
  updateOrder: ctrlWrapper(updateOrder),
  getByQuery: ctrlWrapper(getByQuery),
  getOrder: ctrlWrapper(getOrder),
};
