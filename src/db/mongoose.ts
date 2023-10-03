// import 'server-only';
import mongoose, { Mongoose } from 'mongoose';
console.log('START CONNECTION');
let mongooseClient: Mongoose;
async function connectDatabase() {
  console.log('START CONNECTION');
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error('Database url is not available');
  }
  if (mongooseClient) {
    return mongooseClient;
  }
  try {
    mongooseClient = await mongoose.connect(databaseUrl);
    console.log('CONNECTED');
    return mongooseClient;
  } catch (err) {
    console.log({ err });
    process.exit(1);
  }
}
connectDatabase();
