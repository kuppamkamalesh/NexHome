// import React, { useState } from "react";
// import NavBar from "../components/NavBar";
// import "./Login.css";
// import { Link } from "react-router-dom";
// import Axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phonenumber, setPhonenumber] = useState(0);

//   const arr = [name, email, password, phonenumber];

//   let navigate = useNavigate();

//   function handelClick() {
//     console.log("Function Called");

//     // alert("Creating Record");

//     const data = {
//       name: arr[0],
//       email: arr[1],
//       password: arr[2],
//       phonenumber: arr[3],
//     };
//     Axios.post("http://localhost:4000/nexHome/create-nexHome", data)
//       .then((res) => {
//         if (res.data === "User already exixts") {
//           // alert("User already exixts please try another email");
//           document.getElementById("Alert").innerHTML = (
//             <p class="alert alert-danger">
//               User already exixts please try another email
//             </p>
//           );
//         } else if (res.status === 200) {
//           // alert("Successful");
//           navigate("/login");
//         } else {
//           Promise.reject();
//         }
//       })
//       .catch((err) => {
//         alert(err);
//       });
//   }

//   return (
//     <div className="body" style={{ paddingTop: "100px" }}>
//       <NavBar />
//       <div className="Login-page">
//         <div>
//           <img
//             src="../../Images/signup-img.jpg"
//             alt="signup"
//             className="signup-page-img"
//           />
//         </div>
//         <div className="sign-form">
//           <form id="signupForm">
//             <h2>Signup</h2>
//             <div id="Alert"></div>
//             <label for="name">Name:</label>
//             <br />
//             <input
//               onChange={(e) => {
//                 setName(e.target.value);
//               }}
//               type="text"
//               id="name"
//               name="name"
//               required
//             />
//             <label for="email">Email:</label>
//             <br></br>
//             <input
//               onChange={(e) => {
//                 setEmail(e.target.value);
//               }}
//               type="email"
//               id="email"
//               name="email"
//               required
//               // oninput="displayEmailError(false)"
//             />
//             <div id="emailError" className="error-message"></div>
//             <label for="password">Password:</label>
//             <br></br>
//             <input
//               onChange={(e) => {
//                 setPassword(e.target.value);
//               }}
//               type="password"
//               id="password"
//               name="password"
//               required
//             />

//             <label for="phone">Phone Number:</label>
//             <br></br>
//             <input
//               onChange={(e) => {
//                 setPhonenumber(e.target.value);
//               }}
//               type="tel"
//               id="phone"
//               name="phone"
//               required
//             />
//             <br></br>

//             <button
//               onClick={() => {
//                 console.log(arr);
//                 handelClick();
//               }}
//               type="button"
//               className="btn btn-success"
//             >
//               Signup
//             </button>
//             <p>
//               Have an account?{" "}
//               <Link style={{ color: "#007bff" }} to="/login">
//                 Login
//               </Link>{" "}
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;


import React, { useState } from "react";
import NavBar from "../components/NavBar";
import "./Login.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber, setPhonenumber] = useState(0);

  const arr = [name, email, password, phonenumber];

  let navigate = useNavigate();

  function handelClick() {
    console.log("Function Called");

    // alert("Creating Record");

    const data = {
      name: arr[0],
      email: arr[1],
      password: arr[2],
      phonenumber: arr[3],
    };
    Axios.post("http://localhost:4000/nexHome/create-nexHome", data)
      .then((res) => {
        if (res.data === "User already exixts") {
          // alert("User already exixts please try another email");
          document.getElementById(
            "Alert"
          ).innerHTML = <p class="alert alert-danger">User already exixts please try another email</p>;
        } else if (res.status === 200) {
          // alert("Successful");
          navigate("/login");
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="body" style={{ paddingTop: "100px" }}>
      <NavBar />
      <div className="Login-page">
        <div>
          <img
            src="../../Images/signup-img.jpg"
            alt="signup"
            className="signup-page-img"
          />
        </div>
        <div className="sign-form">
          <form id="signupForm">
            <h2>Signup</h2>
            <div id="Alert"></div>
            <label for="name">Name:</label>
            <br />
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              id="name"
              name="name"
              required
            />
            <label for="email">Email:</label>
            <br></br>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              id="email"
              name="email"
              required
              // oninput="displayEmailError(false)"
            />
            <div id="emailError" className="error-message"></div>
            <label for="password">Password:</label>
            <br></br>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              id="password"
              name="password"
              required
            />

            <label for="phone">Phone Number:</label>
            <br></br>
            <input
              onChange={(e) => {
                setPhonenumber(e.target.value);
              }}
              type="tel"
              id="phone"
              name="phone"
              required
            />
            <br></br>

            <button
              onClick={() => {
                console.log(arr);
                handelClick();
              }}
              type="button"
              className="btn btn-success"
            >
              Signup
            </button>
            <p>
              Have an account?{" "}
              <Link style={{ color: "#007bff" }} to="/login">
                Login
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;