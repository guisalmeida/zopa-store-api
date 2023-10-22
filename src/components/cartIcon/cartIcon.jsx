import { ReactComponent as CartIconSvg } from '../../assets/cart-icon.svg'

import { CartIconCounter } from './styled'

const CartIcon = () => {
  const cartItemsCount = 0

  return (
    <>
      {cartItemsCount > 0 ? (
        <CartIconCounter>{cartItemsCount}</CartIconCounter>
      ) : null}
      <CartIconSvg />
    </>
  )
}

export default CartIcon
