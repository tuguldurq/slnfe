import React, { Component } from "react";
import { Nav, Row, Col, Container } from "react-bootstrap";
import SalonList from "./Salons/salon-list";
import "./App.css"
import bg from "./assets/images/bg.png"
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
          <Nav>
            <Nav.Item>
              <Nav.Link>Hi</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Hi</Nav.Link>
            </Nav.Item>
          </Nav>
        <Container >
          <Row>
            <Col flex={2} className="container">
              <h1 data-testid="salon">Salon</h1>
            </Col>
            <Col flex={1}>
              <img src={bg} className="bg-img" alt="banner"/>
            </Col>
          </Row>
          <SalonList salons={this.state.salons}></SalonList>
        </Container>
      </>
    );
  }
}

export default App;
 