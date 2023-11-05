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
    },
    Mutation: {
        addAnimal: async (parent: any, args: any, context: Context) => {
            const { name, description, thumbnail, phylum, subPhylum, order, family } = args.input;

            // const formData = new FormData();
            // formData.append('thumbnail', thumbnail)
            //
            // console.log({ "args.input": args.input })
            //
            // // Handle the file upload (e.g., using the 'multer' package) and store the file
            // const uploadResponse = await fetch("/api/upload", {
            //     method: 'POST',
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: formData,
            // });
            //
            // if(uploadResponse.status  === 200) {
            //     const pathToUploadedThumbnail = await uploadResponse.text();
            //
            //     const createdAnimal = await context.prisma.animal.create({
            //         data : { ...args.input,
            //             thumbnail: pathToUploadedThumbnail, // Replace with the actual path
            //         },
            //     });
            //
            //     return createdAnimal;
            // } else {
            //     throw new Error('File upload failed');
            // }

            return await context.prisma.animal.create({
                data : { ...args.input,
                },
            });

            // Create the animal in your data source (e.g., Prisma)

        },
        updateAnimal: (parent: any, args: any, context: Context) => {
            // Use your data source (e.g., Prisma) to update the animal
            return context.prisma.animal.update({
                where: { id: args.id },
                data: args.input
            })

        },
        deleteAnimal: (parent: any, args: any, context: Context) => {
            // Use your data source (e.g., Prisma) to delete the animal
            return context.prisma.animal.delete({
                where: { id: args.id }
            })
        },
    }
}