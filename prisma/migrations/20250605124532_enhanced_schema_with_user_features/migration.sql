/*
  Warnings:

  - You are about to drop the column `name` on the `CastMember` table. All the data in the column will be lost.
  - You are about to drop the column `profile_path` on the `CastMember` table. All the data in the column will be lost.
  - You are about to drop the column `genres` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `production_companies` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `genres` on the `Show` table. All the data in the column will be lost.
  - You are about to drop the column `production_companies` on the `Show` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `personId` to the `CastMember` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CastMember" DROP COLUMN "name",
DROP COLUMN "profile_path",
ADD COLUMN     "order" INTEGER,
ADD COLUMN     "personId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Episode" ADD COLUMN     "runtime" INTEGER;

-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "genres",
DROP COLUMN "production_companies",
ADD COLUMN     "adult" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "budget" BIGINT,
ADD COLUMN     "original_language" TEXT NOT NULL DEFAULT 'en',
ADD COLUMN     "revenue" BIGINT,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'Released',
ADD COLUMN     "tagline" TEXT;

-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "url" TEXT;

-- AlterTable
ALTER TABLE "Session" ADD COLUMN     "ip_address" TEXT;

-- AlterTable
ALTER TABLE "Show" DROP COLUMN "genres",
DROP COLUMN "production_companies",
ADD COLUMN     "adult" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "original_language" TEXT NOT NULL DEFAULT 'en',
ADD COLUMN     "status" TEXT,
ADD COLUMN     "type" TEXT;

-- AlterTable
ALTER TABLE "Trailer" ADD COLUMN     "official" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "size" INTEGER;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "avatar_path" TEXT,
ADD COLUMN     "bio" TEXT,
ADD COLUMN     "firstName" TEXT,
ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "is_verified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "lastName" TEXT,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "username" TEXT;

-- CreateTable
CREATE TABLE "Genre" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "tmdb_id" INTEGER,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductionCompany" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "tmdb_id" INTEGER,
    "logo_path" TEXT,
    "origin_country" TEXT,

    CONSTRAINT "ProductionCompany_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Network" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "tmdb_id" INTEGER,
    "logo_path" TEXT,
    "origin_country" TEXT,

    CONSTRAINT "Network_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Collection" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "tmdb_id" INTEGER,
    "overview" TEXT,
    "poster_path" TEXT,
    "backdrop_path" TEXT,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MovieGenre" (
    "movieId" INTEGER NOT NULL,
    "genreId" INTEGER NOT NULL,

    CONSTRAINT "MovieGenre_pkey" PRIMARY KEY ("movieId","genreId")
);

-- CreateTable
CREATE TABLE "ShowGenre" (
    "showId" INTEGER NOT NULL,
    "genreId" INTEGER NOT NULL,

    CONSTRAINT "ShowGenre_pkey" PRIMARY KEY ("showId","genreId")
);

-- CreateTable
CREATE TABLE "MovieProductionCompany" (
    "movieId" INTEGER NOT NULL,
    "productionCompanyId" INTEGER NOT NULL,

    CONSTRAINT "MovieProductionCompany_pkey" PRIMARY KEY ("movieId","productionCompanyId")
);

-- CreateTable
CREATE TABLE "ShowProductionCompany" (
    "showId" INTEGER NOT NULL,
    "productionCompanyId" INTEGER NOT NULL,

    CONSTRAINT "ShowProductionCompany_pkey" PRIMARY KEY ("showId","productionCompanyId")
);

-- CreateTable
CREATE TABLE "ShowNetwork" (
    "showId" INTEGER NOT NULL,
    "networkId" INTEGER NOT NULL,

    CONSTRAINT "ShowNetwork_pkey" PRIMARY KEY ("showId","networkId")
);

-- CreateTable
CREATE TABLE "MovieCollection" (
    "movieId" INTEGER NOT NULL,
    "collectionId" INTEGER NOT NULL,

    CONSTRAINT "MovieCollection_pkey" PRIMARY KEY ("movieId","collectionId")
);

-- CreateTable
CREATE TABLE "Person" (
    "id" SERIAL NOT NULL,
    "tmdb_id" INTEGER,
    "name" TEXT NOT NULL,
    "biography" TEXT,
    "birthday" TIMESTAMP(3),
    "deathday" TIMESTAMP(3),
    "place_of_birth" TEXT,
    "profile_path" TEXT,
    "adult" BOOLEAN NOT NULL DEFAULT false,
    "popularity" DOUBLE PRECISION,
    "known_for_department" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CrewMember" (
    "id" SERIAL NOT NULL,
    "movieId" INTEGER NOT NULL,
    "personId" INTEGER NOT NULL,
    "job" TEXT NOT NULL,
    "department" TEXT NOT NULL,

    CONSTRAINT "CrewMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserRating" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "movieId" INTEGER,
    "showId" INTEGER,
    "rating" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserRating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Watchlist" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "is_public" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Watchlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WatchlistItem" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "watchlistId" TEXT,
    "movieId" INTEGER,
    "showId" INTEGER,
    "added_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "watched_at" TIMESTAMP(3),
    "is_watched" BOOLEAN NOT NULL DEFAULT false,
    "notes" TEXT,

    CONSTRAINT "WatchlistItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FavoriteItem" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "movieId" INTEGER,
    "showId" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FavoriteItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Genre_name_key" ON "Genre"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Genre_tmdb_id_key" ON "Genre"("tmdb_id");

-- CreateIndex
CREATE INDEX "Genre_name_idx" ON "Genre"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ProductionCompany_name_key" ON "ProductionCompany"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ProductionCompany_tmdb_id_key" ON "ProductionCompany"("tmdb_id");

-- CreateIndex
CREATE INDEX "ProductionCompany_name_idx" ON "ProductionCompany"("name");

-- CreateIndex
CREATE INDEX "ProductionCompany_origin_country_idx" ON "ProductionCompany"("origin_country");

-- CreateIndex
CREATE UNIQUE INDEX "Network_name_key" ON "Network"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Network_tmdb_id_key" ON "Network"("tmdb_id");

-- CreateIndex
CREATE INDEX "Network_name_idx" ON "Network"("name");

-- CreateIndex
CREATE INDEX "Network_origin_country_idx" ON "Network"("origin_country");

-- CreateIndex
CREATE UNIQUE INDEX "Collection_tmdb_id_key" ON "Collection"("tmdb_id");

-- CreateIndex
CREATE INDEX "Collection_name_idx" ON "Collection"("name");

-- CreateIndex
CREATE INDEX "MovieGenre_movieId_idx" ON "MovieGenre"("movieId");

-- CreateIndex
CREATE INDEX "MovieGenre_genreId_idx" ON "MovieGenre"("genreId");

-- CreateIndex
CREATE INDEX "ShowGenre_showId_idx" ON "ShowGenre"("showId");

-- CreateIndex
CREATE INDEX "ShowGenre_genreId_idx" ON "ShowGenre"("genreId");

-- CreateIndex
CREATE INDEX "MovieProductionCompany_movieId_idx" ON "MovieProductionCompany"("movieId");

-- CreateIndex
CREATE INDEX "MovieProductionCompany_productionCompanyId_idx" ON "MovieProductionCompany"("productionCompanyId");

-- CreateIndex
CREATE INDEX "ShowProductionCompany_showId_idx" ON "ShowProductionCompany"("showId");

-- CreateIndex
CREATE INDEX "ShowProductionCompany_productionCompanyId_idx" ON "ShowProductionCompany"("productionCompanyId");

-- CreateIndex
CREATE INDEX "ShowNetwork_showId_idx" ON "ShowNetwork"("showId");

-- CreateIndex
CREATE INDEX "ShowNetwork_networkId_idx" ON "ShowNetwork"("networkId");

-- CreateIndex
CREATE INDEX "MovieCollection_movieId_idx" ON "MovieCollection"("movieId");

-- CreateIndex
CREATE INDEX "MovieCollection_collectionId_idx" ON "MovieCollection"("collectionId");

-- CreateIndex
CREATE UNIQUE INDEX "Person_tmdb_id_key" ON "Person"("tmdb_id");

-- CreateIndex
CREATE INDEX "Person_name_idx" ON "Person"("name");

-- CreateIndex
CREATE INDEX "Person_popularity_idx" ON "Person"("popularity");

-- CreateIndex
CREATE INDEX "Person_known_for_department_idx" ON "Person"("known_for_department");

-- CreateIndex
CREATE INDEX "CrewMember_movieId_idx" ON "CrewMember"("movieId");

-- CreateIndex
CREATE INDEX "CrewMember_personId_idx" ON "CrewMember"("personId");

-- CreateIndex
CREATE INDEX "CrewMember_job_idx" ON "CrewMember"("job");

-- CreateIndex
CREATE INDEX "CrewMember_department_idx" ON "CrewMember"("department");

-- CreateIndex
CREATE INDEX "UserRating_userId_idx" ON "UserRating"("userId");

-- CreateIndex
CREATE INDEX "UserRating_movieId_idx" ON "UserRating"("movieId");

-- CreateIndex
CREATE INDEX "UserRating_showId_idx" ON "UserRating"("showId");

-- CreateIndex
CREATE INDEX "UserRating_rating_idx" ON "UserRating"("rating");

-- CreateIndex
CREATE UNIQUE INDEX "UserRating_userId_movieId_key" ON "UserRating"("userId", "movieId");

-- CreateIndex
CREATE UNIQUE INDEX "UserRating_userId_showId_key" ON "UserRating"("userId", "showId");

-- CreateIndex
CREATE INDEX "Watchlist_userId_idx" ON "Watchlist"("userId");

-- CreateIndex
CREATE INDEX "Watchlist_is_public_idx" ON "Watchlist"("is_public");

-- CreateIndex
CREATE INDEX "Watchlist_name_idx" ON "Watchlist"("name");

-- CreateIndex
CREATE INDEX "WatchlistItem_userId_idx" ON "WatchlistItem"("userId");

-- CreateIndex
CREATE INDEX "WatchlistItem_watchlistId_idx" ON "WatchlistItem"("watchlistId");

-- CreateIndex
CREATE INDEX "WatchlistItem_movieId_idx" ON "WatchlistItem"("movieId");

-- CreateIndex
CREATE INDEX "WatchlistItem_showId_idx" ON "WatchlistItem"("showId");

-- CreateIndex
CREATE INDEX "WatchlistItem_is_watched_idx" ON "WatchlistItem"("is_watched");

-- CreateIndex
CREATE INDEX "WatchlistItem_added_at_idx" ON "WatchlistItem"("added_at");

-- CreateIndex
CREATE UNIQUE INDEX "WatchlistItem_userId_movieId_key" ON "WatchlistItem"("userId", "movieId");

-- CreateIndex
CREATE UNIQUE INDEX "WatchlistItem_userId_showId_key" ON "WatchlistItem"("userId", "showId");

-- CreateIndex
CREATE INDEX "FavoriteItem_userId_idx" ON "FavoriteItem"("userId");

-- CreateIndex
CREATE INDEX "FavoriteItem_movieId_idx" ON "FavoriteItem"("movieId");

-- CreateIndex
CREATE INDEX "FavoriteItem_showId_idx" ON "FavoriteItem"("showId");

-- CreateIndex
CREATE INDEX "FavoriteItem_created_at_idx" ON "FavoriteItem"("created_at");

-- CreateIndex
CREATE UNIQUE INDEX "FavoriteItem_userId_movieId_key" ON "FavoriteItem"("userId", "movieId");

-- CreateIndex
CREATE UNIQUE INDEX "FavoriteItem_userId_showId_key" ON "FavoriteItem"("userId", "showId");

-- CreateIndex
CREATE INDEX "CastMember_personId_idx" ON "CastMember"("personId");

-- CreateIndex
CREATE INDEX "CastMember_order_idx" ON "CastMember"("order");

-- CreateIndex
CREATE INDEX "Episode_air_date_idx" ON "Episode"("air_date");

-- CreateIndex
CREATE INDEX "Episode_season_number_episode_number_idx" ON "Episode"("season_number", "episode_number");

-- CreateIndex
CREATE INDEX "Episode_showId_idx" ON "Episode"("showId");

-- CreateIndex
CREATE INDEX "Movie_release_date_idx" ON "Movie"("release_date");

-- CreateIndex
CREATE INDEX "Movie_popularity_idx" ON "Movie"("popularity");

-- CreateIndex
CREATE INDEX "Movie_vote_average_idx" ON "Movie"("vote_average");

-- CreateIndex
CREATE INDEX "Movie_tmdb_id_idx" ON "Movie"("tmdb_id");

-- CreateIndex
CREATE INDEX "Movie_status_idx" ON "Movie"("status");

-- CreateIndex
CREATE INDEX "Movie_original_language_idx" ON "Movie"("original_language");

-- CreateIndex
CREATE INDEX "Review_movieId_idx" ON "Review"("movieId");

-- CreateIndex
CREATE INDEX "Review_rating_idx" ON "Review"("rating");

-- CreateIndex
CREATE INDEX "Review_created_at_idx" ON "Review"("created_at");

-- CreateIndex
CREATE INDEX "Session_userId_idx" ON "Session"("userId");

-- CreateIndex
CREATE INDEX "Session_expires_at_idx" ON "Session"("expires_at");

-- CreateIndex
CREATE INDEX "Show_first_air_date_idx" ON "Show"("first_air_date");

-- CreateIndex
CREATE INDEX "Show_popularity_idx" ON "Show"("popularity");

-- CreateIndex
CREATE INDEX "Show_vote_average_idx" ON "Show"("vote_average");

-- CreateIndex
CREATE INDEX "Show_tmdb_id_idx" ON "Show"("tmdb_id");

-- CreateIndex
CREATE INDEX "Show_status_idx" ON "Show"("status");

-- CreateIndex
CREATE INDEX "Show_original_language_idx" ON "Show"("original_language");

-- CreateIndex
CREATE INDEX "Trailer_movieId_idx" ON "Trailer"("movieId");

-- CreateIndex
CREATE INDEX "Trailer_type_idx" ON "Trailer"("type");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_username_idx" ON "User"("username");

-- CreateIndex
CREATE INDEX "User_is_active_idx" ON "User"("is_active");

-- AddForeignKey
ALTER TABLE "MovieGenre" ADD CONSTRAINT "MovieGenre_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieGenre" ADD CONSTRAINT "MovieGenre_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShowGenre" ADD CONSTRAINT "ShowGenre_showId_fkey" FOREIGN KEY ("showId") REFERENCES "Show"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShowGenre" ADD CONSTRAINT "ShowGenre_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieProductionCompany" ADD CONSTRAINT "MovieProductionCompany_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieProductionCompany" ADD CONSTRAINT "MovieProductionCompany_productionCompanyId_fkey" FOREIGN KEY ("productionCompanyId") REFERENCES "ProductionCompany"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShowProductionCompany" ADD CONSTRAINT "ShowProductionCompany_showId_fkey" FOREIGN KEY ("showId") REFERENCES "Show"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShowProductionCompany" ADD CONSTRAINT "ShowProductionCompany_productionCompanyId_fkey" FOREIGN KEY ("productionCompanyId") REFERENCES "ProductionCompany"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShowNetwork" ADD CONSTRAINT "ShowNetwork_showId_fkey" FOREIGN KEY ("showId") REFERENCES "Show"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShowNetwork" ADD CONSTRAINT "ShowNetwork_networkId_fkey" FOREIGN KEY ("networkId") REFERENCES "Network"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieCollection" ADD CONSTRAINT "MovieCollection_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieCollection" ADD CONSTRAINT "MovieCollection_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CastMember" ADD CONSTRAINT "CastMember_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CrewMember" ADD CONSTRAINT "CrewMember_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CrewMember" ADD CONSTRAINT "CrewMember_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRating" ADD CONSTRAINT "UserRating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRating" ADD CONSTRAINT "UserRating_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserRating" ADD CONSTRAINT "UserRating_showId_fkey" FOREIGN KEY ("showId") REFERENCES "Show"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Watchlist" ADD CONSTRAINT "Watchlist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WatchlistItem" ADD CONSTRAINT "WatchlistItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WatchlistItem" ADD CONSTRAINT "WatchlistItem_watchlistId_fkey" FOREIGN KEY ("watchlistId") REFERENCES "Watchlist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WatchlistItem" ADD CONSTRAINT "WatchlistItem_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WatchlistItem" ADD CONSTRAINT "WatchlistItem_showId_fkey" FOREIGN KEY ("showId") REFERENCES "Show"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoriteItem" ADD CONSTRAINT "FavoriteItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoriteItem" ADD CONSTRAINT "FavoriteItem_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoriteItem" ADD CONSTRAINT "FavoriteItem_showId_fkey" FOREIGN KEY ("showId") REFERENCES "Show"("id") ON DELETE CASCADE ON UPDATE CASCADE;
