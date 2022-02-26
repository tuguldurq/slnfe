import React, { Component } from "react";
import { Layout } from "antd";
import SalonList from "./Salons/salon-card";

const {Header, Footer, Content} = Layout;

const salonList = [
  {name: "Salon 1", image:"", location:""},
  {name: "Salon 1", image:"", location:""},
  {name: "Salon 1", image:"", location:""},
  {name: "Salon 1", image:"", location:""},
  {name: "Salon 1", image:"", location:""},
  {name: "Salon 1", image:"", location:""},
  {name: "Salon 1", image:"", location:""},
  {name: "Salon 1", image:"", location:""},
]

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      salons:[]
    }
  }
 
  componentDidMount(){
    this.setState({
      salons: salonList
    })
  }
  

  render(){
    return (
      <>
        <Header/>
          <Content>
            <SalonList salons={this.state.salons}></SalonList>
          </Content>
        <Footer/>
      </>
    );
  }
}

export default App;
 