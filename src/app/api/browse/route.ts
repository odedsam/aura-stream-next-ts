import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

interface MovieMetadata {
  title?: string;

}

interface MovieItem {
  id: string;
  metadata?: MovieMetadata;
}

async function getMoviesData(): Promise<MovieItem[]> {
  const moviesFolderPath = path.join(process.cwd(), 'src', 'data', 'tv-api', 'Movie');

  try {
    const movieDirectories = await fs.readdir(moviesFolderPath, { withFileTypes: true });
    const moviesData: MovieItem[] = [];

    for (const dirent of movieDirectories) {
      if (dirent.isDirectory() && dirent.name.startsWith('tt')) {
        const movieId = dirent.name;
        const metadataFilePath = path.join(moviesFolderPath, movieId, `Title ${movieId} with par...json`);

        try {
          const metadataFileContent = await fs.readFile(metadataFilePath, 'utf-8');
          const metadata: MovieMetadata = JSON.parse(metadataFileContent);
          moviesData.push({ id: movieId, metadata });
        } catch (metadataError) {
          console.error(`Failed to read metadata for ${movieId}:`, metadataError);
          moviesData.push({ id: movieId });
        }
      }
    }

    return moviesData;
  } catch (error) {
    console.error('Failed to read movies directory:', error);
    return [];
  }
}

export async function GET() {
  const movies = await getMoviesData();
  return NextResponse.json({ movies });
}
