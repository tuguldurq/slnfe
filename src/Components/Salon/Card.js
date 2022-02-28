import React, { Component } from "react";
import { Card, Avatar } from "antd";

const { Meta } = Card;

class SalonCard extends Component{
    render(){
        return (
            <Card 
                cover={<img alt="cover" className="cover" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>}
                className="card"
                hoverable="true">
                <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title="Card title"
                    description="This is the description"
                    >
                </Meta>
            </Card>
        )
    }
}

export default SalonCard;