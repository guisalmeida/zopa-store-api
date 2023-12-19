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

const orderRouter = Router();

orderRouter.get("/", authenticate, getAllOrders);
orderRouter.post("/:id", authenticate, createOrder);
orderRouter.get("/income", authenticate, getIncome);
orderRouter.get("/:id", authenticate, getOrder);
orderRouter.put("/:id", authenticate, updateOrder);
orderRouter.delete("/:id", authenticate, deleteOrder);

export default orderRouter;
