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
  Description: {
    type: String,
    require: true,
  },
});
const WatchesModel = mongoose.model("hideoushours", WatchSchema);
module.exports = WatchesModel;
