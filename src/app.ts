import cors from 'cors';
import express, { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import dotenv from 'dotenv';
import { archiveRouter, ordersRouter } from './routes/api';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/archive', archiveRouter);
app.use('/api/orders', ordersRouter);

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'Not found' });
});

interface CustomError extends Error {
  status?: number;
}

const errorHandler: ErrorRequestHandler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
};

app.use(errorHandler);

export default app;
