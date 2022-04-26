import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function PublicNavbar(){
    return (
        <Navbar expand="lg" sticky="top" className="bg-body">
            <Container>
                <Navbar.Brand>
                    <Navbar.Brand> 
                        Beauties
                    </Navbar.Brand>
                </Navbar.Brand>
                {/* mobile */}
                <Navbar className="d-lg-none"> 
                    <Nav className="ml-auto">
                        <Nav.Item>
                            <Button className="bordered px-4" variant="outline-secondary" size="sm" >Register</Button>
                        </Nav.Item>
                        <Nav.Item>
                            <Button  className="bordered ms-2 px-4" variant="secondary" size="sm">Login</Button>
                        </Nav.Item>
                    </Nav>
                </Navbar> 
                {/* end mobile */}
                <Navbar.Toggle aria-controls="navbar"></Navbar.Toggle>
                <Navbar.Collapse id="navbar">
                    <Nav className="ml-auto p-2">
                    <Nav.Item>
                        <Nav.Link>About us</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>Contact</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="d-none d-lg-block">
                        <Link to="/register"> <Button className="bordered px-4" variant="outline-secondary" size="sm" >Register</Button></Link>
                    </Nav.Item>
                    <Nav.Item className="d-none d-lg-block">
                        <Link to="/login"><Button  className="bordered ms-2 px-4" variant="secondary" size="sm">Login</Button></Link>
                    </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default PublicNavbar;