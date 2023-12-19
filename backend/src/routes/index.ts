import { Router } from "express";
import authRoute from "./authRoute";
import userRouter from "./userRoute";
import cartRouter from "./cartRoute";
import orderRouter from "./orderRoute";
import productRouter from "./productRoute";
import paymentRouter from "./paymentRoute";

const routes = Router();

routes.use("/api/users", userRouter);
routes.use("/api/auth", authRoute);
routes.use("/api/cart", cartRouter);
routes.use("/api/orders", orderRouter);
routes.use("/api/products", productRouter);
routes.use("/api/checkout", paymentRouter);

export default routes;
