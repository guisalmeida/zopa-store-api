import { Schema, model } from "mongoose";

export type ProductType = {
  name: string;
  description: string;
  onSale: boolean;
  quantity: number;
  images: string[];
  categories: string[];
  discount: number;
  colors: string[];
  price: number;
  oldPrice: number;
  sizes: {
    available: boolean;
    size: string;
  }[];
  inStock: boolean;
};

const productsSchema = new Schema<ProductType>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    onSale: { type: Boolean, required: true },
    quantity: { type: Number, required: true },
    images: { type: [String], required: true },
    categories: { type: [String], required: true },
    discount: { type: Number, required: true },
    colors: [{ type: String, required: true }],
    price: { type: Number, required: true },
    oldPrice: { type: Number, required: true },
    sizes: [
      {
        available: { type: Boolean, required: true },
        size: { type: String, required: true },
      },
    ],
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const ProductModel = model("product", productsSchema);

export default ProductModel;
