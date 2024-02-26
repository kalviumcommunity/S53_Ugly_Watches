import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Home = () => {
  const [watches, setWatches] = useState([]);

  const fetchWatches = async () => {
    try {
      const response = await axios.get("http://localhost:3002/watch");
      setWatches(response.data);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3002/watch/${id}`);
      console.log("successful", id);
      fetchWatches();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchWatches();
  }, []);

  return (
    <div className="postsPage">
      <Link style={{ textDecoration: "none" }} to="/create-post">
        {" "}
        <button className="addPostBtn">POST</button>{" "}
      </Link>
      <div className="topHeadingPost">
        <h1 className="postsHeader">POSTS</h1>
        <p className="subHeading">
          Explore The Wide Variety of Ugly Watches on Planet
        </p>
      </div>
      <div className="parentGrid">
        <div className="grid">
          <div className="parentCard">
            {watches.map((watch) => (
              <div className="card" key={watch._id}>
                <div>
                  <img
                    className="postImgCard"
                    src={watch.Image}
                    alt={watch.Title}
                  ></img>
                </div>
                <div className="CardTitleDiv">
                  <h2 className="cardTitle">{watch.Title}</h2>
                  <div className="iconsPostDiv">
                    <img
                      onClick={() => handleDelete(watch._id)}
                      className="iconsPost"
                      src="https://i.imgur.com/NBvokyU.png"
                    ></img>
                    <Link to={`/editPost/${watch._id}`}>
                      <img
                        className="iconsPost"
                        src="https://i.imgur.com/xZ67pZi.png"
                      ></img>
                    </Link>
                  </div>
                </div>
                <p className="descriptionCard">{watch.Description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
