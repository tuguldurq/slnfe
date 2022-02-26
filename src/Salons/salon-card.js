import { Row, Col } from "antd";
import SalonCard from "../Components/Salon/Card";

const style = {
    padding: "50px 200px",
    margin:0
};

function SalonList(props){
    return (
       <Row gutter={[48, 30]} justify="space-around" style={style}>
           {props.salons.map(element => {
                return (
                    <Col sm={{span:6}} xs={24}>
                        <SalonCard></SalonCard>
                    </Col>
                )
           })}
       </Row>
    );
}

export default SalonList;