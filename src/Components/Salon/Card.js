import React, { Component } from "react";
import { Card, Avatar } from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const{Meta} = Card;

class SalonCard extends Component{
    render(){
        return (
            <Card 
                cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>} 
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}>
                Card title

            </Card>
        )
    }
}

export default SalonCard;