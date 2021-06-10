import React from 'react'
import { Navbar, Nav, NavLink, Button, NavDropdown, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import ELogo from '../assets/images/fast-cart.png'
import { useLocation } from "react-router-dom"


const Header = (props) => {
    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    return (
        <>
     
            <Navbar bg="light" variant="light" expand="lg" fixed="top">
                <Navbar.Brand href="#home"><img width='40px' height='40px' src={ELogo} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} onClick={() => props.SetReadOnlyHandler(true)} className={splitLocation[1] === "home" ? "active" : ""} to='/home'>Home</Nav.Link>
                        <Nav.Link as={Link} onClick={() => props.SetReadOnlyHandler(true)} className={splitLocation[1] === "aboutus" ? "active" : ""} to='/aboutus'>AboutUs</Nav.Link>
                        <NavDropdown className={splitLocation[1].startsWith("Department") ? "active" : ""} title="Department" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => props.SetReadOnlyHandler(true)} as={Link} to="/Department/Electrical">Electrical</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => props.SetReadOnlyHandler(true)} as={Link} to="/Department/Electronics">Electronics</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => props.SetReadOnlyHandler(true)} as={Link} to="/Department/IT">IT</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => props.SetReadOnlyHandler(true)} as={Link} to="/Department/Careers">Careers</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} onClick={() => props.SetReadOnlyHandler(false)} className={splitLocation[1] === "Products" ? "active" : ""} to="/Products">Products</Nav.Link>
                        <Nav.Link as={Link} className={splitLocation[1] === "Create" ? "active" : ""} to="/Create">Create</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header
