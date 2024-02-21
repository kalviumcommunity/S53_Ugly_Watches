const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WatchSchema = new Schema({
  postID: { type: Number, required: true },
  Title: { type: String, required: true },
  Image: { type: String, required: true },
});
const Watch = mongoose.model("watches", WatchSchema);
module.exports = Watch;
