import { Request } from "express";
import { Model } from "mongoose";

export interface UserModel {
  _id: string;
  name: string;
  email: string;
  password: string;
}

export interface Context {
  req: Request<
    ParamsDictionary,
    any,
    any,
    QueryString.ParsedQs,
    Record<string, any>
  >;
  User: Model<UserModel, {}, {}, {}, any>;
}

declare module "express-session" {
  interface SessionData {
    uid: string;
  }
}
