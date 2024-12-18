import { Router } from "express";
import authRoute from "./authRoutes";
import usersRouter from "./userRoutes";
import cartRouter from "./cartRoutes";
import ordersRouter from "./orderRoutes";
import productsRouter from "./productRoutes";
import paymentRouter from "./paymentRoutes";
import imagesRouter from "./imagesRoutes";

const routes = Router();

routes.get("/api", (req, res) =>
  res.status(200).json({
    message: "API running succesfully",
    version: process.env.API_VERSION,
  })
);
routes.use(`/api/${process.env.API_VERSION}/users`, usersRouter);
routes.use(`/api/${process.env.API_VERSION}/auth`, authRoute);
routes.use(`/api/${process.env.API_VERSION}/cart`, cartRouter);
routes.use(`/api/${process.env.API_VERSION}/orders`, ordersRouter);
routes.use(`/api/${process.env.API_VERSION}/products`, productsRouter);
routes.use(`/api/${process.env.API_VERSION}/checkout`, paymentRouter);
routes.use(`/api/${process.env.API_VERSION}/images`, imagesRouter);

export default routes;
