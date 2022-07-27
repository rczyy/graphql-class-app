import express from "express";
import { ApolloServer } from "apollo-server-express";
import { connect } from "mongoose";
import cors from "cors";
import session from "express-session";
import MongoStore from "connect-mongo";
import { mongoUri, port, prod, sessionSecret } from "./constants";
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
    context: ({ req }) => ({ req, User }),
    csrfPrevention: true,
  });

  app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));

  app.use(
    session({
      name: "sid",
      secret: sessionSecret,
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: prod,
        maxAge: 1000 * 60 * 60 * 24 * 7,
      },
      store: MongoStore.create({ mongoUrl: mongoUri }),
    })
  );

  await server.start();
  server.applyMiddleware({ app, cors: false });

  app.listen(port, () => {
    console.log(
      `Server started on http://localhost:${port + server.graphqlPath}`
    );
  });
};

start();
