import { removeAuthCookie } from "../../../utils/cookies"
import Logo from "../../../assets/Logo.png";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header(){

    function handleLogout(){
        removeAuthCookie()
        window.location.reload()
    }

    return <>
    <Navbar variant="dark" bg="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand href="/Homepage"><img src={Logo} alt="..." style={{width:"40px"}} />HungryNoodles</Navbar.Brand>
            <Nav className="text-light me-auto">
                <Nav.Link href={"/Homepage"}>Home</Nav.Link>
                <Nav.Link href={"/Homepage/Menus"}>Menu</Nav.Link>
                <Nav.Link href={"/Homepage/Cart"}>Cart</Nav.Link>
                <Nav.Link href={"/Homepage/History"}>History</Nav.Link>
            </Nav>
            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example" className={"justify-content-end"}>
            <Nav>
                <button onClick={() => handleLogout()} className="btn btn-outline-danger me-3">Log Out</button>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
}