import { Router } from "express";
import authenticate from "../middlewares/authenticate";
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from "../controllers/productController";

const productRouter = Router();

productRouter.get("/", authenticate, getAllProducts);
productRouter.post("/", authenticate, createProduct);
productRouter.get("/:id", authenticate, getProduct);
productRouter.put("/:id", authenticate, updateProduct);
productRouter.delete("/:id", authenticate, deleteProduct);

export default productRouter;
