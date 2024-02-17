// lib/mongodb.js
import { MongoClient } from 'mongodb';

let cachedClient;

export async function connectToDatabase() {
  if (cachedClient) {
    return { db: cachedClient.db('test') };
  }

  const client = await MongoClient.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  cachedClient = client;
  return { db: client.db('test') };
}
