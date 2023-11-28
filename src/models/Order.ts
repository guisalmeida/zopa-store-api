import { Schema } from "mongoose";

export type OrderType = {
  userId: string;
  products: {
    productId: string;
    quantity: number;
  }[];
  amount: number;
  address: Object;
  status: string;
};

const OrderSchema = new Schema<OrderType>(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: { type: String, required: true },
        quantity: { type: Number, required: true, default: 1 },
      },
    ],
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "Processing" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
