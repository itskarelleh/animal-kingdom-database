import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { PrismaClient } from "@prisma/client";
import { resolvers } from "@/graphql/resolvers"
import { typeDefs } from "@/graphql/schema";
import {NextRequest} from "next/server";
import { prisma } from "@/prisma/db";


export type Context = {
    prisma: PrismaClient
};

const server = new ApolloServer<Context | object>({
    resolvers,
    typeDefs,
    introspection: process.env.NODE_ENV !== "production",
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
    context: async (req, res) => ({ req, res, prisma }),
});

// export { handler as GET, handler as POST };
export { handler as POST };
