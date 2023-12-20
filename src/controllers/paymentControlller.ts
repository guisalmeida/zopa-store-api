import { Response, Request } from "express";
import dotenv from "dotenv";

dotenv.config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function createPaymentIntent(req: Request, res: Response) {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "brl",
    automatic_payment_methods: { enabled: true },
  });

  try {
    return res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    return res.status(500).json(error as Error);
  }
}

export async function getSuccess(req: Request, res: Response) {
  return res
    .status(200)
    .json("Pagamento efetuado com sucesso! Obrigado por sua compra.");
}

export async function getCancel(req: Request, res: Response) {
  return res
    .status(200)
    .json("Pagamento cancelado! Sua ordem não foi processsada.");
}
