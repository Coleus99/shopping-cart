import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import {Button} from 'react-bootstrap'

const App = () => {
  return (
    <Jumbotron className="text-center">
      <h1>Welcome to the Magic the Gathering Card Store</h1>
      <Button href="/shop">Shop Now</Button>
    </Jumbotron>
  );
}

export default App;
