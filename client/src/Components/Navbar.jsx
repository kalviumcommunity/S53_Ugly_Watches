import { Link } from "react-router-dom";
function Navbar() {
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
          <Link style={{ textDecoration: "none" }} to="/login">
            <button className="registerBtnDiv">REGISTER</button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
