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

export async function getAllProducts(req: Request, res: Response) {
  const query = req.query;
  const category = query.category || "";

  try {
    if (category && query && query.limit) {
      const products = await ProductModel.find({
        categories: { $in: [category] },
      }).limit(Number(query.limit));

      return res.status(200).json(products);

    } else if (category) {
      const products = await ProductModel.find({
        categories: { $in: [category] },
      });
      return res.status(200).json(products);

    } else if (query && query.limit) {
      const products = await ProductModel.find().limit(Number(query.limit));
      return res.status(200).json(products);

    } else {
      const products = await ProductModel.find();
      return res.status(200).json(products);
    }
  } catch (error) {
    res.status(500).json(error as Error);
  }
}

export async function updateProduct(req: Request, res: Response) {
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

export async function deleteProduct(req: Request, res: Response) {
  try {
    await ProductModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Produto deletado com sucesso!" });
  } catch (error) {
    res.status(500).json(error as Error);
  }
}
