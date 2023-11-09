import React from "react";
import "./Reviews.css";
import { IoStarSharp } from "react-icons/io5";

const Reviews = () => {
  return (
    <div className="reviews">
      <h2 className="best">Reviews</h2>
      <p className="latest">
        Are you thinking of selling, buying, or renting an apartment in India?
      </p>
      <p className="latest">
        NexHome can be your best ally to cover your needs. These are the
        opinions of our customers.
      </p>
      <div className="cards">
        <div className="card-content">
          <div className="review">
            <img src="../../Images/tony.jpg" alt="img" />
            <div>
              <p className="card-title">Dr.Tony</p>
              <p className="date">20,October 2023</p>
            </div>
          </div>
          <div className="icon">
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
          </div>
          <p className="card-para">
            The integrity and professionalism of NexHome set them apart. Their
            commitment to their clients' satisfaction and success in real estate
            is truly remarkable.
          </p>
        </div>
        <div className="card-content">
          <div className="review">
            <img src="../../Images/Andrea.jpg" alt="img" />
            <div>
              <p className="card-title">Andrea</p>
              <p className="date">20,October 2023</p>
            </div>
          </div>
          <div className="icon">
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
          </div>
          <p className="card-para">
            Selecting NexHome was the best decision we made in our real estate
            journey. Their knowledge, integrity, and dedication made all the
            difference
          </p>
        </div>
        <div className="card-content">
          <div className="review">
            <img src="../../Images/Dzenina.jpg" alt="img" />
            <div>
              <p className="card-title">Dzenina </p>
              <p className="date">20,October 2023</p>
            </div>
          </div>
          <div className="icon">
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
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
