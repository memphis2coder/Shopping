import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';

// styles
import './Header.css';

export default function Header() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="light" bg="light" className="py-4">
                <Container>
                    <Navbar.Brand href="/">
                        <span id="logo">Shopping</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto text-center">
                            <Nav.Link className="nav-link" href="/">Home</Nav.Link>
                            <Nav.Link className="nav-link" href="/shirts">Shirts</Nav.Link>
                            <Nav.Link className="nav-link" href="/pants">Pants</Nav.Link>
                            <Nav.Link className="nav-link" href="/shoes">Shoes</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
};
