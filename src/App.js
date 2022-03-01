import React, { Component } from "react";
import { Layout, Row, Col } from "antd";
import SalonList from "./Salons/salon-card";
import "./App.css"
import bg from "./assets/images/bg.png"
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
        <Header className="bg-white">
          Beauties
        </Header>
          <Content>
          <Row>
            <Col span={12} className="text-center">
              <h3>Hello</h3>
            </Col>
            <Col xs={24} sm={12}>
              <img src={bg} className="bg-img" alt="banner"/>
            </Col>
          </Row>
            <SalonList salons={this.state.salons}></SalonList>
          </Content>
        <Footer className="bg-white mt-5"/>
      </>
    );
  }
}

export default App;
 