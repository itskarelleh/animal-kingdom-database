import { PrismaClient } from '@prisma/client';
import { animals } from '../data/animals';

const prisma = new PrismaClient();

async function main() {
    try {
        const animalsCreateMany = await prisma.animal.createMany({
            data: animals,
        });

        console.log('Created animals');
    } catch (error) {
        console.error('Error creating cat:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main().catch((err) => {
    console.log(err);
    process.exit(1);
});
