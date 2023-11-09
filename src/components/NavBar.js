import React, { useEffect, useState } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import { PiBuildingsLight } from "react-icons/pi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="nav-header">
      <nav className={`nav ${sticky ? "sticky" : ""}`}>
        <h1 href="/" className="logo">
          <PiBuildingsLight className="icon" />
          Nex<strong>Home</strong>
        </h1>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                {item.tittle}
              </Link>
            </li>
          ))}
          <a href="#contact-us">
            <button className="nav-links">Contact us</button>
          </a>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaRegTimesCircle className="icon" />
          ) : (
            <HiOutlineMenuAlt4 className="icon" />
          )}
        </div>

        <div className="btn">
        <Link  to={"/login"}>
            <button className="login">Login/Register</button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
