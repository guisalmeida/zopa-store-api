import { Response, Request, NextFunction } from "express";
import { TokenPayloadParamsType, verifyToken } from "../utils";
import UserModel from "../models/userModel";

export type JsonWebTokenErrorType = {
  name: string;
  message: string;
};

export default async function authenticate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return next(
      res.status(401).json({
        error: true,
        message: "Token não encontrado na requisição.",
      })
    );
  }

  const token = authHeader.split(" ")[1];
  const isBearer = authHeader.includes("Bearer");
  if (!token || !isBearer) {
    return next(
      res.status(401).json({
        error: true,
        message: "Token inválido.",
      })
    );
  }

  const isAuthenticate: TokenPayloadParamsType & JsonWebTokenErrorType =
    verifyToken(token);
  if (isAuthenticate.name === "JsonWebTokenError") {
    return next(
      res.status(401).json({
        error: true,
        message: isAuthenticate.message,
      })
    );
  }

  if (
    !isAuthenticate.isAdmin &&
    isAuthenticate.id.toString() !== req.params.id
  ) {
    return next(
      res.status(401).json({
        error: true,
        message: "Usuário não autorizado.",
      })
    );
  }

  const dbUser = await UserModel.findById(isAuthenticate.id);
  if (dbUser?.passwordChangedAt && isAuthenticate.iat) {
    const passTimestamp = Math.trunc(dbUser.passwordChangedAt.getTime() / 1000);

    if (passTimestamp > isAuthenticate.iat)
      return next(
        res.status(403).json({ error: true, message: "Token expirado." })
      );
  }
  console.log('auth');
  
  return next();
}
