import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useGetUserID } from "../Hooks/useGetUserId";
import { useCookies } from "react-cookie";

const CreatePost = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["myCookie"]);
  const getCookieData = (cookieName) => {
    return cookies[cookieName];
  };
  const username = getCookieData('username');
  console.log("username: ", username);

  const [watch, setWatch] = useState({
    Title: "",
    Image: "",
    Description: "",
    username: username,
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setWatch({ ...watch, [name]: value });
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3002/watch/create", watch);
      alert("Post Added");
      navigate("/posts");
    } catch (error) {
      alert("Title Should Be Max 20 Characters");
      console.log("err: ", error);
    }
  };
  return (
    <div className="CreatePost">
      <div className="CreatePost">
        <img className="postImage" src="https://i.imgur.com/s1zcsEx.png"></img>
        <div className="ParentPostCard">
          <div className="postCard">
            <div className="TitlePost">
              <h1>PUBLISH</h1>
            </div>
            <div className="formDivPost">
              <form onSubmit={handleSubmit}>
                <input
                  placeholder="Title"
                  className="postInputs"
                  name="Title"
                  value={watch.Title}
                  onChange={handleChange}
                ></input>
                <input
                  placeholder="Image Url"
                  className="postInputs"
                  name="Image"
                  value={watch.Image}
                  onChange={handleChange}
                ></input>
                <textarea
                  placeholder="Description"
                  className="postTextArea"
                  name="Description"
                  value={watch.Description}
                  onChange={handleChange}
                ></textarea>
                <div className="postSubmitBtnDiv">
                  <button type="submit" className="postSubmitBtn">
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
