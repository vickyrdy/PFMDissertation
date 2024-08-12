import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TopNavbar = ({ onLogout }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">PFM Application</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavDropdown title="Account" id="basic-nav-dropdown">
            <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={onLogout}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopNavbar;
