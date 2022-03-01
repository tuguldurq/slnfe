import { Button, Col, Row } from "antd";
import SalonCard from "../Components/Salon/Card";

function SalonList(props){
    return (
       <>
        <Row gutter={[48, 16]} justify="center" className="m-4">
            {props.salons.map((element, i) => 
                <Col>
                    <SalonCard></SalonCard>
                </Col>
            )}
        </Row>
        <div className="text-center mt-5">
            <Button type="primary" shape="round">See more</Button>
        </div>
       </>
    );
}

export default SalonList;