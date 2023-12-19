import { Router } from "express";
import {
  createPaymentIntent,
  getCancel,
  getSuccess,
} from "../controllers/paymentControlller";

const paymentRouter = Router();

paymentRouter.post("/create-payment-intent", createPaymentIntent);
paymentRouter.get("/cancel", getSuccess);
paymentRouter.get("/success", getCancel);

export default paymentRouter;
