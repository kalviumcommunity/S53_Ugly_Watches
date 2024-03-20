const express = require("express");
const mongoose = require("mongoose");
const WatchesModel = require("../Models/posts");
const { createWatch } = require("./routes");
const { updateWatchById } = require("./routes");
const UserModel = require("../Models/users");
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
//get all the users
router.get("/users", async (req, res) => {
  try {
    const result = await UserModel.find({});
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
//VIEW ALL THE POSTED
router.get("/user/:username", async (req, res) => {
  try {
    const username = req.params.username;
    console.log("username: ", username);
    const result = await WatchesModel.find({ username });
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json(error);
  }
});

// Create a new watch
router.post("/create", createWatch, async (req, res) => {
  const { Title, Image, Description } = req.body;
  const watch = new WatchesModel(req.body);

  try {
    const result = await watch.save();
    res.status(201).json({
      createdWatch: {
        Title: result.Title,
        Image: result.Image,
        Description: result.Description,
        Created_by: result.Created_by,
        _id: result._id,
      },
    });
  } catch (error) {
    console.error("Error in POST /watch:", error);
    res.status(500).json(error);
  }
});
//save
router.put("/users", async (req, res) => {
  const watch = await WatchesModel.findById(req.body.watchesID);
  const user = await UserModel.findById(req.body.userID);
  try {
    user.posts.push(watch);
    await user.save();
    res.status(201).json({ posts: user.posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update a watch by ID (PUT request)
router.put("/update/:id", createWatch, async (req, res) => {
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
router.delete("/delete/:id", async (req, res) => {
  try {
    const result = await WatchesModel.findByIdAndDelete(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
