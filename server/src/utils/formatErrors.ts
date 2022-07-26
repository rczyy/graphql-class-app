import { Error } from "mongoose";

export const formatErrors = (error: Error.ValidationError) => {
  return Object.keys(error.errors).map((field) => ({
    field,
    message: error.errors[field]?.message || "Something went wrong.",
  }));
};
