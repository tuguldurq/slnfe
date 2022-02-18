import React, { Component } from "react";
import { Row, Col, Card } from "antd";

class Salons extends Component{

    render(){
        return (
            <Row justify="space-around" style={{padding:150}}>
                <Col span={5}>
                    <Card>
                        <p>Hello </p>
                    </Card>
                </Col>
                <Col span={5}>
                    <Card>
                        <p>Hello </p>
                    </Card>
                </Col>
                <Col span={5}>
                    <Card>
                        <p>Hello </p>
                    </Card>
                </Col>
                <Col span={5}>
                    <Card>
                        <p>Hello </p>
                    </Card>
                </Col>
                <Col span={5}>
                    <Card>
                        <p>Hello </p>
                    </Card>
                </Col>
                <Col span={5}>
                    <Card>
                        <p>Hello </p>
                    </Card>
                </Col>
                <Col span={5}>
                    <Card>
                        <p>Hello </p>
                    </Card>
                </Col>
                <Col span={5}>
                    <Card>
                        <p>Hello </p>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default Salons;