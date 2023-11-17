import { PrismaClient } from '@prisma/client'

/*Prisma Config when using it with NextJS

Each time the server is refreshed, a new prisma cleient is generated, which is not needed, but rather
have 1 prisma client for the entire application.

In development, the command next dev clears Node.js cache on run. This in turn initializes a new PrismaClient
instance each time due to hot reloading that creates a connection to the database. This can quickly exhaust
the database connections as each PrismaClient instance holds its own connection pool.

Solution:
The solution in this case is to instantiate a single instance PrismaClient and save it on the global object.
Then we keep a check to only instantiate PrismaClient if it's not on the global object otherwise use the same
instance again if already present to prevent instantiating extra PrismaClient instances.

*/

const globalForPrisma = global as unknown as {
    prisma: PrismaClient
}

export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
        log: ['query'],
    })

if (process.env.VERCEL_ENV !== 'production') globalForPrisma.prisma = prisma