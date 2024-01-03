import { Router } from "express";
import authenticate from "../middlewares/authenticate";
import {
  getUser,
  getAllUsers,
  updateUser,
  getStats,
  deleteUser,
} from "../controllers/userController";

const usersRouter = Router();

usersRouter.get("/", authenticate, getAllUsers);
usersRouter.get("/stats", authenticate, getStats);
usersRouter.get("/:id", authenticate, getUser);
usersRouter.put("/:id", authenticate, updateUser);
usersRouter.delete("/:id", authenticate, deleteUser);

export default usersRouter;
