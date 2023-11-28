import { Schema, model } from "mongoose";

export type CartType = {
  userId: string;
  products: {
    productId: string;
    quantity: number;
  }[];
};

const CartSchema = new Schema<CartType>(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: { type: String, required: true },
        quantity: { type: Number, required: true, default: 1 },
      },
    ],
  },
  { timestamps: true }
);

const CartModel = model("cart", CartSchema);

export default CartModel;
