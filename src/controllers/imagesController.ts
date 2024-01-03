import { Response, Request } from "express";

export function uploadFilesToAWS(req: Request, res: Response) {
  if (!req.files) {
    return res.status(400).json({ message: "Bad request" });
  }

  return res
    .status(200)
    .json({ message: "Imagens salvas com sucesso!", files: req.files });
}
