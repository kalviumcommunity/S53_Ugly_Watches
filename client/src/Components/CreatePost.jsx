import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [watch, setWatch] = useState({
    postID: "",
    Title: "",
    Image: "",
    Description: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setWatch({ ...watch, [name]: value });
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/watch", watch);
      alert("Post Added");
      navigate("/posts");
    } catch (error) {
      console.log(error);
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
