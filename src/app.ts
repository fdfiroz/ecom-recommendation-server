// app.js
import express, { Request, Response } from 'express';

import dotenv from 'dotenv';
import recommendationRoutes from './routes/recommendationRoutes';
const PORT = process.env.PORT || 3000;

dotenv.config();

if (!process.env.MONGO_URI) {
  console.error('MONGO_URI is not defined');
  process.exit(1);
}

if (!process.env.DB_NAME) {
  console.error('DB_NAME is not defined');
  process.exit(1);
}

const app = express();

app.use(express.json());

app.use('/api/v1', recommendationRoutes);
app.get('/', (req:Request, res:Response) => {
  res.send('Welcome to the Recommendations API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
