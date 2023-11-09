import React from "react";
import NavBar from "../components/NavBar";
import "./Login.css";

function Login() {
  return (
    <div
      style={{
        backgroundColor: "#131d25",
        height: "100vh",
        color: "white",
        width: "100%",
      }}
    >
      <NavBar />
      <div className="main-box">
        <div className="Login">
          <h2>Login</h2>
          <form>
            <label>Mail Id</label>
            <br></br>
            <input type="email" placeholder="Enter mail Id" />
            <br></br>
            <label>PassWord</label>
            <br></br>
            <input type="password" placeholder="Enter Password"></input>
            {/* <button>Login</button> */}
            <br></br>
            <button type="button" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>

        <div className="SignUp">
          <p style={{ color: "violet" }}>
            If you are new to our website please SignUp first
          </p>
          <h2>SignUp</h2>
          <form>
            <label>Name</label>
            <br></br>
            <input type="text" placeholder="Enter your name"></input>
            <br />
            <label>Where are you from</label>
            <br></br>
            <input type="text" placeholder="Enter your City"></input>
            <br />
            <label style={{}}>Email</label>
            <br></br>
            <input type="email" placeholder="Enter your Mail Id"></input>
            <br />
            <label>PassWord</label>
            <br></br>
            <input type="password" placeholder="Enter your Password"></input>
            <br />
            <label>Re-Enter PassWord</label>
            <br></br>
            <input type="password" placeholder="Re-Enter your Password"></input>
            <br />
            <button type="button" className="btn btn-primary">
              SignUp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
