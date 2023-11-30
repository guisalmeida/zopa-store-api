import { Response, Request, NextFunction } from "express";
import { verifyToken } from "../utils";

export default function (req: Request, res: Response, next: NextFunction) {
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

  const isAuthenticate = verifyToken(token);

  if (isAuthenticate.name === "JsonWebTokenError") {
    return next(
      res.status(401).json({
        error: true,
        message: isAuthenticate.message,
      })
    );
  }

  return next();
}
