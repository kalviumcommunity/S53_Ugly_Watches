import React, { useEffect, useState } from "react";
import { useGetUserID } from "../Hooks/useGetUserId";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

const Saved = () => {
  const userID = String(useGetUserID());
  const [watches, setWatches] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(["myCookie"]);
  const getCookieData = (cookieName) => {
    return cookies[cookieName];
  };
  const { username } = useParams();
  console.log("username: ", username);
  const fetchWatches = async (username) => {
    try {
      const response = await axios.get(
        `http://localhost:3002/watch/user/${username}`
      );
      console.log("Response from server:", response.data.result);
      setWatches(response.data.result);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    fetchWatches(username);
  }, [username]);
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
            {watches.map((watch, i) => (
              <div className="card" key={i}>
                <div>
                  <img
                    className="postImgCard"
                    src={watch.Image}
                    alt={watch.Title}
                  ></img>
                </div>
                <div className="CardTitleDiv">
                  <h2 className="cardTitle">{watch.Title}</h2>
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

export default Saved;
