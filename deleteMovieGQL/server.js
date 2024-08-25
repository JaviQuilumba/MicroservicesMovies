const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./graphqlSchema');
const cors = require('cors');

const startServer = async () => {
  const app = express();

  app.use(cors({
    origin: 'http://localhost:3000'  
  }));

  const server = new ApolloServer({ typeDefs, resolvers });
  
  await server.start(); 

  server.applyMiddleware({ app });

  app.listen({ port: 3005 }, () =>
    console.log(`Server ready at http://localhost:3005${server.graphqlPath}`)
  );
};

startServer().catch(err => {
  console.error('Error starting the server:', err);
});
