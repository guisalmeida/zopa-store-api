import { Schema, model } from "mongoose";

export type UserType = {
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
};

const UserSchema = new Schema<UserType>(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const UserModel = model("user", UserSchema);

export default UserModel;
