import { Router } from "express";
import authenticate from "../middlewares/authenticate";
import {
  createCart,
  getCart,
  updateCart,
  deleteCart,
  getAllCarts,
} from "../controllers/cartController";

const cartRouter = Router();

cartRouter.get("/", authenticate, getAllCarts);
cartRouter.post("/", authenticate, createCart);
cartRouter.get("/:id", authenticate, getCart);
cartRouter.put("/:id", authenticate, updateCart);
cartRouter.delete("/:id", authenticate, deleteCart);

export default cartRouter;
