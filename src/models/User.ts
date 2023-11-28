import { Schema } from "mongoose";

export type UserType = {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
};

const UserSchema = new Schema<UserType>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
