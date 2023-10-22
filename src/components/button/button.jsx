import {
  BaseButton,
  GoogleButton,
  InvertedButton,
  ButtonSpinner,
} from './styled'
import PropTypes from 'prop-types'

const BUTTON_TYPE_CLASSES = {
  base: BaseButton,
  google: GoogleButton,
  inverted: InvertedButton,
}

const Button = ({ children, buttonType, isLoading = false, ...otherProps }) => {
  const CustomButton = BUTTON_TYPE_CLASSES[buttonType]
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  )
}

export default Button

Button.propTypes = {
  children: PropTypes.string.isRequired,
  buttonType: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
}
