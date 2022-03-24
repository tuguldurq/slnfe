import React, { Component } from "react";
import { Navbar,Nav, Row, Col, Container, Button } from "react-bootstrap";
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
        <Navbar expand="lg" sticky="top" className="bg-body">
          <Container>
            <Navbar.Brand> Beauties </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar"></Navbar.Toggle>
            <Navbar.Collapse id="navbar"> 
              <Nav className="ml-auto p-2">
                <Nav.Item>
                  <Button className="bordered px-4" variant="outline-secondary" size="sm" >Register</Button>
                </Nav.Item>
                <Nav.Item>
                  <Button  className="bordered ms-2 px-4" variant="secondary" size="sm">Login</Button>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container >
          <Row>
            <Col className="d-flex align-items-center">
              <h1 data-testid="salon">There are many variations of passages of Lorem Ipsum available</h1>
            </Col>
            <Col>
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
 