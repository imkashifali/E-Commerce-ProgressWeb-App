import { Facebook, Twitter, Instagram } from "@material-ui/icons";
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row footer-head text-warning">
          <div className="col footer-col">
            <h3>Get to Know Us</h3>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Careers</li>
              <li>Press Releases</li>
              <li>Amazon Cares</li>
              <li>Gift a Smile</li>
            </ul>
          </div>

          <div className="col footer-col">
            <h3>Connect with Us</h3>
            <ul className="list-unstyled">
              <li className="footer-Socail">
                <Facebook /> Facebook
              </li>
              <li className="footer-Socail">
                <Twitter />
                Twitter
              </li>
            <li className="footer-Socail">
                <Instagram />
                Instagram
              </li>
            </ul>
          </div>
          <div className="col footer-col">
            <h3 className="list-h3">Make Money with Us</h3>
            <ul className="list-unstyled">
              <li>Sell on Amazon</li>
              <li>Sell under Amazon Accelerator</li>
              <li>Become an Affiliate</li>
              <li>Fulfilment by Amazon</li>
              <li>Advertise Your Products</li>
              <li>Amazon Pay on Merchants</li>
            </ul>
          </div>
          <div className="col footer-col">
            <h3 className="list-h3">Let Us Help You</h3>
            <ul className="list-unstyled">
              <li>Your Account</li>
              <li>Returns Centre</li>
              <li>Become an Affiliate</li>
              <li>100% Purchase Protection</li>
              <li>Amazon App Download</li>
              <li>Amazon Assistant Download</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
