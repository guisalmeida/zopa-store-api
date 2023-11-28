import { Request, Response } from "express";

const router = require("express").Router();

router.get("/usertest", (req: Request, res: Response) => {
  res.send("user test");
});

module.exports = router;
