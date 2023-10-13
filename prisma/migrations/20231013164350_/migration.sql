/*
  Warnings:

  - Made the column `flag` on table `AnswerVote` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "AnswerVote" ALTER COLUMN "flag" SET NOT NULL,
ALTER COLUMN "flag" SET DEFAULT -1;

-- DropEnum
DROP TYPE "Vote";
