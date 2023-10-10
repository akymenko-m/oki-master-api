import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import ordersRouter from './routes/api/orders';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/orders', ordersRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

export default app;
