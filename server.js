import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

let dbConnection;

async function startDatabase() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("MongoDB URI is not defined in the .env file.");
  }

  try {
    dbConnection = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw error;
  }
}

async function stopDatabase() {
  if (dbConnection) {
    await mongoose.disconnect();
    console.log("Database disconnected");
  }
}

function isConnected() {
  return mongoose.connection.readyState === 1; // 1 means connected
}

export { startDatabase, stopDatabase, isConnected };
