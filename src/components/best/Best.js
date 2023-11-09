import React from "react";
import "./Best.css";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCurrencyRupee } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
export const Property = [
  {
    img: "./Images/House-1.jpg",
    name: "Happy Hearth House",
    tag: "For Rent",
    list: AiOutlineHeart,
    cName: "property house",
    city: "16 Jubilee Hills, Hyderabad",
    price: "30000",
  },
  {
    img: "./Images/villa-1.jpg",
    name: "Sunshine Villa",
    tag: "For Rent",
    cName: "property",
    city: "59 Whitefield, Banglore",
    price: "70000",
  },
  {
    img: "./Images/villa-2.jpg",
    name: "Villa Serenity",
    tag: "For Rent",
    cName: "property",
    city: "45 Thoraipakkam, Chennai",
    price: "90000",
  },
  {
    img: "./Images/Apartment.jpg",
    name: "Skyline View Apartment",
    tag: "For Rent",
    cName: "property",
    city: "34 Tadepalli, Vijayawada",
    price: "60000",
  },
  {
    img: "./Images/office.jpg",
    name: "Corporate Nexus",
    tag: "For Rent",
    cName: "property",
    city: "69 Jubilee Hills, Hyderabad",
    price: "30000",
  },
];
const Best = () => {
  return (
    <div className="properties">
      <h2 className="best">Best Choices</h2>
      <h2 className="latest">Explore Featured Latest Properites</h2>
      <div className="apartments">
        {Property.map((items, index) => (
          <div className="single" key={index}>
            <img src={items.img} alt="img" />
            <div className="single-text">
              <div className="tags">
                <p className="tag">{items.tag}</p>
                <AiOutlineHeart className="icon" />
                {items.list}
              </div>
              <h4 className="latest">{items.name}</h4>
              <p>
                <ImLocation />
                {items.city}
              </p>

              <label className="price" style={{ color: "rgb(255, 152, 0)" }}>
                <BsCurrencyRupee className="icon" />
                {items.price}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Best;
