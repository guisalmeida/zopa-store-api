import { Schema, model } from "mongoose";
import { hashPassword } from "../utils/index";

export type UserType = {
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
};

const userSchema = new Schema<UserType>(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 8 },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const hashedPassword = await hashPassword(this.password);
  if (hashedPassword) {
    this.password = hashedPassword;
  }
  
  next();
});

const UserModel = model("user", userSchema);

export default UserModel;
