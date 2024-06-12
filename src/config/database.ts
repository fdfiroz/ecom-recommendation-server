import { MongoClient, Db, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri: string = process.env.MONGO_URI || '';
const dbName: string = process.env.DB_NAME || '';

let db: Db | undefined;

const connectDB = async (): Promise<void> => {
  try {
    const client = new MongoClient(uri, 
      {serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });
    await client.connect();
    db = client.db(dbName);
    console.log('MongoDB connected...');
  } catch (err: unknown) {
    console.error((err as Error).message);
    process.exit(1);
  }
};

const getDB = (): Db | undefined => db;

export { connectDB, getDB };
