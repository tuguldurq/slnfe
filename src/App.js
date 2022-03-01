import React, { Component } from "react";
import { Layout, Row, Col, Menu } from "antd";
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
          <Menu mode="horizontal">
            <Menu.Item key="1">Beauties</Menu.Item>
            <Menu.Item key="2" className="ml-auto">Login</Menu.Item>
            <Menu.Item key="3">Register</Menu.Item>
          </Menu>
        </Header>
        <Content>
          <Row gutter={[48,16]} justify="center">
            <Col flex={2} className="container">
              <h1>Salon order system</h1>
            </Col>
            <Col flex={1}>
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
 