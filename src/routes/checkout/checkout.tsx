import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Stripe, StripeElementsOptions, loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import {
  selectCartTotal,
  selectCartProducts,
} from '../../store/selectors/cartSelectors'

import ListItem from '../../components/listItem'
import PaymentForm from '../../components/paymentForm'
import Spinner from '../../components/spinner/spinner'

import { priceToStringBr } from '../../utils/currency'
import { CheckoutContainer } from './styled'
import { TProduct } from '../../types'

const Checkout = (): React.JSX.Element => {
  const [stripePromise, setStripePromise] = useState<Promise<Stripe | null>>()
  const [clientSecret, setClientSecret] = useState('')

  const cartProducts: TProduct[] = useSelector(selectCartProducts)
  const cartTotal = useSelector(selectCartTotal)
  const amount = typeof cartTotal === 'number' ? Math.round(cartTotal * 100) : 0

  const options: StripeElementsOptions = {
    clientSecret,
    locale: 'pt-BR',
    appearance: {
      theme: 'flat',
      labels: 'floating',
    },
  }

  useEffect(() => {
    const getPubKey = async () =>
      await loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY)

    setStripePromise(getPubKey())
  }, [])

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await fetch(
        '/.netlify/functions/create-payment-intent',
        {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ amount }),
        },
      ).then(res => res.json())

      setClientSecret(response.paymentIntent.client_secret)
    }
    getClientSecret()
  }, [])

  return (
    <CheckoutContainer>
      {cartProducts.map((cartItem, index) => {
        return <ListItem key={index} item={cartItem} mode="cart" />
      })}

      {typeof cartTotal === 'number' && (
        <p className="checkout__total">Total: {priceToStringBr(cartTotal)}</p>
      )}

      {stripePromise && clientSecret ? (
        <Elements stripe={stripePromise} options={options} key={clientSecret}>
          <PaymentForm />
        </Elements>
      ) : (
        <Spinner />
      )}
    </CheckoutContainer>
  )
}

export default Checkout
