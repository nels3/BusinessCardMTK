import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarLink from "src/components/navbar/NavbarLink";
import "src/static/navbar.css";

const ScrollNavbar = () => {
  return (
    <Navbar sticky="top" bg="dark" data-bs-theme="dark" expand="lg">
      <Container>
        <Navbar.Brand>Mateusz Pisze Kot</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavbarLink to="test1" title="Test 1" />
            <NavbarLink to="test2" title="Test 2" />
            <NavbarLink to="test3" title="Test 3" />
            <NavbarLink to="test4" title="Test 4" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ScrollNavbar;
