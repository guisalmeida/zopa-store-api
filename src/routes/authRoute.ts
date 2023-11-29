import express, { Request, Response } from "express";
import { HydratedDocument } from "mongoose";
import { UserType } from "../models/userModel";
import User from "../models/userModel";

const bcrypt = require("bcrypt");
const authRoute = express.Router();

authRoute.post("/register", async (req: Request, res: Response) => {
  const hasEmail = await User.findOne({ email: req.body.email });
  if (hasEmail) {
    return res.status(400).json({
      error: true,
      message: "E-mail já cadastrado!",
    });
  }

  const newUser: HydratedDocument<UserType> = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error as Error);
  }
});

authRoute.post("/login", async (req: Request, res: Response) => {
  const { email, password }: UserType = req.body;
  const dbUser = await User.findOne({ email });

  if (!dbUser) {
    return res.status(400).json({
      error: true,
      message: "Usuário não encontrado!",
    });
  }

  const isPasswordEqual: boolean = await bcrypt.compare(password, dbUser.password);
  
  if (!isPasswordEqual) {
    return res.status(400).json({
      error: true,
      message: "Senha invalida!",
    });
  }

  dbUser.password = "";

  return res.status(201).json(dbUser);
});

export default authRoute;
