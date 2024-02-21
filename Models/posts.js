const mongoose = require("mongoose");

const WatchSchema = mongoose.Schema({
  postID: {
    type: Number,
    required: true,
  },
  Title: {
    type: String,
    required: true,
  },
  ImageUrl: {
    type: String,
    required: true,
  },
});
const WatchesModel= mongoose.model("watches", WatchSchema)
module.exports= WatchesModel;