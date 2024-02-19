
function Navbar() {
  return (
    <div className="parentDiv">
      <nav>
        {/* ELEMENTS TO LEFT */}
        <div className="leftTexts">
          <p>HOME</p>
          <p>POSTS</p>
          <p>SAVED</p>
          <p>ABOUT</p>
        </div>
        {/* LOGO */}
        <div className="logo">
          <img src="https://i.ibb.co/XpK5YJg/logo.png"></img>
        </div>
        {/* SIGN IN BUTTON */}
        <div className="registerBtnDiv">
          <button>REGISTER</button>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
