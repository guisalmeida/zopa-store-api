import express, { Request, Response } from "express";
import { HydratedDocument } from "mongoose";
import { UserType } from "../models/userModel";
import User from "../models/userModel";

const authRoute = express.Router();

authRoute.post("/register", async (req: Request, res: Response) => {
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

export default authRoute;
