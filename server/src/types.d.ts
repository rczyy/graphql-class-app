import { Model } from "mongoose";

export interface UserModel {
  _id: string;
  name: string;
  email: string;
  password: string;
}

export interface Context {
  User: Model<UserModel, {}, {}, {}, any>;
}
