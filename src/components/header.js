import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

const Header = (props) => {
  return(
    <div>
      <Jumbotron className="pt-5 mt-5">
        <Container>
          <h1>{props.title}</h1>
        </Container>
      </Jumbotron>
    </div>

  )
}

export default Header