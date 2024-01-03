import express, { Express } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import routes from "./routes";
import cors from "cors";

dotenv.config();

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_DB_URL || "")
  .then(() => {
    console.log("DB connection successful!");
  })
  .catch((error: Error) => {
    console.log(error.message);
  });

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 5000, () => {
  console.log("server running...");
});
