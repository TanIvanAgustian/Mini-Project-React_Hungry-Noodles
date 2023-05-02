import { removeAuthCookie } from "../../../utils/cookies"
import { Link } from "react-router-dom";
import Logo from "../../../assets/Logo.png";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header(){

    function handleLogout(){
        removeAuthCookie()
        window.location.reload()
    }

    return <>
    <Navbar variant="dark" bg="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand href="/"><img src={Logo} alt="..." style={{width:"40px"}} />HungryNoodles</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link><Link to={"/Homepage"}>Home</Link></Nav.Link>
                <Nav.Link><Link to={"/Homepage/Menus"}>Menu</Link></Nav.Link>
                <Nav.Link><Link to={"/Homepage/Cart"}>Cart</Link></Nav.Link>
            </Nav>
            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example">
            <Nav>
                <NavDropdown
                id="nav-dropdown-dark-example"
                title="Dropdown"
                menuVariant="dark"
                >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => handleLogout()}>
                    Log Out
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
}