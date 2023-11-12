import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { RiMessage2Fill } from "react-icons/ri";
import { MdVideoChat } from "react-icons/md";
import { PiChatTextBold } from "react-icons/pi";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container" id="contact-us">
      <div className="contact-info">
        <h2 className="contact-heading">Contact Us</h2>
        <p className="contact-description">
          Reach out to us, and let's create a conversation
        </p>
      </div>
      <div className="contact-cards">
        <div className="contact-card">
          <div className="contact-icon">
            <FiPhoneCall />
          </div>
          <div className="contact-text">
            <p className="contact-tip">Call</p>
            <p className="contact-number">223546454</p>
          </div>
          <button className="contact-button">Call Now</button>
        </div>
        <div className="contact-card">
          <div className="contact-icon">
            <RiMessage2Fill />
          </div>
          <div className="contact-text">
            <p className="contact-tip">Chat</p>
            <p className="contact-number">154454745</p>
          </div>
          <button className="contact-button">Chat Now</button>
        </div>
        <div className="contact-card">
          <div className="contact-icon">
            <MdVideoChat />
          </div>
          <div className="contact-text">
            <p className="contact-tip">Video Chat</p>
            <p className="contact-number">987654321</p>
          </div>
          <button className="contact-button">Start Video Chat</button>
        </div>
        <div className="contact-card">
          <div className="contact-icon">
            <PiChatTextBold />
          </div>
          <div className="contact-text">
            <p className="contact-tip">Message</p>
            <p className="contact-number">987654321</p>
          </div>
          <button className="contact-button">Send your questions</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
