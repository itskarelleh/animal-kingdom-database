/*
  Warnings:

  - You are about to drop the column `class` on the `Animal` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Animal" RENAME COLUMN "class" TO "classification";
