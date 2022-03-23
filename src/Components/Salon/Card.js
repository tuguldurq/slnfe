import React, { Component } from "react";
import { Card } from "react-bootstrap";

class SalonCard extends Component{
    render(){
        return (
            <Card style={{margin:10}}>
                <Card.Img 
                    variant="top" 
                    src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2Fsb24lMjBpbnRlcmlvcnxlbnwwfHwwfHw%3D&w=1000&q=80" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default SalonCard;