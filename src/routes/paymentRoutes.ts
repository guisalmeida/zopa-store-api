import { Router } from "express";
import {
  createPaymentIntent,
  getCancel,
  getSuccess,
} from "../controllers/paymentControlller";

const paymentRouter = Router();

paymentRouter.post("/create-payment-intent", createPaymentIntent);
paymentRouter.get("/success", getSuccess);
paymentRouter.get("/cancel", getCancel);

export default paymentRouter;
