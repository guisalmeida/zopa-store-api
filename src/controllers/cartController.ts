import { HydratedDocument } from "mongoose";
import { Response, Request } from "express";
import CartModel, { CartType } from "../models/cartModel";
import { verifyToken } from "../utils";

export async function createCart(req: Request, res: Response) {
  const newCart: HydratedDocument<CartType> = new CartModel(req.body);

  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (error) {
    res.status(500).json(error as Error);
  }
}

export async function getCart(req: Request, res: Response) {
  const authHeader = req.headers.authorization;
  try {
    const token = authHeader?.split(" ")[1] || "";
    const { id } = verifyToken(token);
    const dbCart = await CartModel.findOne({ userId: id });

    res.status(200).json(dbCart);
  } catch (error) {
    res.status(500).json(error as Error);
  }
}

export async function getAllCarts(req: Request, res: Response) {
  const query = req.query;

  try {
    if (query && query.limit) {
      const carts = await CartModel.find().limit(Number(query.limit));
      return res.status(200).json(carts);
    } else {
      const carts = await CartModel.find();
      return res.status(200).json(carts);
    }
  } catch (error) {
    res.status(500).json(error as Error);
  }
}

export async function updateCart(req: Request, res: Response) {
  try {
    const updatedCart = await CartModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json(error as Error);
  }
}

export async function deleteCart(req: Request, res: Response) {
  try {
    await CartModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Carrinho deletado com sucesso!" });
  } catch (error) {
    res.status(500).json(error as Error);
  }
}
