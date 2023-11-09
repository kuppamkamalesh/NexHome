import React from "react";
import "./MainPage.css";


import "./MainPage.css";
import NavBar from "../NavBar";
function MainPage() {
  return (
    <div className="main">
      <NavBar />
      <div className="main-content">
        <h1>
          Welcome to Your<strong> Dream </strong> Home{" "}
          <strong>Destination!</strong>
        </h1>
        <p className="text">
          <q className="custom-quote">
            {" "}
            Celebrate life's greatest moments in the comfort of your dream home{" "}
          </q>
        </p>
        
      </div>
    </div>
  );
}

export default MainPage;
