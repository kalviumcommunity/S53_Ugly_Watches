import React from "react";

function Login() {
  return (
    <div className="loginBg">
      <div className="credentials">
        <div>
          <h1>WELCOME</h1>
          <form>
            <input placeholder="Name"></input>
            <input placeholder="Password"></input>
            <div className="submitBtn">
              <button className="formBtn">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
