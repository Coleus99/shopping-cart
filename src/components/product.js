import React, { useEffect, useState } from 'react'
import { Card, Form, InputGroup, Button } from 'react-bootstrap'

const Product = (props) =>{
  const [quantity, setQuantity] = useState(props.type==="cart"? props.details.inBasket : 1)
  const [itemSpend, setItemSpend] = useState(0)
  let hideShop = props.type==="shop"? "d-none" : "" 
  let hideCart = props.type==="cart"? "d-none" : "" 

  useEffect(() => {
    setItemSpend(quantity*props.details.price)
  },[quantity])

  return(
    <Card className="mb-2">
      <Card.Img className = {hideCart} variant="top" src={props.details.imageUrl} />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between">{props.details.name}<span class={hideShop}>${quantity*props.details.price}</span></Card.Title>
        <Card.Text className = {hideCart}>
          <ul className="pl-0" style={{listStyleType: "none"}}>
            <li>Type: {props.details.type}</li>
            <li>Power: {props.details.power}</li>
            <li>Price: ${props.details.price}</li>
          </ul></Card.Text>
        <InputGroup>
          <Form.Control
            type="number"
            min="0"
            value = {quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <InputGroup.Append>
            <Button
              id={props.details.id}
              variant="primary"
              size="sm"
              onClick={(e) => props.updateCart(e.target.id, quantity, itemSpend)}
            >
              {props.type==="cart"? "Update" : "Add to Cart" }
            </Button>
            <Button
              id={props.details.id}
              className = {hideShop}
              variant="danger"
              size="sm"
              onClick={(e) => props.updateCart(e.target.id, 0, 0)}
            >
              Remove
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Card.Body>
    </Card>
  )
}

export default Product