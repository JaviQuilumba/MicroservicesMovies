const { gql } = require('apollo-server-express');
const { deleteMovie } = require('./controllers/movieController');

const typeDefs = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    deleteMovie(id: ID!): Boolean
  }
`;

const resolvers = {
  Mutation: {
    deleteMovie
  }
};

module.exports = { typeDefs, resolvers };
