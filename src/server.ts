import mongoose from 'mongoose';
import app from './app';

const { DB_HOST, PORT } = process.env;

if (!DB_HOST) {
  console.error('DB_HOST is not defined. Please set the environment variable.');
  process.exit(1);
}

mongoose.set('strictQuery', true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log('Database connection successful');
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  });
