import "./App.css";

import {  Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Buy from "./routes/Buy";
import Sell from "./routes/Sell";

import Book from "./routes/Book";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./routes/Login";


function App() {
  return (
    <div className="App">

    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/book" element={<Book />} />
        <Route path="/Login" element={<Login />} />

      </Routes>
      
    </div>
  );
}

export default App;
