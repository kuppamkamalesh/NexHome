import React from "react";
import "./Types.css";
export const featured = [
  {
    img: "./Images/h1.png",
    name: "Family House",
    cName: "property house",
    total: "122 Property",
  },
  {
    img: "./Images/h2.png",
    name: "House & Villa",
    cName: "property",
    total: "155 Property",
  },
  {
    img: "./Images/h3.png",
    name: "Apartment",
    cName: "property",
    total: "300 Property",
  },
  {
    img: "./Images/h4.png",
    name: "Office & Studio",
    cName: "property",
    total: "80 Property",
  },
  {
    img: "./Images/h5.png",
    name: "Villa & Condo",
    cName: "property",
    total: "80 Property",
  },
];
const Types = () => {
  // window.addEventListener("scroll", () => {
  //   const types = document.querySelector(".types");
  //   const scrollY = window.scrollY;
  //   const triggerPoint = 100; // Adjust as needed

  //   if (scrollY >= triggerPoint) {
  //     types.style.transform = "scale(1)";
  //   } else {
  //     types.style.transform = "scale(0)";
  //   }
  // });
  return (
    <div className="types">
      <h2 className="type">Featured Property Types</h2>
      <p className="content">Find All Type of property</p>
      <div className="property-types">
        {featured.map((items, index) => (
          <div className="box" key={index}>
            <img src={items.img} alt="img" />
            <h4 className="name">{items.name}</h4>
            <label>{items.total}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Types;
