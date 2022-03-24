import { Row, Col } from "react-bootstrap";
import SalonCard from "../Components/Salon/Card";

function SalonList(props){
    return (
       <>
        <Row>
            {props.salons.map((element, i) => 
                <Col key={i} sm={6} lg={3}>
                    <SalonCard></SalonCard>
                </Col>
            )}
        </Row>
       </>
    );
}

export default SalonList;