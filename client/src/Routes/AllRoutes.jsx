import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Components/HomePage";
import Login from "../Components/Login";
import Register from "../Components/Register";
import EditPost from "../Components/EditPost";
import Saved from "../Components/Saved";
import About from "../Components/About";
import CreatePost from "../Components/CreatePost";
import Posts from "../Components/Posts";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/create-post" element={<CreatePost />} />
      <Route path="/user/:username" element={<Saved />} />
      <Route path="/about" element={<About />} />
      <Route path="/editPost/:id" element={<EditPost />} />
    </Routes>
  );
}

export default AllRoutes;
