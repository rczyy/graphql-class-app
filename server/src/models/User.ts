import { model, Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import { UserModel } from "../types";
import { validateEmail } from "../utils/validateEmail";

const userSchema = new Schema<UserModel>({
  name: {
    type: String,
    required: [true, "Name is required."],
    minlength: [4, "Name must be at least 4 characters long."],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required."],
    minlength: [4, "Email must be at least 4 characters long."],
    validate: {
      validator: validateEmail,
      message: "Please enter a valid email.",
    },
  },
  password: {
    type: String,
    required: [true, "Password is required."],
    minlength: [6, "Password must be at least 6 characters long."],
  },
});

userSchema.plugin(uniqueValidator, { message: "Email already exists." });

export const User = model<UserModel>("User", userSchema);
