import { useEffect, lazy, Suspense } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import { fetchProductsStart } from './store/actions/productsActions'
import { checkUserSession } from './store/actions/userActions'
import Spinner from './components/spinner/spinner'
import User from './routes/user'

const Home = lazy(() => import('./routes/home'))
const Layout = lazy(() => import('./components/layout'))
const Authentication = lazy(() => import('./routes/authentication'))
const Shop = lazy(() => import('./routes/shop'))
const Product = lazy(() => import('./routes/product'))
const Products = lazy(() => import('./routes/products'))
const Checkout = lazy(() => import('./routes/checkout'))
const SignInForm = lazy(() => import('./components/signInForm/signInForm'))
const SignUpForm = lazy(() => import('./components/signUpForm'))

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  }, [])

  useEffect(() => {
    dispatch(fetchProductsStart())
  }, [])

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />}>
            <Route path=":category" element={<Products />} />
          </Route>

          <Route path="product/:id" element={<Product />} />

          <Route path="auth/*" element={<Authentication />}>
            <Route path="user" element={<User />} />
            <Route path="sign-in" element={<SignInForm />} />
            <Route path="sign-up" element={<SignUpForm />} />
          </Route>
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
