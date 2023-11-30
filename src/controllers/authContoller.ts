import { Response, Request } from "express";
import { HydratedDocument } from "mongoose";

import User, { UserType } from "../models/userModel";
import { generateToken } from "../utils";

const bcrypt = require("bcrypt");

export async function register(req: Request, res: Response) {
  const newUser: HydratedDocument<UserType> = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const hasEmail = await User.findOne({ email: req.body.email });
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

export async function login(req: Request, res: Response) {
  const { email, password }: UserType = req.body;

  try {
    const dbUser = await User.findOne({ email });

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
    restUser.accessToken = accessToken;
    return res.status(200).json(restUser);
  } catch (error) {
    res.status(500).json(error as Error);
  }
}
