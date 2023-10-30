import PropTypes from 'prop-types'
import { FormGroup, Input, FormLabel } from './styled'

const FormInput = ({ label, name, ...otherProps }) => {
  return (
    <FormGroup>
      {label && <FormLabel id={name}>{label}</FormLabel>}
      <Input name={name} {...otherProps} />
    </FormGroup>
  )
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,

  otherProps: PropTypes.shape({
    value: PropTypes.string.isRequired,
  }),
}

export default FormInput
