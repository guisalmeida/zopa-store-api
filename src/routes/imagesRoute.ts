import { Router } from "express";
import { uploadFilesToAWS } from "../controllers/imagesController";
import { uploadMiddleware } from "../middlewares/uploadImage";

const imagesRoute = Router();

imagesRoute.post(
  "/upload",
  uploadMiddleware.array("zopa-clothing-images", 3),
  uploadFilesToAWS
);

export default imagesRoute;
