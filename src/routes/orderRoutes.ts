import { Router } from "express";
import {
  getAllOrders,
  createOrder,
  getOrder,
  updateOrder,
  deleteOrder,
  getIncome,
} from "../controllers/orderController";
import authenticate from "../middlewares/authenticate";

const ordersRouter = Router();

ordersRouter.get("/", authenticate, getAllOrders);
ordersRouter.post("/:id", authenticate, createOrder);
ordersRouter.get("/income", authenticate, getIncome);
ordersRouter.get("/:id", authenticate, getOrder);
ordersRouter.put("/:id", authenticate, updateOrder);
ordersRouter.delete("/:id", authenticate, deleteOrder);

export default ordersRouter;
