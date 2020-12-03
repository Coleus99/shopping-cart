import React from 'react';
import Header from './header'
import Product from './product'
import { Container, Row, Col } from 'react-bootstrap'

const Cart = (props) => {
  console.log(props)
  let productCatalogue= "Your basket is empty!"
  if(props.products){    
    productCatalogue = props.products.map((card, index) => {
      if(card.inBasket>0){
        return (
          <Col sm={12} key={index}>
            <Product details={card} updateCart={props.amendCart} type="cart" />
          </Col>
        );
      }
      return
    })
  }
  return(
    <div>
      <Header title="Your Shopping Cart" />
      <Container>
        <Row>
          {productCatalogue}
        </Row>
        <Row>
          <Col className="d-flex justify-content-between">
            <h2>Total:</h2>
            <h3>{props.total.itemSpend}</h3>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Cart