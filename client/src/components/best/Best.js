import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import "./Best.css";

const Best = () => {
  const properties = [
    {
      img: "../../Images/House.jpg",
      name: "Happy Hearth House",
      tag: "For Rent",
      cName: "property house",
      city: "16 Jubilee Hills, Hyderabad",
      price: "30000",
      bedrooms: 3,
      bathrooms: 2,
    },
    {
      img: "./Images/House-1.jpg",
      name: "Villa Solitude",
      tag: "For Rent",
      cName: "property",
      city: "59 Whitefield, Bangalore",
      price: "70000",
      bedrooms: 4,
      bathrooms: 3,
    },
    {
      img: "./Images/villa-1.jpg",
      name: "Sunshine Villa",
      tag: "For Rent",
      cName: "property",
      city: "45 Thoraipakkam, Chennai",
      price: "90000",
      bedrooms: 5,
      bathrooms: 4,
    },
    {
      img: "./Images/villa-2.jpg",
      name: "Villa Serenity",
      tag: "For Rent",
      cName: "property",
      city: "34 Tadepalli, Vijayawada",
      price: "60000",
      bedrooms: 2,
      bathrooms: 2,
    },
    {
      img: "./Images/Apartment.jpg",
      name: "Skyline View Apartment",
      tag: "For Rent",
      cName: "property",
      city: "34 Tadepalli, Vijayawada",
      price: "60000",
      bedrooms: 2,
      bathrooms: 2,
    },
    {
      img: "./Images/office.jpg",
      name: "Corporate Nexus",
      tag: "For Rent",
      cName: "property",
      city: "34 Tadepalli, Vijayawada",
      price: "60000",
      bedrooms: 2,
      bathrooms: 2,
    },
  ];

  return (
    <div className="properties">
      <h2 className="best">Best Choices</h2>
      <h2 className="latest">Explore Featured Latest Properties</h2>
      <div className="apartments">
        {properties.map((item, index) => (
          <div className="single" key={index}>
            <img src={item.img} alt="Property" />
            <div className="single-text">
              <div className="tags">
                <p className="tag">{item.tag}</p>
                <i className="icon">
                  <AiOutlineHeart />
                </i>
              </div>
              <h4 className="property-name">{item.name}</h4>
              <p className="property-city">
                <ImLocation />
                {item.city}
              </p>
              <div className="property-details">
                <div className="bedrooms">
                  <i className="icon">🛏️</i>
                  <span>{item.bedrooms} </span>
                </div>
                <div className="bathrooms">
                  <i className="icon">🛁</i>
                  <span>{item.bathrooms} </span>
                </div>
              </div>
              <label className="price">
                <span className="currency-icon">₹</span>
                {item.price}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Best;
