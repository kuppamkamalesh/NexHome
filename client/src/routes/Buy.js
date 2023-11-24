// //RANDOM

// import { useEffect, useState } from "react";
// import NavBar from "../components/NavBar";
// import { AiOutlineHeart } from "react-icons/ai";
// import { ImLocation } from "react-icons/im";
// import Axios from "axios";

// function Buy() {
//   const [arr, setArr] = useState([]);

//   useEffect(() => {
//     Axios.get("http://localhost:4000/sell/")
//       .then((res) => {
//         if (res.status === 200) {
//           console.log(res.data);
//           setArr(res.data);
//         } else {
//           Promise.reject();
//         }
//       })
//       .catch((err) => alert(err));
//   }, []);

//   const map = () => {
//     const shuffledArr = [...arr].sort(() => Math.random() - 0.5);

//     const vall = (out) => {
//       if (out === "Sell") {
//         return <p className="tag">Buy</p>;
//       } else {
//         return <p className="tag">Rent</p>;
//       }
//     };

//     return (
//       <div className="properties" style={{ paddingTop: "100px" }}>
//         <div className="apartments">
//           {shuffledArr.map((val, index) => (
//             <div className="single" key={index}>
//               <img src={val.linkarr[0]} alt="houseimage" />
//               <div className="single-text">
//                 <div className="tags">
//                   <p className="tag">{val.Type}</p>
//                   <p>{vall(val.to)}</p>
//                   <i className="icon">
//                     <AiOutlineHeart />
//                   </i>
//                 </div>
//                 <h4 className="property-name">{val.name}</h4>
//                 <p className="property-city">
//                   <ImLocation />
//                   {val.Location}
//                 </p>
//                 <div className="property-details">
//                   <div className="bedrooms">
//                     <i className="icon">🛏</i>
//                     <span>{val.bedrooms} </span>
//                   </div>
//                   <div className="bathrooms">
//                     <i className="icon">🛁</i>
//                     <span>{val.bathrooms} </span>
//                   </div>
//                 </div>
//                 <label className="price">
//                   <span className="currency-icon">₹</span>
//                   {val.cost}
//                 </label>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div>
//       <NavBar />
//       {map()}
//     </div>
//   );
// }

// export default Buy;

import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { AiOutlineHeart } from "react-icons/ai";
import { ImLocation, ImCross } from "react-icons/im";
import Axios from "axios";

function Buy() {
  const [arr, setArr] = useState([]);
  const [shuffledArr, setShuffledArr] = useState([]);
  const [openPopupIndex, setOpenPopupIndex] = useState(null);

  const [clientInfo, setClientInfo] = useState({
    textarea: "",
    phoneNumber: "",
    email: "",
    name: "",
  });

  const handleTextAreaChange = (e) => {
    e.preventDefault();
    setClientInfo({ ...clientInfo, textarea: e.target.value });
  };

  const handleInputChange = (e, field) => {
    setClientInfo({ ...clientInfo, [field]: e.target.value });
  };

  const handleSubmit = () => {
    setClientInfo({
      textarea: "",
      phoneNumber: "",
      email: "",
      name: "",
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:4000/sell/")
      .then((res) => {
        if (res.status === 200) {
          const data = res.data;
          setArr(data);
          const shuffledData = [...data].sort(() => Math.random() - 0.5);
          setShuffledArr(shuffledData);
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
  }, []);

  const handleOpenClick = (index) => {
    setOpenPopupIndex(index);
  };

  const closePopUp = () => {
    setOpenPopupIndex(null);
  };

  const map = () => {
    return (
      <div className="properties" style={{ paddingTop: "100px" }}>
        <div className="apartments">
          {shuffledArr.map((val, index) => (
            <div className="single" key={index}>
              <img src={val.linkarr[0]} alt="houseimage" />
              <div className="single-text">
                <div className="tags">
                  <div>
                    <p className="tag">{val.Type}</p>
                  </div>
                  <div>
                    <p>
                      {val.to === "Sell" ? (
                        <p className="tag">Buy</p>
                      ) : (
                        <p className="tag">Rent</p>
                      )}
                    </p>
                  </div>
                </div>
                <h4 className="property-name">{val.name}</h4>
                <p className="property-city">
                  <ImLocation />
                  {val.Location}
                </p>
                <div className="property-details">
                  <div className="bedrooms">
                    <i className="icon">🛏</i>
                    <span>{val.bedrooms} </span>
                  </div>
                  <div className="bathrooms">
                    <i className="icon">🛁</i>
                    <span>{val.bathrooms} </span>
                  </div>
                </div>
                <label className="price">
                  <span className="currency-icon">₹</span>
                  {val.cost}
                </label>
                <div className="buyer-tag">
                  <button
                    type="button"
                    className="contact-button"
                    onClick={() => handleOpenClick(index)}
                  >
                    Contact Agent
                  </button>
                  <i className="icon">
                    <AiOutlineHeart />
                  </i>
                </div>
              </div>
            </div>
          ))}
        </div>
        {openPopupIndex !== null && (
          <div className="popup">
            <div className="popup-header">
              <h1>Hello this is pop up</h1>
              <div className="popup-images">
                {shuffledArr[openPopupIndex].linkarr.map(
                  (image, imageIndex) => (
                    <img key={imageIndex} src={image} alt={"houseimage"} />
                  )
                )}
              </div>

              <h4>{shuffledArr[openPopupIndex].name}</h4>
              <p>Type: {shuffledArr[openPopupIndex].Type}</p>
              <p>Location: {shuffledArr[openPopupIndex].Location}</p>
              <p>Bedrooms: {shuffledArr[openPopupIndex].bedrooms}</p>
              <p>Bathrooms: {shuffledArr[openPopupIndex].bathrooms}</p>
              <p>Cost: ₹{shuffledArr[openPopupIndex].cost}</p>

              <div className="popup-content">
                <textarea
                  placeholder="Enter your information..."
                  rows="4"
                  value={clientInfo.textarea}
                  onChange={(e) => handleTextAreaChange(e)}
                ></textarea>
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={clientInfo.phoneNumber}
                  onChange={(e) => handleInputChange(e, "phoneNumber")}
                />
                <input
                  type="text"
                  placeholder="Email"
                  value={clientInfo.email}
                  onChange={(e) => handleInputChange(e, "email")}
                />
                <input
                  type="text"
                  placeholder="Name"
                  value={clientInfo.name}
                  onChange={(e) => handleInputChange(e, "name")}
                />
                <button onClick={handleSubmit}>Submit</button>
              </div>
            </div>
            <ImCross className="popup-icon" onClick={closePopUp} />
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <NavBar />
      {map()}
    </div>
  );
}

export default Buy;
