const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");

dotenv.config();
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("DB connection successful!");
  })
  .catch((error: Error) => {
    console.log(error);
  });

const app = express();

app.use(express.json())
app.use("/api/users", userRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("server running...");
});
