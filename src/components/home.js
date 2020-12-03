import React from 'react';
import Header from './header'
import Container from 'react-bootstrap/Container'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Header title="Welcome to the Magic the Gathering Card Store" />
      <Container>
        <p>A collection of rare Magic the Gathering cards for you to purchase.</p>
        <Button as={Link} to="/shop">Shop Now</Button>
      </Container>
    </div>
  );
}

export default Home;
