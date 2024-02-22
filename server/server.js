const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/Posts");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());

// app.use("/auth", userRouter);
app.use("/watch", router);

mongoose.connect("mongodb+srv://rajabshoukath:rajab2004@hideoushours.h27dy0l.mongodb.net/");

app.listen(3001, () => console.log("Server started"));
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});


app.listen(3002, () => console.log("Server started"));