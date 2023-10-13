/*
  Warnings:

  - The `flag` column on the `AnswerVote` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Vote" AS ENUM ('DOWN_VOTE', 'UP_VOTE');

-- AlterTable
ALTER TABLE "AnswerVote" DROP COLUMN "flag",
ADD COLUMN     "flag" INTEGER;
