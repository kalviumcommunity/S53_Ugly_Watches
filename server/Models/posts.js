const mongoose = require("mongoose");

const WatchSchema = mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  Image: {
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
