import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import errorHandler from './utils/errorHandler.js';
// Routes
import userRoute from './routes/userRoute.js';

const app = express();
app.use(cors());
// Method
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// DB Connect
const DB = process.env.DB_URL.replace('<password>', process.env.DB_PASS);
mongoose.connect(DB, () => {
  console.log('DB Connect');
});

// Middlewares
app.use(express.json());

app.use('/', userRoute);

app.use(errorHandler);

app.all('*', (req, res) => {
  res.status(400).json({
    status: 'fail',
    message: 'Böyle bir endpoint yok.a',
  });
});
// Server start
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server On | http://localhost:${port}`);
});