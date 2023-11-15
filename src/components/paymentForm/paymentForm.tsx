import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCartProducts } from '../../store/actions/cartActions'
import {
  useElements,
  useStripe,
  PaymentElement,
  AddressElement,
  LinkAuthenticationElement,
} from '@stripe/react-stripe-js'

import {
  PaymentFormContainer,
  FormContainer,
  PaymentButton,
  FormTitle,
} from './styled'

export const PaymentForm = (): React.JSX.Element => {
  const dispatch = useDispatch()
  const stripe = useStripe()
  const elements = useElements()
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)

  const paymentHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!stripe || !elements) return
    setIsProcessingPayment(true)

    await stripe
      .confirmPayment({
        elements,
        confirmParams: { return_url: `${window.location.origin}/shop` },
        redirect: 'if_required',
      })
      .then(result => {
        if (
          result &&
          result.paymentIntent &&
          result.paymentIntent.status === 'succeeded'
        ) {
          alert('Pagamento efetuado com sucesso!')
          dispatch(setCartProducts([]))
        } else if (result.error) {
          alert(result.error.message)
        }
      })

    setIsProcessingPayment(false)
  }

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <FormTitle>Contato:</FormTitle>
        <LinkAuthenticationElement />
        <FormTitle>Entrega: </FormTitle>
        <AddressElement
          options={{ mode: 'shipping', allowedCountries: ['BR'] }}
        />
        <FormTitle>Pagamento: </FormTitle>
        <PaymentElement id="payment-element" options={{ layout: 'tabs' }} />

        <PaymentButton isLoading={isProcessingPayment} buttonType="base">
          Pagar
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  )
}
