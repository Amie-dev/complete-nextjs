/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose, { Connection } from "mongoose";

// Debug: show all environment variables (optional)
// console.log("Loaded ENV:", process.env);

const MONGODB_URL = process.env.MONGODB_URL!;
if (!MONGODB_URL) {
  console.error("❌ Please define the MONGODB_URL environment variable");
  throw new Error("Please define the MONGODB_URL environment variable");
}

// Use global cache to avoid multiple connections in serverless environments
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function connectDb(): Promise<Connection> {
  // If already connected, reuse cached connection
  if (cached.conn) {
    console.log("✅ Using cached MongoDB connection");
    return cached.conn;
  }

  // If no promise yet, create a new connection
  if (!cached.promise) {
    console.log("🔄 Creating NEW MongoDB connection...");
    cached.promise = mongoose.connect(MONGODB_URL).then((m) => m.connection);
  }

  try {
    cached.conn = await cached.promise;
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    throw error;
  }

  return cached.conn;
}

export default connectDb;




/* (A)

import mongoose from "mongoose";

type ConnectionObject = {
  isConnect?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnect) {
    console.log("DB is already connected");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URL || "");
    connection.isConnect = db.connections[0].readyState;

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("DB connection failed:", error);
    process.exit(1);
  }
}

export default dbConnect;


*/