import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'

import PaymentForm from '../../components/paymentForm'
import ListItem from '../../components/listItem'

import { priceToStringBr } from '../../utils/currency'
import { CheckoutContainer } from './styled'

const Checkout = () => {
  const { cartProducts, cartTotal } = useContext(CartContext)

  return (
    <CheckoutContainer>
      {cartProducts.map((cartItem, index) => {
        return <ListItem key={index} item={cartItem} mode="cart" />
      })}
      <p className="checkout__total">Total: {priceToStringBr(cartTotal)}</p>
      <PaymentForm />
    </CheckoutContainer>
  )
}

export default Checkout
