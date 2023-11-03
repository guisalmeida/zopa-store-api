import PropTypes from 'prop-types'
import { removeFromCart, addToCart } from '../../store/actions/cartActions'
import { selectCartProducts } from '../../store/selectors/cartSelectors'

import { ListQuantityContainer } from './styled'
import { useDispatch, useSelector } from 'react-redux'

const ListQuantity = ({ item }) => {
  const dispatch = useDispatch()
  const cartProducts = useSelector(selectCartProducts)

  return (
    <ListQuantityContainer>
      <button
        type="button"
        className="quantity__button"
        onClick={() => {
          if (item.quantity <= 1) return
          dispatch(removeFromCart(cartProducts, item))
        }}
      >
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>

      <div className="quantity__input">{item.quantity}</div>

      <button
        type="button"
        className="quantity__button"
        onClick={() => dispatch(addToCart(cartProducts, item))}
      >
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
    </ListQuantityContainer>
  )
}

ListQuantity.propTypes = {
  item: PropTypes.shape({
    quantity: PropTypes.number.isRequired,
  }),
}

export default ListQuantity
