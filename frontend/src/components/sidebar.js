import React from 'react';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = () => {
  return (
    <div className="sidebar bg-light">
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#expenses">Expenses</Nav.Link>
        <Nav.Link href="#reports">Reports</Nav.Link>
        <Nav.Link href="#settings">Settings</Nav.Link>
      </Nav>
    </div>
  );
}

export default Sidebar;
