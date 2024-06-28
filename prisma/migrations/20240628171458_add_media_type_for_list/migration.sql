/*
  Warnings:

  - Added the required column `mediaType` to the `favorite-list` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mediaType` to the `watch-list` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "MovieType" AS ENUM ('TV_SERIES', 'MOVIES');

-- AlterTable
ALTER TABLE "favorite-list" ADD COLUMN     "mediaType" "MovieType" NOT NULL;

-- AlterTable
ALTER TABLE "watch-list" ADD COLUMN     "mediaType" "MovieType" NOT NULL;
