import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { setIsCartOpen } from '../../store/actions/cartActions'
import {
  selectCartCount,
  selectIsCartOpen,
  selectCartProducts,
} from '../../store/selectors/cartSelectors'

import Slider from '../slider'
import Button from '../button'
import ListItem from '../listItem'

import { CartEmpty } from './styled'

const MiniCart = () => {
  const dispatch = useDispatch()

  const cartProducts = useSelector(selectCartProducts)
  const cartCount = useSelector(selectCartCount)
  const isCartOpen = useSelector(selectIsCartOpen)

  const pathname = window.location.pathname || undefined
  const navigate = useNavigate()

  const handleCheckout = () => {
    dispatch(setIsCartOpen(false))
    navigate('checkout')
  }
  const handleShowCart = bool => dispatch(setIsCartOpen(bool))

  return (
    <Slider
      show={isCartOpen}
      handleShow={handleShowCart}
      title={`Carrinho - ${cartCount} Ite${cartCount === 1 ? 'm' : 'ns'}`}
    >
      {cartProducts?.length > 0 ? (
        cartProducts.map((cartItem, index) => {
          return <ListItem key={index} item={cartItem} mode="cart" />
        })
      ) : (
        <CartEmpty>Carrinho vazio :(</CartEmpty>
      )}

      {cartProducts?.length > 0 && pathname !== '/checkout' && (
        <Button
          buttonType="base"
          className="checkout__button"
          onClick={handleCheckout}
        >
          Finalizar pedido
        </Button>
      )}
    </Slider>
  )
}

export default MiniCart
