import { Request, Response, NextFunction } from 'express';
import { HttpError, ctrlWrapper } from '../helpers';
import { PER_PAGE } from './orders';
import { OrderArchiveModel } from '../models';

const getAllOrders = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { page = 1 } = req.query;
  const limit = PER_PAGE * Number(page);
  const total = await OrderArchiveModel.find().sort({ date: 1 });
  const result = await OrderArchiveModel.find().sort({ date: 1 }).skip(0).limit(limit);

  res.json({ total: total.length, orders: result });
};

const getByQuery = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { query } = req.query;
  const queryString = query as string;
  const regex = new RegExp(queryString, 'i');

  const result = await OrderArchiveModel.find({
    $or: [{ orderNumber: { $regex: regex } }, { phone: { $regex: regex } }],
  }).sort({ date: -1 });

  res.json(result);
};

const addToArchive = async (req: Request, res: Response) => {
  const result = await OrderArchiveModel.create({ ...req.body });
  res.status(201).json(result);
};

const removeFromArchive = async (req: Request, res: Response) => {
  const { orderId } = req.params;

  const result = await OrderArchiveModel.findByIdAndDelete(orderId);
  if (!result) {
    throw HttpError(404, 'Not found');
  }

  res.status(200).json(`order ${orderId} deleted`);
};

export default {
  getAllOrders: ctrlWrapper(getAllOrders),
  getByQuery: ctrlWrapper(getByQuery),
  addToArchive: ctrlWrapper(addToArchive),
  removeFromArchive: ctrlWrapper(removeFromArchive),
};
