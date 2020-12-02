import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Shop from './shop'
import Cart from './cart'

const Router = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/cart' component={Cart} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router