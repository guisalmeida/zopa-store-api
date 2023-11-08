require('dotenv').config()

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

exports.handler = async event => {
  try {
    const { amount } = JSON.parse(event.body)

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'brl',
      automatic_payment_methods: { enabled: true },
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    }
  } catch (error) {
    console.log({ error })

    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    }
  }
}