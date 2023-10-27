import { useContext } from 'react'
import { ReactComponent as CartIconSvg } from '../../assets/cart-icon.svg'
import { CartIconCounter } from './styled'

import { CartContext } from '../../context/cartContext'

const CartIcon = () => {
  const { cartCount } = useContext(CartContext)

  return (
    <>
      {cartCount > 0 ? <CartIconCounter>{cartCount}</CartIconCounter> : null}
      <CartIconSvg />
    </>
  )
}

export default CartIcon
