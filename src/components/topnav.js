import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Container, Badge} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const TopNav = (props) => {
  return(
    <Navbar fixed="top" bg="light" variant="light">
      <Container>
        <Navbar.Brand as={NavLink} to="/">MTG CardStore</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/" exact activeClassName="disabled">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/shop" activeClassName="disabled">Shop</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={NavLink} to="/cart" activeClassName="disabled">
          Cart
          <sup>
          <Badge pill variant="light">{props.cartCount}</Badge>
          </sup>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default TopNav