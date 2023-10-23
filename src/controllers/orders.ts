import { Request, Response, NextFunction } from 'express';
import { HttpError, ctrlWrapper } from 'helpers';
import { OrderModel } from 'models';

const PER_PAGE = 10;

const listOrders = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { page = 1 } = req.query;
  const skip = (Number(page) - 1) * Number(PER_PAGE);
  const result = await OrderModel.find().sort({ date: 1 }).skip(skip).limit(PER_PAGE);

  res.json(result);
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
};
