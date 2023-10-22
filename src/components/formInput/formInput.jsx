import PropTypes from 'prop-types';
import { FormGroup, Input, FormLabel } from './styled'

const FormInput = ({ label, name, ...otherProps }) => {
  return (
    <FormGroup>
      <Input name={name} {...otherProps} />
      {label && (
        <FormLabel id={name} $shrink={otherProps.value.length}>
          {label}
        </FormLabel>
      )}
    </FormGroup>
  )
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  
  otherProps: PropTypes.shape({
    value: PropTypes.string.isRequired
  })
}

export default FormInput
