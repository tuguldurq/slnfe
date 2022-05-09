import React, { Component } from "react";
import "./App.css"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BusinessRegister from "./pages/auth/reigster-business";
import PublicNavbar from "./Components/Navbar";
import Login from "./pages/auth/login";
import Profile from "./pages/Salon/profile";

class App extends Component {
  render(){
    return (
      <>
        <PublicNavbar/>
        <Routes>
          <Route path="/slnfe" element={<Home/>}/>
          <Route path="/slnfe/login" element={<Login/>}/>
          <Route path="/slnfe/register/business" element={<BusinessRegister/>}/>
          <Route path="/slnfe/salon/:id" element={<Profile/>}/>
        </Routes>
       </>
    );
  }
}

export default App;
 