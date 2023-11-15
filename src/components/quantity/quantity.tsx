import { QuantityContainer } from './styled'

type QuantityProps = {
  length: number
}

const Quantity = ({ length }: QuantityProps): React.JSX.Element => {
  return (
    <QuantityContainer>
      {`${length} ite${length > 1 ? 'ns' : 'm'} encontrado${
        length > 1 ? 's' : ''
      }`}
    </QuantityContainer>
  )
}

export default Quantity
