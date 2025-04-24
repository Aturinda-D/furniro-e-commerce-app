import React from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import IconButton from "./IconButton";
import { IoIosSearch, IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline, IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = ({ sideBarIsVisible, setSideBarIsVisible }) => {
  return (
    <header>
      <div className="logo">
        <img src="assets/logos/logo.png" alt="LOGO" />
        <h1>Furniro</h1>
      </div>
      <nav className="hidden-on-mobile">
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
      </nav>
      <div className="actions">
        <IconButton icon={<MdOutlineAccountCircle size={24} />} />
        <IconButton icon={<IoIosSearch size={24} />} />
        <IconButton icon={<IoMdHeartEmpty size={24} />} />
        <IconButton icon={<IoCartOutline size={24} />} />
        <IconButton
          icon={<RxHamburgerMenu size={24} />}
          className="menu icon-button"
          onClick={() => {
            setSideBarIsVisible(true);
          }}
        />
      </div>
      {sideBarIsVisible && (
        <nav className="side-bar">
          <ul>
            <li>
              <IconButton
                icon={<IoClose size={24} />}
                className="close icon-button"
                onClick={() => {
                  setSideBarIsVisible(false);
                }}
              />
            </li>
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
        </nav>
      )}
    </header>
  );
};

export default Header;
