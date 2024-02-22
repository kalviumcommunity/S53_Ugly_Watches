import React from "react";

function Login() {
  return (
    <div className="loginBg">
      <div className="credentials">
        <div>
          <h1>WELCOME</h1>
          <form>
            <input className="loginInputs" placeholder="Name"></input>
            <input className="loginInputs" placeholder="Password"></input>
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
