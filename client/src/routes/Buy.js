import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { AiOutlineHeart } from "react-icons/ai";
import { ImLocation, ImCross } from "react-icons/im";
import Axios from "axios";
import "./Buy.css";

function Buy() {
  const [arr, setArr] = useState([]);
  const [shuffledArr, setShuffledArr] = useState([]);
  const [openPopupIndex, setOpenPopupIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("created_at_desc");
  const [propertyType, setPropertyType] = useState("all");
  const [filteredArr, setFilteredArr] = useState([]);

  const [clientInfo, setClientInfo] = useState({
    textarea: "",
    phoneNumber: "",
    email: "",
    name: "",
  });

  useEffect(() => {
    // Load filter state from local storage
    const storedFilters = JSON.parse(localStorage.getItem("buyFilters")) || {};

    // Set default values if there are no stored filters
    setSearchTerm(storedFilters.searchTerm || "");
    setPropertyType(storedFilters.propertyType || "all");
    setSortBy(storedFilters.sortBy || "created_at_desc");

    // Fetch data on component mount and set the state
    Axios.get("http://localhost:4000/sell/")
      .then((res) => {
        if (res.status === 200) {
          const data = res.data;
          const sortedData = [...data].sort(
            (a, b) => b.created_at - a.created_at
          );

          // If there are no stored filters, set filteredArr to show all properties
          const initialFilteredArr = storedFilters.searchTerm
            ? sortedData.filter((item) =>
                item.name
                  .toLowerCase()
                  .includes(storedFilters.searchTerm.toLowerCase())
              )
            : sortedData;

          setArr(sortedData);
          setShuffledArr([...sortedData].sort(() => Math.random() - 0.5));
          setFilteredArr(initialFilteredArr);
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));

    // Reset filters and fetch all properties if the component is mounted for the first time
    if (!Object.keys(storedFilters).length) {
      setSearchTerm("");
      setPropertyType("all");
      setSortBy("created_at_desc");

      Axios.get("http://localhost:4000/sell/")
        .then((res) => {
          if (res.status === 200) {
            const data = res.data;
            const sortedData = [...data].sort(
              (a, b) => b.created_at - a.created_at
            );

            setArr(sortedData);
            setShuffledArr([...sortedData].sort(() => Math.random() - 0.5));
            setFilteredArr(sortedData);
          } else {
            Promise.reject();
          }
        })
        .catch((err) => alert(err));
    }

    // Clear filters in local storage when the component mounts
    localStorage.removeItem("buyFilters");
  }, []);

  const handleOpenClick = (index) => {
    setOpenPopupIndex(index);
  };

  const closePopUp = () => {
    setOpenPopupIndex(null);
  };

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

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Filter the data based on the current filters
    const filteredData = applyFilters(arr, { searchTerm, propertyType });

    // Sort the data
    const sortedData = sortData(filteredData, sortBy);

    // Update the state with the filtered and sorted results
    setFilteredArr(sortedData);

    // Save filter state to local storage
    const filtersToSave = {
      searchTerm,
      propertyType,
      sortBy,
    };
    localStorage.setItem("buyFilters", JSON.stringify(filtersToSave));
  };

  const handleResetFilters = () => {
    // Reset filters to default values
    setSearchTerm("");
    setPropertyType("all");
    setSortBy("created_at_desc");

    // Fetch data again and reset filteredArr
    Axios.get("http://localhost:4000/sell/")
      .then((res) => {
        if (res.status === 200) {
          const data = res.data;
          const sortedData = sortData(data, sortBy);
          setArr(sortedData);
          const shuffledData = [...sortedData].sort(() => Math.random() - 0.5);
          setShuffledArr(shuffledData);
          setFilteredArr(sortedData);
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));

    // Remove filter state from local storage
    localStorage.removeItem("buyFilters");
  };

  const map = () => {
    return (
      <div className="properties-container">
        <div className="sidebar">
          <form onSubmit={handleFormSubmit}>
            <div className="input-group">
              <label htmlFor="searchTerm">Search</label>
              <input
                type="text"
                id="searchTerm"
                placeholder="Search by property name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label>Type of Purchase</label>
              <div>
                <div>
                  <label>All</label>
                  <input
                    type="checkbox"
                    checked={propertyType === "all"}
                    onChange={() => setPropertyType("all")}
                  />
                </div>
                <div>
                  <label>Buy</label>
                  <input
                    type="checkbox"
                    checked={propertyType === "Sell"}
                    onChange={() => setPropertyType("Sell")}
                  />
                </div>
                <div>
                  <label>Rent</label>
                  <input
                    type="checkbox"
                    checked={propertyType === "Rent"}
                    onChange={() => setPropertyType("Rent")}
                  />
                </div>
              </div>
            </div>
            <div className="input-group">
              <label>Sort</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="created_at_desc">Latest</option>
                <option value="created_at_asc">Oldest</option>
                <option value="cost_desc">Price high to low</option>
                <option value="cost_asc">Price low to high</option>
              </select>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="property-list">
          <div className="apartments">
            {filteredArr.map((val, index) => (
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

function sortData(data, sortBy) {
  return [...data].sort((a, b) => {
    const order = sortBy.endsWith("_desc") ? -1 : 1;
    const field = sortBy.split("_")[0];
    if (field === "created_at") {
      return order * (new Date(b[field]) - new Date(a[field]));
    }
    return order * (a[field] - b[field]);
  });
}

function applyFilters(data, filters) {
  const { searchTerm, propertyType } = filters;
  return data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (propertyType === "all" ||
        item.to.toLowerCase() === propertyType.toLowerCase())
  );
}
