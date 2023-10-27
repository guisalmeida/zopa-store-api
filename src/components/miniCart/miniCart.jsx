import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'

import Slider from '../slider'
import Button from '../button'
import ListItem from '../listItem'

import { CartEmpty } from './styled'

const MiniCart = () => {
  const { cartProducts, cartCount, isCartOpen, setIsCartOpen } =
    useContext(CartContext)

  const pathname = window.location.pathname || undefined
  const navigate = useNavigate()

  const handleCheckout = () => {
    setIsCartOpen(false)
    navigate('checkout')
  }
  const handleShowCart = bool => setIsCartOpen(bool)

  return (
    <Slider
      show={isCartOpen}
      handleShow={handleShowCart}
      title={`Cart - ${cartCount} Item(s)`}
    >
      {cartProducts?.length > 0 ? (
        cartProducts.map((cartItem, index) => {
          return <ListItem key={index} item={cartItem} mode="cart" />
        })
      ) : (
        <CartEmpty>Your cart is empty :(</CartEmpty>
      )}

      {cartProducts?.length > 0 && pathname !== '/checkout' && (
        <Button
          buttonType="base"
          className="checkout__button"
          onClick={handleCheckout}
        >
          Checkout
        </Button>
      )}
    </Slider>
  )
}

export default MiniCart
