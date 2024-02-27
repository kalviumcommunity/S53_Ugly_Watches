import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [_, setCookies] = useCookies(["access_token"]);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });
      console.log("response: ", response);
      setCookies("access_token", response.data.token);
      alert("LOGIN SUCCESS");
      setCookies("username", response.data.username);
      navigate("/");
    } catch (err) {
      alert("UserName Or Password Is Incorrect");
      if (err.response && err.response.status === 400) {
        setErrorMessage(err.response.data.message);
      } else {
        setErrorMessage("An error occurred while processing your request.");
      }
      console.error(err);
    }
  };
  return (
    <div className="loginBg">
      <div className="credentials">
        <div>
          <h1>Welcome Back</h1>
          <form onSubmit={onSubmit}>
            <input
              className="loginInputs"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Name"
            ></input>
            <input
              className="loginInputs"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
            ></input>
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
