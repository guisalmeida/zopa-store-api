import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import { fetchProductsStart } from './store/actions/productsActions'
import { checkUserSession } from './store/actions/userActions'

import Home from './routes/home'
import Layout from './components/layout'
import Authentication from './routes/authentication'
import Shop from './routes/shop'
import Product from './routes/product'
import Products from './routes/products'
import Checkout from './routes/checkout'
import SignInForm from './components/signInForm/signInForm'
import SignUpForm from './components/signUpForm'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  }, [])

  useEffect(() => {
    dispatch(fetchProductsStart())
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />}>
          <Route path=":category" element={<Products />} />
        </Route>

        <Route path="product/:id" element={<Product />} />

        <Route path="auth/*" element={<Authentication />}>
          <Route path="sign-in" element={<SignInForm />} />
          <Route path="sign-up" element={<SignUpForm />} />
        </Route>
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App
