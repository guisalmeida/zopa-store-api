import { useSelector } from 'react-redux'
import { selectCartCount } from '../../store/selectors/cartSelectors'

import { ReactComponent as CartIconSvg } from '../../assets/cart-icon.svg'
import { CartIconCounter } from './styled'
const CartIcon = (): React.JSX.Element => {
  const cartCount = useSelector(selectCartCount)

  return (
    <>
      {typeof cartCount === 'number' && cartCount > 0 ? (
        <CartIconCounter>{cartCount}</CartIconCounter>
      ) : null}
      <CartIconSvg />
    </>
  )
}

export default CartIcon
