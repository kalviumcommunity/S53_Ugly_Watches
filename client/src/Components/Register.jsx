import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/auth/register", {
        username,
        password,
      });
      console.log("Registration Successful!");
      alert("Registration Successful! Redirecting You To Login Page");
      navigate("/login");
    } catch (error) {
      alert("Username Exists, Try Logging In");
      console.error("error: ", error);
    }
  };
  return (
    <div className="loginBg">
      <div className="credentials">
        <div>
          <h1>WELCOME</h1>
          <form onSubmit={onSubmit}>
            <input
              className="loginInputs"
              placeholder="Name"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <input
              type="password"
              className="loginInputs"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <div className="submitBtn">
              <button className="formBtn" type="submit">
                SUBMIT
              </button>
            </div>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/login"
            >
              <p className="ptagRegister">Already a User?</p>{" "}
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
