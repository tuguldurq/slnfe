import React, { Component } from "react";
import "./App.css"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BusinessRegister from "./pages/auth/reigster-business";
import PublicNavbar from "./Components/Navbar";
import Login from "./pages/auth/login";

class App extends Component {
  render(){
    return (
      <>
        <PublicNavbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register/business" element={<BusinessRegister/>}/>
        </Routes>
       </>
    );
  }
}

export default App;
 