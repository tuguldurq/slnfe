import { Col, Container, Form, Row, Button, FloatingLabel } from "react-bootstrap";

function Login(){
    return (
        <>
            <Container>
                <Row className="min-vh-85 align-items-center justify-content-center">
                    <Col sm={12} xl={3}>
                        <div>
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
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Login;