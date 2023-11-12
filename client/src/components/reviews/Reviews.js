import React from "react";
import { IoStarSharp } from "react-icons/io5";
import "./Reviews.css";

const Reviews = () => {
  return (
    <div className="reviews">
      <h2 className="best">Reviews</h2>
      <p className="latest">
        Are you thinking of selling, buying, or renting an apartment in India?
        NexHome can be your best ally to cover your needs. These are the
        opinions of our customers.
      </p>
      <div className="cards">
        <div className="card-content">
          <div className="review">
            <img
              src="../../Images/Andrea.jpg"
              alt="Customer"
              className="customer-img"
            />
            <div>
              <p className="card-title">Lilly</p>
              <p className="date">20, October 2023</p>
            </div>
          </div>
          <div className="icon">
            {[...Array(5)].map((_, index) => (
              <IoStarSharp key={index} className="star-icon" />
            ))}
          </div>
          <p className="card-para">
            The integrity and professionalism of NexHome set them apart. Their
            commitment to their clients' satisfaction and success in real estate
            is truly remarkable.
          </p>
        </div>

        {/* Additional review cards */}
        {/* Card 2 */}
        <div className="card-content">
          <div className="review">
            <img
              src="../../Images/tony.jpg"
              alt="Customer"
              className="customer-img"
            />
            <div>
              <p className="card-title">Abhiram</p>
              <p className="date">22, October 2023</p>
            </div>
          </div>
          <div className="icon">
            {[...Array(4)].map((_, index) => (
              <IoStarSharp key={index} className="star-icon" />
            ))}
          </div>
          <p className="card-para">
            Selecting NexHome was the best decision we made in our real estate
            journey. Their knowledge, integrity, and dedication made all the
            difference
          </p>
        </div>

        {/* Card 3 */}
        <div className="card-content">
          <div className="review">
            <img
              src="../../Images/Dzenina.jpg"
              alt="Customer"
              className="customer-img"
            />
            <div>
              <p className="card-title">Purna sai</p>
              <p className="date">25, October 2023</p>
            </div>
          </div>
          <div className="icon">
            {[...Array(4)].map((_, index) => (
              <IoStarSharp key={index} className="star-icon" />
            ))}
          </div>
          <p className="card-para">
            We made the best investment decision by choosing NexHome. Their
            top-notch guidance and support ensured our success in the real
            estate market.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
