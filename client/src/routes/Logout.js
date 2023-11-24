import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

function Logout() {
  // const navigate = useNavigate();

  useEffect(() => {
    window.location.reload();
    // navigate("/login");
  });

  return (
    <div
      style={{ paddingTop: "100px", marginLeft: "auto", marginRight: "auto" }}
    >
      <NavBar />
      <div>
        <p style={{ fontSize: "100px" }}>You are successfully logged out</p>
      </div>
    </div>
  );
}

export default Logout;
