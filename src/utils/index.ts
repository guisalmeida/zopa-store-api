import { Types } from "mongoose";
import { S3Client } from "@aws-sdk/client-s3";
import dotenv from "dotenv";

dotenv.config();

const BUCKET_NAME = process.env.BUCKET_NAME;
const REGION = process.env.REGION;
const S3_USER_ACCESS_KEY = process.env.S3_USER_ACCESS_KEY;
const S3_USER_SECRET_KEY = process.env.S3_USER_SECRET_KEY;

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

export async function hashPassword(password: string): Promise<string | null> {
  return await bcrypt.hash(password, 8);
}

export type TokenPayloadParamsType = {
  id: Types.ObjectId;
  isAdmin: boolean;
  iat?: number;
  ext?: number;
};

export async function generateToken({
  id,
  isAdmin,
}: TokenPayloadParamsType): Promise<string | undefined> {
  const token = await jwt.sign(
    {
      id,
      isAdmin,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );

  return token;
}

export function verifyToken(token: string): TokenPayloadParamsType & Error {
  return jwt.verify(
    token,
    process.env.JWT_SECRET,
    (err: Error, params: TokenPayloadParamsType) => {
      if (err) return err;

      return params;
    }
  );
}

export const s3Config = {
  region: REGION,
  credentials: {
    accessKeyId: S3_USER_ACCESS_KEY as string,
    secretAccessKey: S3_USER_SECRET_KEY as string,
  },
};

export const s3Client = new S3Client(s3Config);
