import { Schema, model } from "mongoose";

export type OrderType = {
  userId: string;
  products: {
    productId: string;
    quantity: number;
  }[];
  amount: number;
  address: {
    city: string;
    state: string;
    line1: string;
    line2: string;
    zipcode: string;
  };
  status: string;
};

const orderSchema = new Schema<OrderType>(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: { type: String, required: true },
        quantity: { type: Number, required: true, default: 1 },
      },
    ],
    amount: { type: Number, required: true },
    address: {
      city: { type: String, required: true },
      state: { type: String, required: true },
      line1: { type: String, required: true },
      line2: { type: String, required: true },
      zipcode: { type: String, required: true },
    },
    status: { type: String, default: "Processing" },
  },
  { timestamps: true }
);

const OrderModel = model("order", orderSchema);

export default OrderModel;
