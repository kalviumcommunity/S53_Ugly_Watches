import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
function Navbar() {
  const [cookies, setCookies] = useCookies(["access_token"])
  const navigate = useNavigate()
  const logout=()=>{
    setCookies("access_token", "")
    setCookies("username", "")
    window.localStorage.removeItem('userID')
    Navigate("/")
  }
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
          <Link style={{ textDecoration: "none" }} to="/saved-post">
            {" "}
            <p className="leftTexts">SAVED</p>{" "}
          </Link>
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
          {!cookies.access_token ? <Link style={{ textDecoration: "none" }} to="/register">
            <button className="registerBtnDiv">REGISTER</button>
          </Link> : <button className="registerBtnDiv" onClick={logout}>LOGOUT</button>}
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
