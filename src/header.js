import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return(
    <Navbar>
      <Navbar.Brand href="/">MTG CardStore</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={NavLink} to="/" activeClassName="selected">Home</Nav.Link>
        <Nav.Link as={NavLink} to="/shop" activeClassName="selected">Shop</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link as={NavLink} to="/cart">Cart</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default Header