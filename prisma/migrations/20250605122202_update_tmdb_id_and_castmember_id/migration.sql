/*
  Warnings:

  - The primary key for the `CastMember` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `imdb_id` on the `Movie` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[tmdb_id]` on the table `Movie` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `tmdb_id` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
CREATE SEQUENCE castmember_id_seq;
ALTER TABLE "CastMember" DROP CONSTRAINT "CastMember_pkey",
ALTER COLUMN "id" SET DEFAULT nextval('castmember_id_seq'),
ALTER COLUMN "profile_path" DROP NOT NULL,
ADD CONSTRAINT "CastMember_pkey" PRIMARY KEY ("id");
ALTER SEQUENCE castmember_id_seq OWNED BY "CastMember"."id";

-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "imdb_id",
ADD COLUMN     "tmdb_id" TEXT NOT NULL,
ALTER COLUMN "poster_path" DROP NOT NULL,
ALTER COLUMN "backdrop_path" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Review" ALTER COLUMN "rating" DROP NOT NULL,
ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "avatar_path" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Show" (
    "id" SERIAL NOT NULL,
    "tmdb_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "overview" TEXT,
    "poster_path" TEXT,
    "backdrop_path" TEXT,
    "first_air_date" TIMESTAMP(3),
    "last_air_date" TIMESTAMP(3),
    "production_companies" JSONB NOT NULL,
    "number_of_seasons" INTEGER,
    "number_of_episodes" INTEGER,
    "genres" JSONB,
    "popularity" DOUBLE PRECISION,
    "vote_average" DOUBLE PRECISION,
    "vote_count" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Show_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Episode" (
    "id" SERIAL NOT NULL,
    "showId" INTEGER NOT NULL,
    "season_number" INTEGER NOT NULL,
    "episode_number" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "overview" TEXT,
    "air_date" TIMESTAMP(3),
    "still_path" TEXT,
    "vote_average" DOUBLE PRECISION,
    "vote_count" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Episode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "user_agent" TEXT,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Show_tmdb_id_key" ON "Show"("tmdb_id");

-- CreateIndex
CREATE INDEX "Show_name_idx" ON "Show"("name");

-- CreateIndex
CREATE INDEX "Episode_name_idx" ON "Episode"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Episode_showId_season_number_episode_number_key" ON "Episode"("showId", "season_number", "episode_number");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "CastMember_movieId_idx" ON "CastMember"("movieId");

-- CreateIndex
CREATE UNIQUE INDEX "Movie_tmdb_id_key" ON "Movie"("tmdb_id");

-- CreateIndex
CREATE INDEX "Movie_title_idx" ON "Movie"("title");

-- AddForeignKey
ALTER TABLE "Episode" ADD CONSTRAINT "Episode_showId_fkey" FOREIGN KEY ("showId") REFERENCES "Show"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
