import React from "react";
import { PiBuildingsLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import "./Footer.css";
import { CgInstagram } from "react-icons/cg";
import { CgFacebook } from "react-icons/cg";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandThreads } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div>
          <h1 href="/" className="logo">
            <PiBuildingsLight className="icon" />
            NexHome
          </h1>
          <p>
            Find a variety of properties that suit you very easilty Forget all
            difficulties in finding a residence for you
          </p>
        </div>
        <div className="quick-links">
          <ul className="links">
            <p>Quick Links</p>
            <li className="link">
              <Link className="footer-links" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="footer-links" to="/">
                Buy
              </Link>
            </li>
            <li>
              <Link className="footer-links" to="/">
                Sell
              </Link>
            </li>
            <li>
              <Link className="footer-links" to="/">
                Book
              </Link>
            </li>
          </ul>
        </div>
        <div className="quick-links">
          <ul className="links">
            <p>Support</p>
            <li className="list">
              <Link className="footer-links" to="/">
                About Us
              </Link>
            </li>
            <li>
              <Link className="footer-links" to="/">
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="footer-links" to="/">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link className="footer-links" to="/">
                privacy policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="quick-links">
          <ul className="links">
            <p>Get In Touch</p>
            <li>
              <a className="footer-links" href="/">
                nexhome@house.com
              </a>
            </li>
            <li>
              <address>Vijaywada</address>
            </li>
            <li>
              <ul className="social-list parent">
                <li className="child child-1">
                  <button className="button btn-1">
                    <CgInstagram />
                  </button>
                </li>
                <li className="child child-2">
                  <button className="button btn-1">
                    <RiTwitterXLine />
                  </button>
                </li>
                <li className="child child-3">
                  <button className="button btn-1">
                    <CgFacebook />
                  </button>
                </li>
                <li className="child child-4">
                  <button className="button btn-1">
                    <TbBrandThreads />
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
