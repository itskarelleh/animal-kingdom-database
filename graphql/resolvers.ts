import {Context} from '@/app/api/graphql/route';
import { put } from "@vercel/blob";

export const resolvers = {
    Query: {
        //get animal by name
        animal: async (_parent: any, args: any, context: Context) => {
            return await context.prisma.animal.findUnique({
                where: {
                    name: args.name,
                },
            });
        },
        animals: async (_parent: any, _args: any, context: Context) => {
            return await context.prisma.animal.findMany();
        },
        animalsByNames: async(_parent: any, args: any, context: Context) => {
            return context.prisma.animal.findMany({
                where: {
                    name: {
                        in: args.names
                    }
                }
            })
        }, animalCategories: async (_parent: any, args: any, context: Context) => {
            const { category } = args;
            let fieldName : any;
            switch (category) {
                case 'FAMILY': fieldName = 'family'; break;
                case 'ANIMAL_ORDER': fieldName = 'animalOrder'; break;
                case 'CLASSIFICATION': fieldName = 'class'; break;
                case 'PHYLUM': fieldName = 'phylum'; break;
                case 'CONSERVATION': fieldName = 'conservationStatus'; break;
                default: throw new Error('Invalid category');
            }

            return await context.prisma.animal.findMany({
                select: {[fieldName]: true},
                distinct: [fieldName]
            });
            // return results.map(item => item[fieldName]);
        },
    },
    Mutation: {
        addAnimal: async (_parent: any, args: any, context: Context) => {
            const { name, description,  phylum, subPhylum, order, family } = args.input;
            
            const thumbnail = args.input.thumbnail;

            const blob = await put(thumbnail, thumbnail, {
                access: 'public',
            });

            return await context.prisma.animal.create({
                data: {
                    ...args.input,
                    thumbnail: blob.url, // Replace with the actual path
                },
            });
        },
        updateAnimal: async (_parent: any, args: any, context: Context) => {
            // Use your data source (e.g., Prisma) to update the animal
            return context.prisma.animal.update({
                where: { id: args.id },
                data: args.input
            })
        },
        deleteAnimal: async (parent: any, args: any, context: Context) => {
            // Use your data source (e.g., Prisma) to delete the animal
            return context.prisma.animal.delete({
                where: { id: args.id }
            })
        },
    }
}