import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';

export default function Header() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Brand href="#">Navbar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto text-center">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
};
