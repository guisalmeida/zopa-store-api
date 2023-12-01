import { HydratedDocument } from "mongoose";
import { Response, Request } from "express";
import ProductModel, { ProductType } from "../models/productModel";

export async function createProduct(req: Request, res: Response) {
  const newProduct: HydratedDocument<ProductType> = new ProductModel(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(500).json(error as Error);
  }
}

export async function getProduct(req: Request, res: Response) {
  try {
    const dbProduct = await ProductModel.findById(req.params.id);

    res.status(200).json(dbProduct);
  } catch (error) {
    res.status(500).json(error as Error);
  }
}

export async function getAllUsers(req: Request, res: Response) {
  const query = req.query;
  try {
    const users =
      query && query.limit
        ? await ProductModel.find().sort().limit(Number(query.limit))
        : await ProductModel.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error as Error);
  }
}

export async function getStats(req: Request, res: Response) {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  console.log("teste");

  try {
    const data = await ProductModel.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      { $project: { month: { $month: "$createdAt" } } },
      { $group: { _id: "$month", total: { $sum: 1 } } },
    ]);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error as Error);
  }
}

export async function updateUser(req: Request, res: Response) {
  if (req.body.password) {
    req.body.passwordChangedAt = new Date();
  }

  try {
    const updatedUser = await ProductModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error as Error);
  }
}

export async function deleteUser(req: Request, res: Response) {
  try {
    await ProductModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Usuário deletado com sucesso!" });
  } catch (error) {
    res.status(500).json(error as Error);
  }
}
