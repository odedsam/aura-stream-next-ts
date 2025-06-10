/*
  Warnings:

  - You are about to drop the column `created_at` on the `FavoriteItem` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `expires_at` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `ip_address` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `user_agent` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the column `avatar_path` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `is_active` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `is_verified` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Watchlist` table. All the data in the column will be lost.
  - You are about to drop the column `is_public` on the `Watchlist` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Watchlist` table. All the data in the column will be lost.
  - You are about to drop the column `added_at` on the `WatchlistItem` table. All the data in the column will be lost.
  - You are about to drop the column `is_watched` on the `WatchlistItem` table. All the data in the column will be lost.
  - You are about to drop the column `watched_at` on the `WatchlistItem` table. All the data in the column will be lost.
  - You are about to drop the `CastMember` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Collection` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CrewMember` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Episode` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Genre` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Movie` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MovieCollection` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MovieGenre` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MovieProductionCompany` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Network` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Person` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductionCompany` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Review` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Show` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ShowGenre` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ShowNetwork` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ShowProductionCompany` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Trailer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserRating` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `expiresAt` to the `Session` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Watchlist` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CastMember" DROP CONSTRAINT "CastMember_movieId_fkey";

-- DropForeignKey
ALTER TABLE "CastMember" DROP CONSTRAINT "CastMember_personId_fkey";

-- DropForeignKey
ALTER TABLE "CrewMember" DROP CONSTRAINT "CrewMember_movieId_fkey";

-- DropForeignKey
ALTER TABLE "CrewMember" DROP CONSTRAINT "CrewMember_personId_fkey";

-- DropForeignKey
ALTER TABLE "Episode" DROP CONSTRAINT "Episode_showId_fkey";

-- DropForeignKey
ALTER TABLE "FavoriteItem" DROP CONSTRAINT "FavoriteItem_movieId_fkey";

-- DropForeignKey
ALTER TABLE "FavoriteItem" DROP CONSTRAINT "FavoriteItem_showId_fkey";

-- DropForeignKey
ALTER TABLE "MovieCollection" DROP CONSTRAINT "MovieCollection_collectionId_fkey";

-- DropForeignKey
ALTER TABLE "MovieCollection" DROP CONSTRAINT "MovieCollection_movieId_fkey";

-- DropForeignKey
ALTER TABLE "MovieGenre" DROP CONSTRAINT "MovieGenre_genreId_fkey";

-- DropForeignKey
ALTER TABLE "MovieGenre" DROP CONSTRAINT "MovieGenre_movieId_fkey";

-- DropForeignKey
ALTER TABLE "MovieProductionCompany" DROP CONSTRAINT "MovieProductionCompany_movieId_fkey";

-- DropForeignKey
ALTER TABLE "MovieProductionCompany" DROP CONSTRAINT "MovieProductionCompany_productionCompanyId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_movieId_fkey";

-- DropForeignKey
ALTER TABLE "ShowGenre" DROP CONSTRAINT "ShowGenre_genreId_fkey";

-- DropForeignKey
ALTER TABLE "ShowGenre" DROP CONSTRAINT "ShowGenre_showId_fkey";

-- DropForeignKey
ALTER TABLE "ShowNetwork" DROP CONSTRAINT "ShowNetwork_networkId_fkey";

-- DropForeignKey
ALTER TABLE "ShowNetwork" DROP CONSTRAINT "ShowNetwork_showId_fkey";

-- DropForeignKey
ALTER TABLE "ShowProductionCompany" DROP CONSTRAINT "ShowProductionCompany_productionCompanyId_fkey";

-- DropForeignKey
ALTER TABLE "ShowProductionCompany" DROP CONSTRAINT "ShowProductionCompany_showId_fkey";

-- DropForeignKey
ALTER TABLE "Trailer" DROP CONSTRAINT "Trailer_movieId_fkey";

-- DropForeignKey
ALTER TABLE "UserRating" DROP CONSTRAINT "UserRating_movieId_fkey";

-- DropForeignKey
ALTER TABLE "UserRating" DROP CONSTRAINT "UserRating_showId_fkey";

-- DropForeignKey
ALTER TABLE "UserRating" DROP CONSTRAINT "UserRating_userId_fkey";

-- DropForeignKey
ALTER TABLE "WatchlistItem" DROP CONSTRAINT "WatchlistItem_movieId_fkey";

-- DropForeignKey
ALTER TABLE "WatchlistItem" DROP CONSTRAINT "WatchlistItem_showId_fkey";

-- DropIndex
DROP INDEX "FavoriteItem_created_at_idx";

-- DropIndex
DROP INDEX "Session_expires_at_idx";

-- DropIndex
DROP INDEX "User_is_active_idx";

-- DropIndex
DROP INDEX "Watchlist_is_public_idx";

-- DropIndex
DROP INDEX "WatchlistItem_added_at_idx";

-- DropIndex
DROP INDEX "WatchlistItem_is_watched_idx";

-- AlterTable
ALTER TABLE "FavoriteItem" DROP COLUMN "created_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Session" DROP COLUMN "created_at",
DROP COLUMN "expires_at",
DROP COLUMN "ip_address",
DROP COLUMN "user_agent",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "expiresAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "ipAddress" TEXT,
ADD COLUMN     "userAgent" TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "avatar_path",
DROP COLUMN "created_at",
DROP COLUMN "is_active",
DROP COLUMN "is_verified",
DROP COLUMN "updated_at",
ADD COLUMN     "avatarPath" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "isVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Watchlist" DROP COLUMN "created_at",
DROP COLUMN "is_public",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isPublic" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "WatchlistItem" DROP COLUMN "added_at",
DROP COLUMN "is_watched",
DROP COLUMN "watched_at",
ADD COLUMN     "addedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isWatched" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "watchedAt" TIMESTAMP(3);

-- DropTable
DROP TABLE "CastMember";

-- DropTable
DROP TABLE "Collection";

-- DropTable
DROP TABLE "CrewMember";

-- DropTable
DROP TABLE "Episode";

-- DropTable
DROP TABLE "Genre";

-- DropTable
DROP TABLE "Movie";

-- DropTable
DROP TABLE "MovieCollection";

-- DropTable
DROP TABLE "MovieGenre";

-- DropTable
DROP TABLE "MovieProductionCompany";

-- DropTable
DROP TABLE "Network";

-- DropTable
DROP TABLE "Person";

-- DropTable
DROP TABLE "ProductionCompany";

-- DropTable
DROP TABLE "Review";

-- DropTable
DROP TABLE "Show";

-- DropTable
DROP TABLE "ShowGenre";

-- DropTable
DROP TABLE "ShowNetwork";

-- DropTable
DROP TABLE "ShowProductionCompany";

-- DropTable
DROP TABLE "Trailer";

-- DropTable
DROP TABLE "UserRating";

-- CreateTable
CREATE TABLE "SavedItem" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "movieId" INTEGER,
    "showId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SavedItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "idx_saved_user" ON "SavedItem"("userId");

-- CreateIndex
CREATE INDEX "idx_saved_movie" ON "SavedItem"("movieId");

-- CreateIndex
CREATE INDEX "idx_saved_show" ON "SavedItem"("showId");

-- CreateIndex
CREATE UNIQUE INDEX "SavedItem_userId_movieId_key" ON "SavedItem"("userId", "movieId");

-- CreateIndex
CREATE UNIQUE INDEX "SavedItem_userId_showId_key" ON "SavedItem"("userId", "showId");

-- CreateIndex
CREATE INDEX "idx_favorite_created_at" ON "FavoriteItem"("createdAt");

-- CreateIndex
CREATE INDEX "idx_session_expires_at" ON "Session"("expiresAt");

-- CreateIndex
CREATE INDEX "idx_user_is_active" ON "User"("isActive");

-- CreateIndex
CREATE INDEX "idx_watchlist_is_public" ON "Watchlist"("isPublic");

-- CreateIndex
CREATE INDEX "idx_watchlistitem_is_watched" ON "WatchlistItem"("isWatched");

-- CreateIndex
CREATE INDEX "idx_watchlistitem_added_at" ON "WatchlistItem"("addedAt");

-- AddForeignKey
ALTER TABLE "SavedItem" ADD CONSTRAINT "SavedItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "FavoriteItem_movieId_idx" RENAME TO "idx_favorite_movie";

-- RenameIndex
ALTER INDEX "FavoriteItem_showId_idx" RENAME TO "idx_favorite_show";

-- RenameIndex
ALTER INDEX "FavoriteItem_userId_idx" RENAME TO "idx_favorite_user";

-- RenameIndex
ALTER INDEX "Session_userId_idx" RENAME TO "idx_session_user";

-- RenameIndex
ALTER INDEX "User_email_idx" RENAME TO "idx_user_email";

-- RenameIndex
ALTER INDEX "User_username_idx" RENAME TO "idx_user_username";

-- RenameIndex
ALTER INDEX "Watchlist_name_idx" RENAME TO "idx_watchlist_name";

-- RenameIndex
ALTER INDEX "Watchlist_userId_idx" RENAME TO "idx_watchlist_user";

-- RenameIndex
ALTER INDEX "WatchlistItem_movieId_idx" RENAME TO "idx_watchlistitem_movie";

-- RenameIndex
ALTER INDEX "WatchlistItem_showId_idx" RENAME TO "idx_watchlistitem_show";

-- RenameIndex
ALTER INDEX "WatchlistItem_userId_idx" RENAME TO "idx_watchlistitem_user";

-- RenameIndex
ALTER INDEX "WatchlistItem_watchlistId_idx" RENAME TO "idx_watchlistitem_watchlist";
