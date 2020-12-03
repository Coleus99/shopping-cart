import React, { useEffect, useState} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/home'
import Shop from './components/shop'
import Cart from './components/cart'
import TopNav from './components/topnav'

const App = () => {
  const [cardsData, setCardsData] = useState(null)
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)
  useEffect(() => {
    fetch('https://api.scryfall.com/cards/search?q=cmc%3D10', {mode: 'cors'})
    .then(results => results.json())
    .then(parsed => {
      console.log(parsed)
      setCardsData(
        parsed.data.map(card => {
          return {
            id: card.id,
            name: card.name,
            imageUrl: card.image_uris.border_crop,
            imageCrop: card.image_uris.art_crop,
            price: card.prices.usd,
            inBasket: 0,
            itemSpend: 0,
            power: card.power,
            type: card.type_line
          }
        })
      )
    })
  }, [])

  useEffect(() => {
    if(cardsData){
      let cartTotalCount = cardsData.reduce((a, b) => ({inBasket: parseInt(a.inBasket) + parseInt(b.inBasket)}));
      console.log(`cart count: ${cartTotalCount.inBasket}`)
      setCartCount(cartTotalCount.inBasket)
      let cartTotalCost = cardsData.reduce((a, b) => ({itemSpend: a.itemSpend + b.itemSpend}))
      console.log(`cart Total price: ${cartTotalCost.itemSpend}`)
      setCartTotal(cartTotalCost)
    }
  },[cardsData])

  const addToCart = (cartId, cartQuantity, itemSpend) =>{
    console.log(`spend: ${itemSpend}`)
    setCardsData(cardsData.map(card => 
      card.id===cartId?
        {...card, inBasket: parseInt(card.inBasket)+parseInt(cartQuantity), itemSpend: card.itemSpend + itemSpend}
        :
        card
    ))
  }
  const amendCart = (cartId, cartQuantity, itemSpend) =>{
    setCardsData(cardsData.map(card => 
      card.id===cartId?
        {...card, inBasket: cartQuantity, itemSpend: itemSpend}
        :
        card
    ))
  }

  return(
    <BrowserRouter>
      <TopNav cartCount={cartCount} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/shop'>
          <Shop products={cardsData} addToCart={addToCart} />
        </Route>
        <Route exact path='/cart' component={Cart}>
          <Cart products={cardsData} total={cartTotal} amendCart={amendCart} />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App