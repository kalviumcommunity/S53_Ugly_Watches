const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
const mongoURI = process.env.mongoURI;
app.use(cors());
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Routes
app.use(express.json());
mongoose.connect(mongoURI);

const db = mongoose.connection;
//to show the database connected message on localhost
app.get("/", (req, res) => {
  res.send(
    `Database connection status: ${
      db.readyState === 1 ? "Connected" : "Disconnected"
    }`
  );
});

app.get("/ping", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
