import 'server-only';
import mongoose, { Mongoose } from 'mongoose';

let mongooseClient: Mongoose;
async function connectDatabase() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error('Database url is not available');
  }
  if (mongooseClient) {
    return mongooseClient;
  }
  try {
    mongooseClient = await mongoose.connect(databaseUrl);
    return mongooseClient;
  } catch (err) {
    process.exit(1);
  }
}
connectDatabase();
