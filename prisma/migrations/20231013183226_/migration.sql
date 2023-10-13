/*
  Warnings:

  - You are about to drop the column `flag` on the `AnswerVote` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Answer" ADD COLUMN     "downvote" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "upvote" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "AnswerVote" DROP COLUMN "flag";
