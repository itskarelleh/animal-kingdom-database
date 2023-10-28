-- CreateEnum
CREATE TYPE "ConservationStatus" AS ENUM ('EX', 'EW', 'CR', 'EN', 'VU', 'NT', 'LC', 'DD', 'NE');

-- CreateTable
CREATE TABLE "Animal" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "conservationStatus" "ConservationStatus" NOT NULL,
    "phylum" TEXT NOT NULL,
    "subPhylum" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "order" TEXT NOT NULL,
    "family" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Animal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Animal_name_key" ON "Animal"("name");
