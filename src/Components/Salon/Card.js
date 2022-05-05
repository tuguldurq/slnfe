import React, { Component } from "react";
import { Card } from "react-bootstrap";

class SalonCard extends Component{
    render(){
        return (
            <Card style={{margin:10}} className="bordered">
                <Card.Img 
                    variant="top" 
                    src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2Fsb24lMjBpbnRlcmlvcnxlbnwwfHwwfHw%3D&w=1000&q=80" />
                <Card.Body>
                    <Card.Title>{this.props.data.name}</Card.Title>
                    <Card.Text> <i className="bi bi-geo-alt-fill"></i> {this.props.data.location}</Card.Text>
                    {/* <Button variant="primary">цаг авах</Button> */}
                </Card.Body>
            </Card>
        )
    }
}

export default SalonCard;