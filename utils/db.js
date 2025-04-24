import mongoose from 'mongoose';

let conn = null;

const connectDB = async () => {
  if (conn) return conn;

  try {
    console.log('Attempting MongoDB connection...');
    conn = await mongoose.connect(process.env.MONGODB_URI, {});
    console.log('Connected to MongoDB');
    return conn;
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    throw err;
  }
};

export default connectDB;