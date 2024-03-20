import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

const UpdatePost = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["myCookie"]);
  const getCookieData = (cookieName) => {
    return cookies[cookieName];
  };
  const username = getCookieData("username");
  const [newWatch, setNewWatch] = useState({
    Title: "",
    Image: "",
    Description: "",
    username: username,
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${import.meta.env.VITE_RENDER_LINK}/watch/update/${id}`, newWatch);
      alert("Post Updated");
      navigate("/posts");
    } catch (error) {
      console.log(error);
      alert("Title Should Be Max 20 Characters");
    }
  };
  const getOldData = (id) => {
    axios
      .get(`${import.meta.env.VITE_RENDER_LINK}/watch/update/${id}`)
      .then((res) => {
        setNewWatch((prevState) => ({
          ...prevState,
          Title: res.data.data.Title,
          Image: res.data.data.Image,
          Description: res.data.data.Description,
        }));
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getOldData(id);
  }, [id]);
  return (
    <div className="CreatePost">
      <div className="CreatePost">
        <img className="postImage" src="https://i.imgur.com/s1zcsEx.png"></img>
        <div className="ParentPostCard">
          <div className="postCard">
            <div className="TitlePost">
              <h1>UPDATE</h1>
            </div>
            <div className="formDivPost">
              <form onSubmit={handleSubmit}>
                <input
                  placeholder="Title"
                  className="postInputs"
                  name="Title"
                  value={newWatch.Title}
                  onChange={(e) =>
                    setNewWatch({ ...newWatch, Title: e.target.value })
                  }
                ></input>
                <input
                  placeholder="Image Url"
                  className="postInputs"
                  name="Image"
                  value={newWatch.Image}
                  onChange={(e) =>
                    setNewWatch({ ...newWatch, Image: e.target.value })
                  }
                ></input>
                <textarea
                  placeholder="Description"
                  className="postTextArea"
                  name="Description"
                  value={newWatch.Description}
                  onChange={(e) =>
                    setNewWatch({ ...newWatch, Description: e.target.value })
                  }
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

export default UpdatePost;
