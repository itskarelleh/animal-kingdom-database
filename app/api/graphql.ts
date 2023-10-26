import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler} from "@as-integrations/next";
import { gql } from 'graphql-tag';
import { createContext } from "@/prisma/context";

const typeDefs = gql`
    type Query {
        hello: String
    }
`

const resolvers = {
    Query: {
        hello: () => 'Hello World'
    },
};

// @ts-ignore
const server = new ApolloServer(({
    context: createContext,
    typeDefs,
    resolvers,
    introspection: process.env.NODE_ENV === "production" ? false : true,
}));

export default startServerAndCreateNextHandler(server);