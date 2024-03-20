import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Navbar() {
  const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);
  const getCookieData = (cookieName) => {
    return cookies[cookieName];
  };
  const username = getCookieData("username");
  const [watchUsers, setWatchUsers] = useState([]);
  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_RENDER_LINK}/watch/users`
      );
      setWatchUsers(response.data);
    } catch (error) {
      console.log("error: ", error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  const navigate = useNavigate();
  const logout = () => {
    setCookie("access_token", "");
    setCookie("username", "");
    window.localStorage.removeItem("userID");
    navigate("/");
  };

  return (
    <div className="parentDiv">
      <nav>
        {/* ELEMENTS TO LEFT */}
        <div className="leftTexts">
          <Link style={{ textDecoration: "none" }} to="/">
            <p className="leftTexts">HOME</p>{" "}
          </Link>
          <Link style={{ textDecoration: "none" }} to="/posts">
            <p className="leftTexts">POSTS</p>{" "}
          </Link>
          {/* DROPDOWN */}
          <div className="dropdown">
            <p className="leftTexts">USERS</p>
            <div className="dropdown-content">
              {watchUsers.map((user, i) => (
                <div className="dropDownItems" key={i}>
                  <Link to={`/user/${user.username}`}>{user.username}</Link>
                </div>
              ))}
            </div>
          </div>

          <Link style={{ textDecoration: "none" }} to="/about">
            {" "}
            <p className="leftTexts">ABOUT</p>{" "}
          </Link>
        </div>
        {/* LOGO */}
        <div className="logo">
          <img src="https://i.ibb.co/XpK5YJg/logo.png"></img>
        </div>
        {/* SIGN IN BUTTON */}
        <div>
          {!cookies.access_token ? (
            <Link style={{ textDecoration: "none" }} to="/register">
              <button className="registerBtnDiv">REGISTER</button>
            </Link>
          ) : (
            <button className="registerBtnDiv" onClick={logout}>
              LOGOUT
            </button>
          )}
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
