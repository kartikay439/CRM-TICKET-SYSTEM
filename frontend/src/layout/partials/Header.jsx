import {React} from 'react';
import {Navbar,Nav,NavbarBrand} from 'react-bootstrap';
import logo from '../../assets/img/logo.png'

export const Header=()=>{
    return  ( <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
    <Navbar.Brand href="/">
    <img src={logo} alt="" width="75px" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/l1">Dashboard</Nav.Link>
        <Nav.Link href="/l2">Tickets</Nav.Link>
        <Nav.Link href="/l3">Logout</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>);
}