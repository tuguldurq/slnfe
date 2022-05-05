import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function PublicNavbar(){
    return (
        <Navbar expand="lg" sticky="top" className="bg-body">
            <Container>
                <Navbar.Brand>
                    <Navbar.Brand>
                        <Link to="/">Beauties</Link>
                    </Navbar.Brand>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar"></Navbar.Toggle>
                <Navbar.Collapse id="navbar">
                    <Nav className="ml-auto p-2">
                        <Nav.Item className="ms-2">
                            <Nav.Link to="/business"> Бизнес </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="d-none d-lg-block">
                            <Link to="/login"> <Button className="bordered px-4" variant="outline-secondary" size="sm" >Нэвтрэх</Button></Link>
                        </Nav.Item>
                        <Nav.Item className="d-none d-lg-block">
                            <Link to="/register"><Button  className="bordered ms-2 px-4" variant="secondary" size="sm">Бүртгүүлэх</Button></Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default PublicNavbar;