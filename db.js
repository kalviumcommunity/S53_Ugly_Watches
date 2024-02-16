import mongoose from "mongoose";
import dotenv from 'dotenv';  // Change the import statement

dotenv.config();

let mongooseConnection;

async function startDatabase() {
  if (mongooseConnection) return;
  const mongoURI = process.env.mongoURI;
  mongooseConnection = await mongoose.connect(mongoURI);
  console.log("Connected to local database");
}

// stop function
async function stopDatabase() {
  if (!mongooseConnection) return;
  await mongooseConnection.close();
  mongooseConnection = null;
  console.log("Disconnected from local MongoDB Database");
}

function isConnected() {
  return mongooseConnection && mongooseConnection.readyState === 1;
}

export { startDatabase, stopDatabase, isConnected };
