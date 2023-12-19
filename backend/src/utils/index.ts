import { Types } from "mongoose";

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
