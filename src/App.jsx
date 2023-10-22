import { Routes, Route } from 'react-router-dom'

import Home from './routes/home'
import Layout from './components/layout'
import Authentication from './routes/authentication'
import Shop from './routes/shop'
import Product from './routes/product'
import Checkout from './routes/checkout'
import SignInForm from './components/signIn/signInForm'
import SignUpForm from './components/signUp'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
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
