import { Response, Request } from "express";
import { s3Client } from "../middlewares/uploadImage";
import { DeleteObjectsCommand } from "@aws-sdk/client-s3";
import dotenv from "dotenv";

dotenv.config();

const BUCKET_NAME = process.env.BUCKET_NAME;

export function uploadFilesToAWS(req: Request, res: Response) {
  if (!req.files) {
    return res.status(400).json({ message: "Bad request" });
  }

  return res
    .status(200)
    .json({ message: "Imagens salvas com sucesso!", files: req.files });
}

export async function deleteFilesFromAWS(req: Request, res: Response) {
  if (!req.body.keys || req.body.keys.length === 0) {
    return res.status(400).json({ message: "Bad request" });
  }

  const command = new DeleteObjectsCommand({
    Bucket: BUCKET_NAME,
    Delete: {
      Objects: req.body.keys,
    },
  });

  const { $metadata } = await s3Client.send(command);

  if ($metadata.httpStatusCode === 200) {
    return res.status(200).json({ message: "Imagens deletadas com sucesso!" });
  }

  if ($metadata.httpStatusCode === 400) {
    return res.status(400).json({ error: true, message: "Bad request" });
  }
}
