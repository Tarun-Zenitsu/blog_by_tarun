import express from 'express';

const app = express();

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