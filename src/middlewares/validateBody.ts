import { Request, Response, NextFunction } from 'express';
import { HttpError } from '../helpers';

const validateBody = (schema) => {
  const func = (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);

    if (error) {
      console.log(error);
      next(HttpError(400, error.message));
    }
    next();
  };

  return func;
};

export default validateBody;
