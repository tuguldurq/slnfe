import { Tabs, Tab, Container, Row, Col, Form, Card, FloatingLabel, Button, Image } from "react-bootstrap";

function Profile() {
    return (
        <>
            <Container>
                <Row className="mt-5">
                    <Col sm="8">
                        <Image src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2Fsb24lMjBpbnRlcmlvcnxlbnwwfHwwfHw%3D&w=1000&q=80"/>
                        <Tabs
                            defaultActiveKey="about"
                            transition={false}
                            className="my-3">
                            <Tab eventKey="about" title="Тухай">
                                Betwixt mine eye and heart a league is took, And each doth good turns now unto the other: When that mine eye is famish'd for a look, Or heart in love with sighs himself doth smother, With my love's picture then my eye doth feast, And to the painted banquet bids my heart; Another time mine eye is my heart's guest, And in his thoughts of love doth share a part: So, either by thy picture or my love, Thy self away, art present still with me;
                            </Tab>
                            <Tab eventKey="photos" title="Зураг">
                                Betwixt mine eye and heart a league is took, And each doth good turns now unto the other: When that mine eye is famish'd for a look, Or heart in love with sighs himself doth smother, With my love's picture then my eye doth feast, And to the painted banquet bids my heart; Another time mine eye is my heart's guest, And in his thoughts of love doth share a part: So, either by thy picture or my love, Thy self away, art present still with me;
                            </Tab>
                            <Tab eventKey="services" title="Үйлчилгээ" disabled></Tab>
                        </Tabs>
                    </Col>
                    <Col sm="4">
                        <Card>
                            <Card.Body className="p-5">
                                <h4 className="text-center my-5">Beauties</h4>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <FloatingLabel label="Цахим шуудан">
                                            <Form.Control type="text" placeholder="Цахим шуудан"></Form.Control>
                                        </FloatingLabel>
                                    </Form.Group>
                                    <Form.Group>
                                        <FloatingLabel label="Нууц үг">
                                            <Form.Control type="password" placeholder="Нууц үг"></Form.Control>
                                        </FloatingLabel>
                                    </Form.Group>
                                    <Button type="submit" className="my-4 py-1 w-100">Нэвтрэх</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Profile;