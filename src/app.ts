import express from 'express';
import dotenv from 'dotenv';
import logger from './middlewares/logger';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(logger); // Use the custom logger middleware

// Routes
app.use('/', (req, res) => {
  res.send('Hello, world!');
});

export default app;
