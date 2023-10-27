import { useContext } from 'react'
import PropTypes from 'prop-types'
import { ListQuantityContainer } from './styled'
import { CartContext } from '../../context/cartContext'

const ListQuantity = ({ item }) => {
  const { addToCart, removeFromCart } = useContext(CartContext)
  return (
    <ListQuantityContainer>
      <button
        type="button"
        className="quantity__button"
        onClick={() => {
          if (item.quantity <= 1) return
          removeFromCart(item)
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
        onClick={() => addToCart(item)}
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
