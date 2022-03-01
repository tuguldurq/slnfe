import { Button, Col, Row } from "antd";
import SalonCard from "../Components/Salon/Card";
const style = {
    padding: "50px 200px",
    margin:0
};

function SalonList(props){
    return (
       <>
       <Row gutter={[48, 30]} justify="space-around mt-5" style={style}>
           {props.salons.map((element, i) => 
                <Col sm={{span:6}}  xs={24} key={i}>
                    <SalonCard></SalonCard>
                </Col>
           )}
       </Row>
       <div className="text-center">
            <Button type="primary" shape="round">See more</Button>
       </div>
       </>
    );
}

export default SalonList;