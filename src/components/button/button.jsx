import { BaseButton, GoogleButton, InvertedButton, ButtonSpinner } from "./styled";

const BUTTON_TYPE_CLASSES = {
  base: BaseButton,
  google: GoogleButton,
  inverted: InvertedButton,
};

 
const Button = ({ children, buttonType, isLoading = false, ...otherProps }) => {
   
  const CustomButton = BUTTON_TYPE_CLASSES[buttonType];
  return <CustomButton disabled={isLoading} {...otherProps}>
            {isLoading ? <ButtonSpinner/> : children}
        </CustomButton>;
};

export default Button;
