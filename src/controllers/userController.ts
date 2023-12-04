import { Response, Request } from "express";
import UserModel from "../models/userModel";

export async function getUser(req: Request, res: Response) {
  try {
    const dbUser = await UserModel.findById(req.params.id);

    // @ts-ignore
    delete dbUser.password;

    res.status(200).json(dbUser);
  } catch (error) {
    res.status(500).json(error as Error);
  }
}

export async function getAllUsers(req: Request, res: Response) {
  const query = req.query;
  try {
    const users =
      query && query.limit
        ? await UserModel.find().sort().limit(Number(query.limit))
        : await UserModel.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error as Error);
  }
}

export async function getStats(req: Request, res: Response) {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  
  try {
    
    const data = await UserModel.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      { $project: { month: { $month: "$createdAt" } } },
      { $group: { _id: "$month", total: {$sum: 1} } },
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
    const updatedUser = await UserModel.findByIdAndUpdate(
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
    await UserModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Usuário deletado com sucesso!" });
  } catch (error) {
    res.status(500).json(error as Error);
  }
}
