import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { PrismaClient } from "@prisma/client";
import { resolvers } from "@/graphql/resolvers"
import { typeDefs } from "@/graphql/schema";
import {NextRequest} from "next/server";
import { prisma } from "@/prisma/db";
import {gql} from "graphql-tag";

export type Context = {
    prisma: PrismaClient
};

const server = new ApolloServer({
    resolvers,
    typeDefs,
    introspection: process.env.NODE_ENV !== "production",
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
    context: async (req, res) => ({ req, res, prisma }),
});
export { handler as GET, handler as POST };

//
// const server = new ApolloServer({
//     typeDefs,
//     resolvers,
// });
//
// const apolloServer = new ApolloServer({
//     typeDefs,
//     resolvers,
// });
// // export default startServerAndCreateNextHandler(apolloServer);
//
// // // Typescript: req has the type NextRequest
// const handler = startServerAndCreateNextHandler<NextRequest>(server, {
//     context: async req => ({ req }),
// });
//
// export { handler as GET, handler as POST };