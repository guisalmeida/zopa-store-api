import { Router } from "express";

import { uploadMiddleware } from "../middlewares/uploadImage";
import authenticate from "../middlewares/authenticate";
import {
  deleteFilesFromAWS,
  uploadFilesToAWS,
} from "../controllers/imagesController";

const imagesRoute = Router();

imagesRoute.post(
  "/upload",
  authenticate,
  uploadMiddleware.array("zopa-clothing-images", 3),
  uploadFilesToAWS
);

imagesRoute.delete("/delete", authenticate, deleteFilesFromAWS);

export default imagesRoute;
