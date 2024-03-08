import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connection = {};

// db.js

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Failed to connect to MongoDB!");
  }
};

export default connectToDB;
