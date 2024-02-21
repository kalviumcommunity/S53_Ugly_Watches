import React, { useState, useEffect } from "react";
import axios from "axios";
import ScrollFade from "@benestudioco/react-scrollfade";

export const Home = () => {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    const fetchWatches = async () => {
      try {
        const response = await axios.get("http://localhost:3001/watch");
        setWatches(response.data);
      } catch (error) {
        console.log("error: ", error);
      }
    };

    fetchWatches();
  }, []);

  return (
    <>
      <div className="topHeadingPost">
        <h1 className="postsHeader">POSTS</h1>
        <p className="subHeading">
          Explore The Wide Variety of Ugly Watches on Planet
        </p>
      </div>
      <div className="parentGrid">
        <div className="grid">
          <div
            className="parentCard"
         
          >
            {watches.map((watch) => (
              <div className="card" key={watch._id}>
                <div>
                  {/* <button className="btns">delete</button> */}
                  {/* <button className="btns">update</button> */}
                  <img
                    className="postImgCard"
                    src={watch.Image}
                    alt={watch.title} // Add alt attribute for accessibility
                  ></img>
                </div>
                <h2 className="cardTitle">{watch.Title}</h2>
                <p className="descriptionCard">{watch.Description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
