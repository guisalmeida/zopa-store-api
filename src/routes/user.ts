import { Request, Response } from "express";

const router = require("express").Router();

router.get("/users", (req: Request, res: Response) => {
  res.send("users");
});

router.post("/user", (req: Request, res: Response) => {
  const username: string = req.body.username
  console.log(username);
  
});

module.exports = router;
