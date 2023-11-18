import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import {
  useElements,
  useStripe,
  PaymentElement,
  AddressElement,
  LinkAuthenticationElement,
} from '@stripe/react-stripe-js'

import { setCartProducts } from '../../store/actions/cartActions'

import {
  PaymentFormContainer,
  FormContainer,
  PaymentButton,
  FormTitle,
} from './styled'

export const PaymentForm = (): React.JSX.Element => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const stripe = useStripe()
  const elements = useElements()
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)

  const paymentHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!stripe || !elements) return
    setIsProcessingPayment(true)

    const id = toast.loading('Processando pagamento...', {
      position: 'top-center',
      autoClose: 3000,
      pauseOnHover: false,
      draggable: false,
    })

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
          toast.update(id, {
            render: 'Pagamento efetuado com sucesso!',
            type: 'success',
            isLoading: false,
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: true,
            pauseOnHover: false,
            draggable: false,
          })
          dispatch(setCartProducts([]))
          navigate('/')
        } else if (result.error) {
          toast.update(id, {
            render: 'Falha no pagamento, verifique seus dados.',
            type: 'error',
            isLoading: false,
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: true,
            pauseOnHover: false,
            draggable: false,
          })
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
