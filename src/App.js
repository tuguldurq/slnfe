import React, { Component } from "react";
import "./App.css"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BusinessRegister from "./pages/business/register";
import PublicNavbar from "./Components/Navbar";

class App extends Component {
  render(){
    return (
      <>
        <PublicNavbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register/business" element={<BusinessRegister/>}/>
        </Routes>
       </>
    );
  }
}

export default App;
 