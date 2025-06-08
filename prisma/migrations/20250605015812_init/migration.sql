-- CreateTable
CREATE TABLE "Movie" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "overview" TEXT NOT NULL,
    "poster_path" TEXT NOT NULL,
    "backdrop_path" TEXT NOT NULL,
    "release_date" TIMESTAMP(3) NOT NULL,
    "runtime" INTEGER NOT NULL,
    "genres" JSONB NOT NULL,
    "production_companies" JSONB NOT NULL,
    "imdb_id" TEXT NOT NULL,
    "popularity" DOUBLE PRECISION NOT NULL,
    "vote_average" DOUBLE PRECISION NOT NULL,
    "vote_count" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trailer" (
    "id" TEXT NOT NULL,
    "movieId" INTEGER NOT NULL,
    "key" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "site" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Trailer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CastMember" (
    "id" INTEGER NOT NULL,
    "movieId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "character" TEXT NOT NULL,
    "profile_path" TEXT NOT NULL,

    CONSTRAINT "CastMember_pkey" PRIMARY KEY ("id","movieId")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "movieId" INTEGER NOT NULL,
    "author" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "avatar_path" TEXT NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Trailer" ADD CONSTRAINT "Trailer_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CastMember" ADD CONSTRAINT "CastMember_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE CASCADE ON UPDATE CASCADE;
