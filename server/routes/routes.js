const mongoose = require("mongoose");
const WatchesModel = require("../Models/posts");

// Get all watches
async function getAllWatches(req, res) {
  try {
    const result = await WatchesModel.find({});
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}

// Create a new watch
async function createWatch(req, res) {
  const watch = new WatchesModel({
    _id: new mongoose.Types.ObjectId(),
    postID: req.body.postID,
    Title: req.body.Title,
    Image: req.body.Image, 
  });
  
  try {
    const result = await watch.save();
    res.status(201).json({
      createdWatch: {
        postID: result.postID,
        Title: result.Title,
        Image: result.Image,
        _id: result._id,
      },
    });
  } catch (error) {
    res.status(500).json(error);
  }
}

// Update a watch by ID
async function updateWatchById(req, res) {
  try {
    const result = await WatchesModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
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
  getAllWatches,
  createWatch,
  updateWatchById,
  deleteWatchById,
};
