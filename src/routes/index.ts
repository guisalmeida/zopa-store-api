import { Router } from "express";
import authRoute from "./authRoute";
import userRouter from "./userRoute";
import cartRouter from "./cartRoute";
import orderRouter from "./orderRoute";
import productRouter from "./productRoute";

const routes = Router();

routes.use("/api/users", userRouter);
routes.use("/api/auth", authRoute);
routes.use("/api/cart", cartRouter);
routes.use("/api/order", orderRouter);
routes.use("/api/product", productRouter);

export default routes;
