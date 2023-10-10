import { Request, Response, NextFunction } from 'express';
import { HttpError, ctrlWrapper } from 'helpers';
import { OrderModel } from 'models';

const listOrders = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const result = await OrderModel.find();

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
};
