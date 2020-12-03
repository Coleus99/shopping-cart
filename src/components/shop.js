import React from 'react';
import Header from './header'
import Product from './product'
import { Container, Row, Col } from 'react-bootstrap'

const Shop = (props) => {
  let productCatalogue= "Loading..."
  if(props.products){    
    productCatalogue = props.products.map((card, index) => {
      return (
        <Col lg={3} sm={4} xs={6} key={index}>
          <Product details={card} updateCart={props.addToCart} type="shop" />
        </Col>
      );
    })
  }
  return(
    <div>
      <Header title="Welcome to my Shop Page" />
      <Container>
        <Row>
          {productCatalogue}
        </Row>
      </Container>
    </div>

  )
}

export default Shop