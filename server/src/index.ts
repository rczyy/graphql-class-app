import express from "express";
import { ApolloServer } from "apollo-server-express";
import { port } from "./constants";
import { typeDefs } from "./typeDefs";
import { Query } from "./resolvers/Query";

const start = async () => {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers: {
      Query,
    },
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
