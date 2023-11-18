import {Context} from '@/app/api/graphql/route';

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
        },animalCategories: async (_parent: any, args: any, context: Context) => {
            const { category } = args;
            let fieldName : any;
            switch (category) {
                case 'FAMILY': fieldName = 'family'; break;
                case 'ORDER': fieldName = 'order'; break;
                case 'CLASS': fieldName = 'class'; break;
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
            const { name, description, thumbnail, phylum, subPhylum, order, family } = args.input;

            const formData = new FormData();
            formData.append('thumbnail', thumbnail)

            console.log({ "args.input": args.input })

            // Handle the file upload (e.g., using the 'multer' package) and store the file
            const uploadResponse = await fetch("/api/upload", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: formData,
            });

            if(uploadResponse.status  === 200) {
                const pathToUploadedThumbnail = await uploadResponse.text();

                return await context.prisma.animal.create({
                    data: {
                        ...args.input,
                        thumbnail: pathToUploadedThumbnail, // Replace with the actual path
                    },
                });
            } else {
                throw new Error('File upload failed');
            }
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