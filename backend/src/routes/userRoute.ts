import { Router } from "express";
import authenticate from "../middlewares/authenticate";
import {
  getUser,
  getAllUsers,
  updateUser,
  getStats,
  deleteUser,
} from "../controllers/userController";

const userRouter = Router();

userRouter.get("/", authenticate, getAllUsers);
userRouter.get("/stats", authenticate, getStats);
userRouter.get("/:id", authenticate, getUser);
userRouter.put("/:id", authenticate, updateUser);
userRouter.delete("/:id", authenticate, deleteUser);

export default userRouter;
