const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

async function unseed() {
    await prisma.animal.deleteMany(); // Replace with the appropriate model
    await prisma.$disconnect();
}

unseed()
    .catch((error) => {
        console.error('Error unseeding data:', error);
    })
    .finally(() => {
        console.log('Data unseeded.');
    });