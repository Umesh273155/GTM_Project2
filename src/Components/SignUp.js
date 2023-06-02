import React from "react";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import "./Style.css/SignUp.css";
import { setUser } from "../reduxx/authslices";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //signup
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios
        .post("/api/session/register", {
          name,
          email,
          password,
          repassword,
        })
        .then(({ data }) => dispatch(setUser(data.user)))
        .catch((error) => console.log(error));
      setName("");
      setEmail("");
      setPassword("");
      setRePassword("");
      console.log(response);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="main-login-box">
        <img src="shadow1.png" alt="#" className="login-upper-img" />
        <form className="signup" onSubmit={handleSignUp}>
          <h1 className="login-heading-main"> Welcome, Signup into you account </h1>
          <p className="login-heading-primary">
            It is our great pleasure to <span className="login-primary-2">have you on board! </span>{" "}
          </p>

          <div className="login-form-input">
            <input type="text" value={name} className="login-chooseState" placeholder="Enter the name of State" style={{ paddingLeft: "20px" }} onChange={(e) => setName(e.target.value)} />
            <br />
            <input type="email" value={email} className="login-phone" placeholder="Enter the email" style={{ paddingLeft: "20px" }} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} className="login-phone" placeholder="Enter the Password " style={{ paddingLeft: "20px" }} onChange={(e) => setPassword(e.target.value)} />
            <input type="password" value={repassword} className="login-phone" placeholder="Enter the password again " style={{ paddingLeft: "20px" }} onChange={(e) => setRePassword(e.target.value)} />
          </div>

          <button type="submit" className="login-submit-btn">
            Sign up
          </button>
          <p className="login-already">
            Already have an account?
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span className="login-already-1"> Sign in </span>
            </Link>
          </p>
        </form>
        <img src="shadow2.png" alt="#" className="login-lower-img" />
      </div>
    </>
  );
}

export default SignUp;
