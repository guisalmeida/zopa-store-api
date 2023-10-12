import { FormGroup, FormInput, FormLabel } from "./styled";

 
const Input = ({ label, ...otherProps }) => {
  return (
    <FormGroup>
      <FormInput {...otherProps} />
      {label && (
        <FormLabel $shrink={otherProps.value.length} >
          {label}
        </FormLabel>
      )}
    </FormGroup>
  );
};

export default Input;
