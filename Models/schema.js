import mongoose from "mongoose";
const Schema = mongoose.Schema;
const uglywatches = new Schema({
  postID: { type: Number, required: true },
  Title: { type: String, required: true },
  Image: String,
});
export const watchesModel = mongoose.model("uglywatch", uglywatches);
