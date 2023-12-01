import { Router } from "express";
import authenticate from "../middlewares/authenticate";
import { createProduct } from "../controllers/productController";

const productRouter = Router();

productRouter.post("/", authenticate, createProduct);

export default productRouter;
