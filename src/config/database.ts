import { MongoClient, Db } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/mydatabase';
let db: Db;

const connectDB = async (): Promise<Db> => {
  if (!db) {
    const client = new MongoClient(uri);
    await client.connect();
    db = client.db(process.env.DB_NAME);
    console.log('Connected to MongoDB');
  }
  return db;
};

export default connectDB;
