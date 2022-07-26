import express from "express";
import { ApolloServer } from "apollo-server-express";
import { connect } from "mongoose";
import { mongoUri, port } from "./constants";
import { typeDefs } from "./schema/typeDefs";
import { resolvers } from "./schema/resolvers";
import { User } from "./models/User";

const start = async () => {
  await connect(mongoUri);
  console.log("Connected to database.");

  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ User }),
  });

  await server.start();
  server.applyMiddleware({ app });

  app.listen(port, () => {
    console.log(
      `Server started on http://localhost:${port + server.graphqlPath}`
    );
  });
};

start();
