import React, { useState, useEffect } from "react";
import "./MainPage.css";
import { FaArrowRight } from "react-icons/fa6";

import NavBar from "../NavBar";

const MainPage = () => {
  const images = [
    {
      url: "../../Images/img-2.jpg",
      text: "Welcome To Your Dream Home Destination",
      className: "slide-1",
    },
    {
      url: "../../Images/Beautiful-Home.jpeg",
      text: "Beautiful House",
      className: "slide-2",
    },
    {
      url: "../../Images/interior.jpeg",
      text: "Spacious Living Room",
      className: "slide-2",
    },
    {
      url: "../../Images/interior-2.jpg",
      text: "Best Interior",
      className: "slide-2",
    },
    {
      url: "../../Images/backyard.jpeg",
      text: "Scenic Backyard",
      className: "slide-2",
    },
    {
      url: "../../Images/beautiful-house.jpeg",
      text: "Beautiful House",
      className: "slide-2",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage, images.length]);

  return (
    <div className="carousel">
      <NavBar />
      <div className="image-container">
        <img
          className="mainpage-images"
          src={images[currentImage].url}
          alt={images[currentImage].text}
        />
        <div className={`image-text ${images[currentImage].className}`}>
          {images[currentImage].text}
          <div>
            <button className="explore-button">
              {" "}
              <FaArrowRight className="arrow" />
              Explore
            </button>
          </div>
        </div>
        <div className="dots-container">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentImage ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
