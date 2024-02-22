const express = require("express");
const mongoose = require("mongoose");
const WatchesModel = require("../Models/posts");
const { createWatch } = require("./routes");
const { updateWatchById } = require("./routes");
const router = express.Router();
// const createWatch = require("./")

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
router.post("/", createWatch, async (req, res) => {
  const { Title, Image, Description } = req.body;

  const watch = new WatchesModel(req.body);

  try {
    const result = await watch.save();
    res.status(201).json({
      createdWatch: {
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
router.put("/:id", createWatch, async (req, res) => {
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
