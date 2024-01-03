import multerS3 from "multer-s3";
import multer from "multer";
import dotenv from "dotenv";

import { s3Client } from "../utils";

dotenv.config();

const BUCKET_NAME = process.env.BUCKET_NAME;

export const uploadMiddleware = multer({
  storage: multerS3({
    s3: s3Client,
    bucket: BUCKET_NAME as string,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: (req, file, callback) => {
      callback(null, `images/${file.originalname}`);
    },
  }),
});
