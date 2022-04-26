import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import bg from "../assets/images/bg.png"
import SalonList from "../Salons/salon-list";
import PublicNavbar from "./Navbar";

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
  
class Home extends Component{
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
                <PublicNavbar />
                <Container>
                    <Row>
                        <Col className="d-flex align-items-center">
                            <h1 data-testid="salon">There are many variations of passages of Lorem Ipsum available</h1>
                        </Col>
                        <Col className="d-none d-lg-block">
                            <img src={bg} className="bg-img" alt="banner"/>
                        </Col>
                    </Row>
                    <h1 className="text-center my-4">Salons</h1>
                    <SalonList salons={this.state.salons}></SalonList>
                </Container>
            </>
        )
    }
}

export default Home;