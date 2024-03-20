const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/User");

const router = require("./routes/Posts");
require("dotenv").config("./.env");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/watch", router);
app.use("/auth", userRouter);
mongoose.connect(process.env.mongoURI);

app.listen(3001, () => console.log("Server started"));
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// app.listen(3002, () => console.log("Server started"));
