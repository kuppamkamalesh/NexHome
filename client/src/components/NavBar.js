// import React, { useEffect, useState } from "react";
// import { MenuItems } from "./MenuItems";
// import { Link } from "react-router-dom";
// import { PiBuildingsLight } from "react-icons/pi";
// import { HiOutlineMenuAlt4 } from "react-icons/hi";
// import { FaRegTimesCircle } from "react-icons/fa";
// import "../../src/App.css";
// import { useSelector } from "react-redux";

// function NavBar() {
//   const { currentUser } = useSelector((state) => state.user);

//   const [click, setClick] = useState(false);
//   const handleClick = () => setClick(!click);
//   const [sticky, setSticky] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setSticky(window.scrollY > 1);
//     };

//     window.addEventListener("scroll", handleScroll);
//     // isLogin = login;
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <header className="nav-header">
//       <nav className={`nav ${sticky ? "sticky" : ""}`}>
//         <div>
//           <h2 href="/" className="logo">
//             <PiBuildingsLight />
//             Nex
//             <strong>Home</strong>
//           </h2>
//         </div>
//         <div>
//           <ul className={click ? "nav-menu active" : "nav-menu"}>
//             {MenuItems.map((item, index) => (
//               <li key={index}>
//                 <Link className={item.cName} to={item.url}>
//                   {item.tittle}
//                 </Link>
//               </li>
//             ))}
//             <a href="#contact-us">
//               <button className="nav-links">Contact us</button>
//             </a>
//           </ul>
//         </div>
//         <div className="hamburger" onClick={handleClick}>
//           {click ? (
//             <FaRegTimesCircle className="icon" />
//           ) : (
//             <HiOutlineMenuAlt4 className="icon" />
//           )}
//         </div>

// <div className="btn">
//   <Link to={"/profile"}>
//     {currentUser ? (
//       <button className="login">Profile</button>
//     ) : (
//       <button className="login">Login/Register</button>
//     )}
//   </Link>
// </div>
//       </nav>
//     </header>
//   );
// }

// export default NavBar;

//git

import React, { useEffect, useState } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import { PiBuildingsLight } from "react-icons/pi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";
import "../../src/App.css";

//

import { useSelector } from "react-redux";

function NavBar() {
  const { currentUser } = useSelector((state) => state.user);

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

        {/* <div className="dropdown" onClick={handleDropdownClick}>
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
        </div> */}

        {/* <Link to={"/profile"}>
              <button className="login">Profile</button>
            </Link> */}
        <div>
          {/* <div className="btn"> */}
          {currentUser ? (
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
                  <Link
                    onClick={() => {
                      localStorage.clear();
                    }}
                    to="/logout"
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <Link to={"/login"}>
              <button className="login">Login/Register</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
