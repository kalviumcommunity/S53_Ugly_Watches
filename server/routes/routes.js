const joi = require("joi");
const mongoose = require("mongoose");
const WatchesModel = require("../Models/posts");

const watchValidationSchema = joi.object({
  Title: joi.string().required().max(20),
  Image: joi.string().required(),
  Description: joi.string().required(),
  username: joi.string().required(),
});
// Create a new watch
function createWatch(req, res, next) {
  console.log(req.body);
  let { error } = watchValidationSchema.validate(req.body);
  if (error) {
    console.log("Error in validation", error);
    return res.status(401).json({ message: " Title error" });
  } else {
    next();
  }
}
// Update a watch by ID
async function updateWatchById(req, res) {
  console.log(req.body);
  let { error } = watchValidationSchema.validate(req.body);
  if (error) {
    console.log("Error in validation", error);
    return res.status(401).json({ message: " Title error" });
  } else {
    next();
  }
}
async function deleteWatchById(req, res) {
  try {
    const result = await WatchesModel.findByIdAndDelete(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  // getAllWatches,
  createWatch,
  updateWatchById,
  deleteWatchById,
};
