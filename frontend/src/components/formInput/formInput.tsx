import { InputHTMLAttributes } from 'react'
import { FormGroup, Input, FormLabel } from './styled'

type FormInputProps = {
  label: string
  name: string
} & InputHTMLAttributes<HTMLInputElement>

const FormInput = ({
  label,
  name,
  ...otherProps
}: FormInputProps): React.JSX.Element => {
  return (
    <FormGroup>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <Input name={name} id={name} {...otherProps} />
    </FormGroup>
  )
}

export default FormInput
