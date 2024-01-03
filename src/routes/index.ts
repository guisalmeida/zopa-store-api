import { Router } from "express";
import authRoute from "./authRoute";
import usersRouter from "./userRoute";
import cartRouter from "./cartRoute";
import ordersRouter from "./orderRoute";
import productsRouter from "./productRoute";
import paymentRouter from "./paymentRoute";

const routes = Router();

routes.use("/api/users", usersRouter);
routes.use("/api/auth", authRoute);
routes.use("/api/cart", cartRouter);
routes.use("/api/orders", ordersRouter);
routes.use("/api/products", productsRouter);
routes.use("/api/checkout", paymentRouter);

export default routes;
