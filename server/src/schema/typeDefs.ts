import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    me: User
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Error {
    field: String!
    message: String!
  }

  type UserResponse {
    user: User
    errors: [Error!]
  }

  type Mutation {
    registerUser(user: RegisterInput!): UserResponse!
    loginUser(user: LoginInput!): UserResponse!
  }

  input RegisterInput {
    name: String!
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }
`;
