import React from "react";
import NavBar from "../components/NavBar";
import { useSelector } from "react-redux";

function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div style={{ paddingTop: "100px" }}>
      <NavBar />
      <div>
        <div>
          <h1>Profile</h1>
        </div>
        <div>
          <label>Name :</label>
          <label>{currentUser.name}</label>
        </div>
        <div>
          <label>Email :</label>
          <label>{currentUser.email}</label>
        </div>
        <div>
          <label>Phone Number :</label>
          <label>{currentUser.phonenumber}</label>
        </div>
      </div>
    </div>
  );
}

export default Profile;
