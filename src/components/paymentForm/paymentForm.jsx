import { PaymentFormContainer, FormContainer, PaymentButton } from './styled'

export const PaymentForm = () => {
  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={() => console.log('pay')}>
        <h2>Credit Card Payment: </h2>

        <PaymentButton isLoading={false} buttonType="base">
          Pay Now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  )
}
