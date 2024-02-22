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
  const { postID, Title, Image, Description } = req.body;
  const watch = new WatchesModel({
    postID,
    Title,
    Image,
    Description,
  });

  try {
    const result = await watch.save();
    res.status(201).json({
      createdWatch: {
        postID: result.postID,
        Title: result.Title,
        Image: result.Image,
        Description: result.Description,
        _id: result._id,
      },
    });
  } catch (error) {
    console.error("Error in POST /watch:", error);
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
