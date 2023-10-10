import { Request, Response, NextFunction } from 'express';
import { HttpError } from 'helpers';
import { isValidObjectId } from 'mongoose';

const isValidId = (req: Request, res: Response, next: NextFunction) => {
  const { orderId } = req.params;
  if (!isValidObjectId(orderId)) {
    next(HttpError(400, `${orderId} is not valid id`));
  }
  next();
};

export default isValidId;
