import { Router } from "express";
import { logUser, registerUser } from "../controllers/authContoller";

const authRoute = Router();

authRoute.post("/register", registerUser);
authRoute.post("/login", logUser);

export default authRoute;
