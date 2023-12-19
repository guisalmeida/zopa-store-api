import { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { TOrder } from '../../types'
import {
  useElements,
  useStripe,
  PaymentElement,
  AddressElement,
  LinkAuthenticationElement,
} from '@stripe/react-stripe-js'

import { selectCurrentUser } from '../../store/selectors/userSelectors'
import {
  selectCartProducts,
  selectCartTotal,
} from '../../store/selectors/cartSelectors'
import { setCartProducts, createOrderStart } from '../../store/actions/cartActions'

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
  const currentUser = useSelector(selectCurrentUser)
  const cartProducts = useSelector(selectCartProducts)
  const cartTotal = useSelector(selectCartTotal)
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)
  const amount = typeof cartTotal === 'number' ? Math.round(cartTotal * 100) : 0

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

    const response = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: `${window.location.origin}/shop` },
      redirect: 'if_required',
    })

    if (
      response &&
      response.paymentIntent &&
      response.paymentIntent.status === 'succeeded'
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

      const orderProducts = cartProducts.reduce(
        (acc: TOrder['products'], prod) => {
          acc.push({
            productId: prod._id,
            quantity: prod.quantity,
          })
          return acc
        },
        [],
      )

      const newOrder: TOrder = {
        userId: currentUser?._id ? currentUser?._id : '',
        products: orderProducts,
        amount: amount,
        address: response?.paymentIntent?.shipping
          ?.address as TOrder['address'],
      }

      dispatch((createOrderStart(newOrder)))

      dispatch(setCartProducts([]))
      return navigate('/')
    } else if (response.error) {
      toast.update(id, {
        render: response.error.message,
        type: 'error',
        isLoading: false,
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        pauseOnHover: false,
        draggable: false,
      })
    }

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
