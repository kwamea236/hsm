/*
  Warnings:

  - You are about to drop the `Quote` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `Quotes` to the `Author` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Quote` DROP FOREIGN KEY `Quote_authorId_fkey`;

-- AlterTable
ALTER TABLE `Author` ADD COLUMN `Quotes` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `Quote`;
