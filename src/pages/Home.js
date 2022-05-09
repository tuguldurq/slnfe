import React, { Component } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import bg from "../assets/images/bg.png"
import SalonList from "../Components/Salon/salon-list";

const salonList = [
    {id: 1, name: "LOTUS", image:"", location:"10-р хороолол GOLDEN PARK"},
    {id: 2, name: "ГЭГЭЭН", image:"", location:"13-р хороолол Торгоны зам"},
    {id: 3, name: "ТАЛСТ", image:"", location:"13-р хороолол"},
    {id: 4, name: "ROSEE", image:"", location:"УИД-ээс чанх урагш циркд"},
    {id: 5, name: "WELLA", image:"", location:"Гранд плазагийн баруун урд"},
    {id: 6, name: "ЦАГААН СУВД", image:"", location:"Олимп хотхон"},
    {id: 7, name: "ТУЯАРАХ", image:"", location:"Маршал Таун, 106-р байр"},
    {id: 8, name: "MATRIX", image:"", location:"Хүүхдийн Паркийн зүүн талд"},
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
                <Container>
                    <Row className="mt-md-5">
                        <Col className="d-flex align-items-center">
                            <h1 data-testid="salon">Онлайн-д суурилсан "САЛОН" захиалгын систем</h1>
                        </Col>
                        <Col className="d-none d-lg-block">
                            <img src={bg} className="bg-img" alt="banner"/>
                        </Col>
                    </Row>
                    <div className="mt-md-5">
                        {/* <h1 className="text-center my-4">САЛОН</h1> */}
                        <SalonList salons={this.state.salons}></SalonList>
                    </div>
                    <div className="text-center my-5">
                        <Button variant="secondary">Бүгдийг үзэх <i className="bi bi-arrow-right"></i></Button>
                    </div>
                </Container>
            </>
        )
    }
}

export default Home;