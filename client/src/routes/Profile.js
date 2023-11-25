// import React from "react";
// import NavBar from "../components/NavBar";
// import { useSelector } from "react-redux";

// function Profile() {
//   const { currentUser } = useSelector((state) => state.user);
//   return (
//     <div style={{ paddingTop: "100px" }}>
//       <NavBar />
//       <div>
//         <div>
//           <h1>Profile</h1>
//         </div>
//         <div>
//           <label>Name :</label>
//           <label>{currentUser.name}</label>
//         </div>
//         <div>
//           <label>Email :</label>
//           <label>{currentUser.email}</label>
//         </div>
//         <div>
//           <label>Phone Number :</label>
//           <label>{currentUser.phonenumber}</label>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;

import React from "react";
import NavBar from "../components/NavBar";
import { useSelector } from "react-redux";
import "./Profile.css";
// import Axios from "axios";

function Profile() {
  const { currentUser } = useSelector((state) => state.user);

  // function handleClick() {
  //   Axios.delete(http://localhost:4000/nexHome/delete/${currentUser._id})

  //     .then((res) => {
  //       if (res.status === 200) {
  //         localStorage.clear();
  //         alert("Record deleted successfully");
  //         window.location.reload(true);
  //       } else Promise.reject();
  //     })
  //     .catch((err) => {
  //       alert(err);
  //       console.log(err);
  //     });
  // }

  return (
    <div style={{ paddingTop: "100px" }}>
      <NavBar />
      <div className="profile-menu">
        <div>
          <img
            src="../../Images/user-img.png"
            alt="ad"
            className="profile-user-img"
          />
          {/* <h1>Profile</h1> */}
        </div>
        <div>
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
        <div className="profile-buttons">
          <div>
            <button type="button" className="edit-button">
              Edit Profile
            </button>
          </div>
          <div>
            <button type="button" className="delete-button">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
