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
  res.status(200).json({ message: "API running succesfully" })
);
routes.use("/api/users", usersRouter);
routes.use("/api/auth", authRoute);
routes.use("/api/cart", cartRouter);
routes.use("/api/orders", ordersRouter);
routes.use("/api/products", productsRouter);
routes.use("/api/checkout", paymentRouter);
routes.use("/api/images", imagesRouter);

export default routes;
