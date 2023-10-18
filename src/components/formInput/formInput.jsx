import { FormGroup, Input, FormLabel } from "./styled";

 
const FormInput = ({ label, name, ...otherProps }) => {
  return (
    <FormGroup>
      <Input name={name} {...otherProps} />
      {label && (
        <FormLabel id={name} $shrink={otherProps.value.length} >
          {label}
        </FormLabel>
      )}
    </FormGroup>
  );
};

export default FormInput;
