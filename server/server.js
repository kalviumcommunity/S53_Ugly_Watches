const express = require( "express");
const cors = require("cors" )  ;
const mongoose =  require("mongoose");
const router  = require( "./routes/Posts.js" );
require('dotenv').config();
const app = express();

app.use(express.json());
app.use(cors());

// app.use("/auth", userRouter);
app.use("/watch", router);

mongoose.connect(process.env.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3001, () => console.log("Server started"));
