const express = require("express");
const mongoose = require("mongoose");
const WatchesModel = require("../Models/posts");
const router = express.Router();

// Get all watches
router.get("/", async (req, res) => {
  try {
    const result = await WatchesModel.find({});
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Create a new watch
router.post("/", async (req, res) => {
  const watch = new WatchesModel({
    _id: new mongoose.Types.ObjectId(),
    postID: req.body.postID,
    Title: req.body.Title, 
    ImageUrl: req.body.ImageUrl,
  });

  try {
    const result = await watch.save();
    res.status(201).json({
      createdWatch: {
        postID: result.postID,
        Title: result.Title,
        ImageUrl: result.ImageUrl,
        _id: result._id,
      },
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

// Update a watch by ID (PUT request)
router.put("/:id", async (req, res) => {
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
});

// Delete a watch by ID (DELETE request)
router.delete("/:id", async (req, res) => {
  try {
    const result = await WatchesModel.findByIdAndDelete(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
