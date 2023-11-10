import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { RiMessage2Fill } from "react-icons/ri";
import { MdVideoChat } from "react-icons/md";
import { PiChatTextBold } from "react-icons/pi";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="whole-div" id="contact-us">
      <div className="info">
        <h2 className="us">Contact Us</h2>
        <p>
          Reach out to us, and let's create a conversation worth having. Your
          thoughts, our passion, a perfect connection.
        </p>
        <div className="contact-details">
          <div className="details">
            <div className="call">
              <FiPhoneCall className="icon" />
            </div>
            <div className="contact-info">
              <p className="tip">Call</p>
              <p className="second-text">987654321</p>
            </div>
            <button>Call Now</button>
          </div>

          <div className="details ">
            <div className="call">
              <RiMessage2Fill className="icon" />
            </div>
            <div className="contact-info">
              <p className="tip">Chat</p>
              <p className="second-text">639821548</p>
            </div>
            <button>Call Now</button>
          </div>

          <div className="details ">
            <div className="call">
              <PiChatTextBold className="icon" />
            </div>
            <div className="contact-info">
              <p className="tip">Message</p>
              <p className="second-text">99966688774</p>
            </div>
            <button>Call Now</button>
          </div>
          <div className="details ">
            <div className="call">
              <MdVideoChat className="icon" />
            </div>
            <div className="contact-info">
              <p className="tip">Video Call</p>
              <p className="second-text">8964556</p>
            </div>
            <button>Call Now</button>
          </div>
        </div>
      </div>
      <div className="contact-img">
        <img
          src="../../assests/contact-img.jpg"
          alt="img"
          className="contact-img"
        />
      </div>
    </div>
  );
};

export default Contact;
