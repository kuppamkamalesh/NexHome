import React, { useEffect, useState } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import { PiBuildingsLight } from "react-icons/pi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";
import "../../src/App.css";

function NavBar() {
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleClick = () => setClick(!click);

  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={scroll ? "sticky scrolled" : "sticky"}>
      <div className="navbar-container">
        <div>
          <h2 href="/" className={`logo ${scroll ? "scroll" : ""}`}>
            <PiBuildingsLight />
            Nex
            <strong>Home</strong>
          </h2>
        </div>
        <div className="menu-container">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  {item.tittle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaRegTimesCircle className="icon" />
          ) : (
            <HiOutlineMenuAlt4 className="icon" />
          )}
        </div>

        <div className="dropdown" onClick={handleDropdownClick}>
          <img
            src="../../Images/Andrea.jpg"
            alt="Profile"
            className="profile-picture"
          />{" "}
          {dropdownOpen && (
            <div className="dropdown-content">
              <Link to="/profile">Profile</Link>
              <Link to="/seller">Seller</Link>
              <Link to="/wishlist">Wishlist</Link>
              <Link to="/logout">Logout</Link>
            </div>
          )}
        </div>

        <div className="btn">
          <Link to={"/login"}>
            <button className={`login ${scroll ? "scroll" : ""}`}>
              Login/Register
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
