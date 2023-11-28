import express, { Express } from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'

import userRouter from "./routes/userRoute";
import authRoute from "./routes/authRoute";

dotenv.config();
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_DB_URL || '')
  .then(() => {
    console.log("DB connection successful!");
  })
  .catch((error: Error) => {
    console.log(error);
  });

const app: Express = express();

app.use(express.json())
app.use("/api/users", userRouter);
app.use("/api/auth", authRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("server running...");
});
