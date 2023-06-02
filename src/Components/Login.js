import React, { useState } from "react";
import "./Style.css/Login.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../reduxx/authslices";
import { Link, useNavigate } from "react-router-dom";

function CreateAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post("/api/session/login", {
          email,
          password,
        })
        .then((response) => {
          dispatch(login(response.data.user));
        })
        .catch((err) => console.log(err));
      setEmail("");
      setPassword("");
       navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="main-login-box">
        <img src="shadow1.png" alt="#" className="login-upper-img" />
        <form className="login" onSubmit={handleSignIn}>
          <h1 className="login-heading-main"> Welcome, Log into you account </h1>
          <p className="login-heading-primary">
            It is our great pleasure to <span className="login-primary-2"> have you on board! </span>
          </p>
          <div className="login-form-input">
            <input type="email" value={email} className="login-phone input__" placeholder="Enter the email " onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} className="login-phone input__" placeholder="Enter the password " onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="login-submit-btn" >
            Login
          </button>
          <p className="login-already">
           Create New Account?
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <span className="login-already-1"> Sign up </span>
            </Link>
          </p>
        </form>
        <img src="shadow2.png" alt="#" className="login-lower-img" />
      </div>
    </>
  );
}
export default CreateAccount;
