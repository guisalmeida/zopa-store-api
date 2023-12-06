import { Response, Request } from "express";
import { HydratedDocument } from "mongoose";

import UserModel, { UserType } from "../models/userModel";
import { generateToken } from "../utils";

const bcrypt = require("bcrypt");

export async function registerUser(req: Request, res: Response) {
  const newUser: HydratedDocument<UserType> = new UserModel({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    passwordChangedAt: new Date(),
  });

  try {
    const hasEmail = await UserModel.findOne({ email: req.body.email });
    if (hasEmail) {
      return res.status(400).json({
        error: true,
        message: "E-mail já cadastrado.",
      });
    }

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error as Error);
  }
}

export async function logUser(req: Request, res: Response) {
  const { email, password }: UserType = req.body;

  try {
    const dbUser = await UserModel.findOne({ email });

    if (!dbUser) {
      return res.status(400).json({
        error: true,
        message: "Usuário não encontrado.",
      });
    }

    const passMatch: boolean = await bcrypt.compare(password, dbUser.password);

    if (!passMatch) {
      return res.status(400).json({
        error: true,
        message: "Senha invalida.",
      });
    }

    const accessToken = await generateToken({
      id: dbUser._id,
      isAdmin: dbUser.isAdmin,
    });

    // @ts-ignore
    const { password: pass, ...restUser } = dbUser._doc;
    console.log(restUser);
    
    return res.status(200).json({ ...restUser, accessToken });
  } catch (error) {
    res.status(500).json(error as Error);
  }
}
