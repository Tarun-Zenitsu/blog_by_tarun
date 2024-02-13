import express from 'express';
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
import cookieParser from 'cookie-parser'
import postRoutes from './routes/post.route.js'

const app = express();

app.use(express.json())
app.use(cookieParser())

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose
  .connect(process.env.MONGOOSE_URL)
  .then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log(err);
  });


app.listen(3000, () => {
    console.log('app is listen on port number: 3000');
})

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);

app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500 ;
  const message = error.message || "Internal Server Error";
  
  res.status(statusCode).json({
    success: false,
    statusCode,
    message
  })
})