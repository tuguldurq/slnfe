import { Col } from "antd";
import SalonCard from "../Components/Salon/Card";

function SalonList(props){
    return (
       <>
       <div className="ant-row ant-row-space-around">
            Cards
           {props.salons.map((element, i) => 
                <Col sm={{span:6}} xs={24} key={i}>
                    <SalonCard></SalonCard>
                </Col>
           )}
       </div>
       </>
    );
}

export default SalonList;