import { Resolvers, RegisterInput, LoginInput } from "../resolvers-types";
import { Context } from "../types";
import { formatErrors } from "../utils/formatErrors";
import bcrypt from "bcrypt";

export const resolvers: Resolvers = {
  Query: {
    users: async (_: any, __: any, { User }: Context) => {
      return await User.find();
    },
  },
  Mutation: {
    registerUser: async (
      _: any,
      { user }: { user: RegisterInput },
      { User }: Context
    ) => {
      const newUser = new User({
        name: user.name,
        email: user.email,
        password: user.password,
      });

      const error = newUser.validateSync();

      if (error) {
        return {
          errors: formatErrors(error),
        };
      }

      newUser.password = await bcrypt.hash(newUser.password, 10);

      try {
        await newUser.save();
      } catch (error: any) {
        return {
          errors: formatErrors(error),
        };
      }

      return { user: newUser };
    },
    loginUser: async (
      _: any,
      { user }: { user: LoginInput },
      { User }: Context
    ) => {
      const existingUser = await User.findOne({ email: user.email });

      if (!existingUser) {
        return {
          errors: [
            {
              field: "email",
              message: "Invalid credentials.",
            },
          ],
        };
      }

      const correctPassword = await bcrypt.compare(
        user.password,
        existingUser.password
      );

      if (!correctPassword) {
        return {
          errors: [
            {
              field: "password",
              message: "Invalid credentials.",
            },
          ],
        };
      }

      return { user: existingUser };
    },
  },
};
