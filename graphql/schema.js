// Imports: GraphQL
import { ApolloServer } from 'apollo-server-express';
// Imports: GraphQL TypeDefs & Resolvers
import path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './types')));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));

// GraphQL: Schema
const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  playground: {
    endpoint: `http://localhost:${process.env.PORT || 4000}/graphql`,
    settings: {
      'editor.theme': 'light'
    }
  }
});

// Exports
export default server;