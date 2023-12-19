import { HydratedDocument } from "mongoose";
import { Response, Request } from "express";
import OrderModel, { OrderType } from "../models/orderModel";

export async function createOrder(req: Request, res: Response) {
  const newOrder: HydratedDocument<OrderType> = new OrderModel(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (error) {
    res.status(500).json(error as Error);
  }
}

export async function getOrder(req: Request, res: Response) {
  try {
    const dbOrder = await OrderModel.findById(req.params.id);

    res.status(200).json(dbOrder);
  } catch (error) {
    res.status(500).json(error as Error);
  }
}

export async function getAllOrders(req: Request, res: Response) {
  const query = req.query;

  try {
    if (query && query.limit) {
      const orders = await OrderModel.find().limit(Number(query.limit));
      return res.status(200).json(orders);
    } else {
      const orders = await OrderModel.find();
      return res.status(200).json(orders);
    }
  } catch (error) {
    res.status(500).json(error as Error);
  }
}

export async function updateOrder(req: Request, res: Response) {
  try {
    const updatedOrder = await OrderModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json(error as Error);
  }
}

export async function deleteOrder(req: Request, res: Response) {
  try {
    await OrderModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Carrinho deletado com sucesso!" });
  } catch (error) {
    res.status(500).json(error as Error);
  }
}

export async function getIncome(req: Request, res: Response) {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(date.setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await OrderModel.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);

    res.status(200).json(income);
  } catch (error) {
    res.status(500).json(error as Error);
  }
}
