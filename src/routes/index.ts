import { Router } from "express";
import authRoute from "./authRoute";
import usersRouter from "./userRoute";
import cartRouter from "./cartRoute";
import ordersRouter from "./orderRoute";
import productsRouter from "./productRoute";
import paymentRouter from "./paymentRoute";
import imagesRouter from "./imagesRoute";

const routes = Router();

routes.get("/api", (req, res) =>
  res
    .status(200)
    .json({
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
