import { QuantityContainer } from './styled'
import PropTypes from 'prop-types'

const Quantity = ({ length }) => {
  return (
    <QuantityContainer>{`${length} ite${length > 1 ? 'ns' : 'm'} encontrado${
      length > 1 ? 's' : ''
    }`}</QuantityContainer>
  )
}

Quantity.propTypes = {
  length: PropTypes.number.isRequired,
}

export default Quantity
