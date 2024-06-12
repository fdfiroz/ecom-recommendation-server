// app.js
import express from 'express';
import dotenv from 'dotenv';
import recommendationRoutes from './routes/recommendationRoutes';

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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
