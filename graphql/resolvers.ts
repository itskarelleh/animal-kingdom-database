import { Context } from '@/app/api/graphql/route';
export const resolvers = {
    Query: {
        //get animal by name
        animal: (parent: any, args: any, context: Context) => {
            return context.prisma.animal.findUnique({
                where: {
                    name: args.name,
                },
            });
        },
        animals: (parent: any, args: any, context: Context) => {
            return context.prisma.animal.findMany();
        },
        animalsByNames:(parent: any, args: any, context: Context) => {
            return context.prisma.animal.findMany({
                where: {
                    name: {
                        in: args.names
                    }
                }
            })
        },
        animalsByFamily: (parent: any, args: any, context: Context) => {
            return context.prisma.animal.findMany({
                where: {
                    family: args.family
                }
            })
        }
    }
}