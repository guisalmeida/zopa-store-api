import { PaymentFormContainer, FormContainer, PaymentButton } from './styled'

export const PaymentForm = () => {
  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={() => {}}>
        <h2>Credit Card Payment: </h2>

        <PaymentButton isLoading={false} buttonType="base">
          Pagar
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  )
}
