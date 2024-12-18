import { Router } from "express";
import authenticate from "../middlewares/authenticate";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "../controllers/productController";

const productsRouter = Router();

productsRouter.get("/", getAllProducts);
productsRouter.post("/", authenticate, createProduct);
productsRouter.get("/:id", getProduct);
productsRouter.put("/:id", authenticate, updateProduct);
productsRouter.delete("/:id", authenticate, deleteProduct);

export default productsRouter;
