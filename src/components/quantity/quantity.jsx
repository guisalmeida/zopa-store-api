import { QuantityContainer } from './styled'

const Quantity = ({ length }) => {
  return (
    <QuantityContainer>{`${length} ite${length > 1 ? 'ns' : 'm'} encontrado${
      length > 1 ? 's' : ''
    }`}</QuantityContainer>
  )
}

export default Quantity
