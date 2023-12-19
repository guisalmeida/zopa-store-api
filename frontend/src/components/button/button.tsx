import { ButtonHTMLAttributes } from 'react'
import {
  BaseButton,
  HighlightButton,
  WarnButton,
  ButtonSpinner,
} from './styled'

const BUTTON_TYPE_CLASSES = {
  base: BaseButton,
  highlight: HighlightButton,
  warn: WarnButton,
} as const

type ButtonProps = {
  children: React.ReactNode
  buttonType?: keyof typeof BUTTON_TYPE_CLASSES
  isLoading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  children,
  buttonType = 'base',
  isLoading = false,
  ...otherProps
}: ButtonProps): React.JSX.Element => {
  const CustomButton = BUTTON_TYPE_CLASSES[buttonType]

  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  )
}

export default Button
