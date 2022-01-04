import React from "react";
import "./Hero.css";

import Logo from "../../Images/logo/Namlipi.png";
import google from "../../Images/logo/google.png";
import facebook from "../../Images/logo/facebook.jpg";

const Hero = () => {
  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-between align-items-center">
        <div className="logo ">
          <img src={Logo} alt="" />
        </div>
        <div className="search_input">
          <form>
            <div className="m-auto">
              <label
                className="visually-hidden"
                htmlFor="inlineFormInputGroupUsername"
              >
                Username
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control input_area"
                  id="inlineFormInputGroupUsername"
                  placeholder="Username"
                />
                <div className="input-group-text">
                  <div className="icon">Search</div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="login">
          <div className="hover_login">
            <i className="fas fa-cart-plus  fs-5 me-2 me-4 addToCard"></i>
            <button className="btn border ">Login</button>
          </div>
          <div className="login_after_hover">
            <div className="login_box p-3">
              <h4>New User?</h4>
              <p>Sign up with just one click</p>
              <div className="login_icon_facebook_google d-flex">
                <div className="facebook me-3 border p-1 px-2">
                  <img src={facebook} alt="" />
                  Facebook
                </div>
                <div className="google  me-3 border p-1 px-2">
                  <img src={google} alt="" />
                  Google
                </div>
              </div>
              <p className="pt-3 pb-0">Login with Email and password</p>
              <div className="login_input_area">
                <form>
                  <input type="email" placeholder="Email" />
                  <input type="password" placeholder="Password" />
                  <p>Forget password ?</p>
                  <button className="login_btn">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
