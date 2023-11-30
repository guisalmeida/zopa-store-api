import { Router } from "express";

import { login, register } from "../controllers/authContoller";
import authenticate from "../middlewares/authenticate";

const authRoute = Router();

authRoute.post("/register", register);
authRoute.post("/login", login);

export default authRoute;
