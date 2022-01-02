import React from "react";
import "./Footer.css";
import Logo from "../../../Images/logo/Logo.png";
import Namlipi from "../../../Images/logo/Namlipi.png";
import Facebook from "../../../Images/logo/facebook.jpg";
import Instagram from "../../../Images/logo/instagram.jpg";
import Twitter from "../../../Images/logo/twitter.png";
import Linkedin from "../../../Images/logo/linkedin.png";
import Google from "../../../Images/logo/google.png";
import Youtub from "../../../Images/logo/youtub.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 ">
            <div className="footer_logo_social_media text-center">
              <div className="footer_logo text-center">
                <img
                  className="img-fluid kalantor_logo"
                  src={Logo}
                  alt="kalantor_logo"
                />
                <br />
                <img
                  className="img-fluid namlipi "
                  src={Namlipi}
                  alt="kalanto_namlipi"
                />
              </div>
              <div className="social_icons">
                <h6 className="pt-4">Follow us</h6>
                <hr className=" m-1" />
                <div>
                  <Link
                    to="https://www.facebook.com/kalantorprokashoni/"
                    target="_blank"
                  >
                    <img src={Facebook} alt="" />
                  </Link>
                  <Link
                    to="https://www.facebook.com/kalantorprokashoni/"
                    target="_blank"
                  >
                    <img src={Instagram} alt="" />
                  </Link>
                  <Link
                    to="https://www.facebook.com/kalantorprokashoni/"
                    target="_blank"
                  >
                    <img src={Twitter} alt="" />
                  </Link>
                  <Link
                    to="https://www.facebook.com/kalantorprokashoni/"
                    target="_blank"
                  >
                    <img src={Linkedin} alt="" />
                  </Link>
                  <Link
                    to="https://www.facebook.com/kalantorprokashoni/"
                    target="_blank"
                  >
                    <img src={Google} alt="" />
                  </Link>
                  <Link
                    to="https://www.facebook.com/kalantorprokashoni/"
                    target="_blank"
                  >
                    <img src={Youtub} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="footer_middle text-center">
              <h6>Address</h6> <hr className="m-0 mb-2" />
              <p>
                <i className="fas fa-map-marker-alt"></i> <strong>অফিস</strong>{" "}
                : ১৮, বশির মার্কেট, ২য় তলা, বন্দরবাজার, সিলেট -৩১০০
              </p>
              <p>
                <i className="fas fa-map-marker-alt"></i>
                <strong>ঢাকা বিক্রয়কেন্দ্র</strong> : ঢাকা বিক্রয়কেন্দ্র :
                ইসলামী টাওয়ার, ১ম তলা,
              </p>
              <p className="ms-3"> দোকান নং ১৬, বাংলাবাজার, ঢাকা-১১০০</p>
              <h6 className="mt-3">contact info :</h6> <hr className=" my-2 " />
              <p>
                <i className="fas fa-phone-alt"></i> 01312-103590
              </p>
              <p>
                <i className="fas fa-phone-alt"></i> 01711-984821
              </p>
              <p>
                <i className="fas fa-envelope"></i>{" "}
                kalantorprokashoni10@gmail.com
              </p>
              <p>
                <i className="fas fa-globe"></i> www.kalantorprokashoni.com
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer_right_site text-center">
              <h5 className="mb-2">Like on Facebook Page</h5>
              <iframe
                src="https://www.w3schools.com"
                title="kalantor prokashoni"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
