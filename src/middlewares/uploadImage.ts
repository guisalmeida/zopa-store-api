import { S3Client } from "@aws-sdk/client-s3";
import multerS3 from "multer-s3";
import multer from "multer";
import dotenv from "dotenv";

dotenv.config();

const BUCKET_NAME = process.env.BUCKET_NAME;
const REGION = process.env.REGION;
const S3_USER_ACCESS_KEY = process.env.S3_USER_ACCESS_KEY;
const S3_USER_SECRET_KEY = process.env.S3_USER_SECRET_KEY;

const s3Config = {
  region: REGION,
  credentials: {
    accessKeyId: S3_USER_ACCESS_KEY as string,
    secretAccessKey: S3_USER_SECRET_KEY as string,
  },
};

export const s3Client = new S3Client(s3Config);

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
