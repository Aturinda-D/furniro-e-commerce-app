import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-info">
          <h3>Funiro.</h3>
          <p>
            400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA
          </p>
        </div>
        <div className="footer-links">
          <h6>Links</h6>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/shop"}>Shop</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-help">
          <h6>help</h6>
          <li>
            <a href="#">Payment Options</a>
          </li>
          <li>
            <a href="#">Returns</a>
          </li>
          <li>
            <a href="#">Privacy Policies</a>
          </li>
        </div>
        <div className="footer-subscribe">
          <h6>Newsletter</h6>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="email"
              name="email"
              placeholder="enter your email address"
              required
            />
            <button type="submit">subscribe</button>
          </form>
        </div>
      </div>
      <div className="credits">
        <p>2023 furino. All rights reverved</p>
      </div>
    </footer>
  );
};

export default Footer;
