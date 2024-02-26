const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "hideoushours" }],
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
