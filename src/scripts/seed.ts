import { fetchMovies } from './fetchMovies';
import { fetchShows } from './fetchShows';

// Configuration constants
const SEED_CONFIG = {
  TOTAL_PAGES: 5,
  DELAY_BETWEEN_REQUESTS_MS: 1000,
  MAX_RETRIES: 3,
  RETRY_DELAY_MS: 2000,
} as const;

/**
 * Creates a delay for the specified number of milliseconds
 * @param ms - Milliseconds to delay
 * @returns Promise that resolves after the delay
 */
const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Fetches data for a single page with retry logic
 * @param fetchFn - Function to fetch data
 * @param page - Page number to fetch
 * @param type - Type of content being fetched (for logging)
 */
async function fetchWithRetry(
  fetchFn: (page: number) => Promise<any>,
  page: number,
  type: string
): Promise<void> {
  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= SEED_CONFIG.MAX_RETRIES; attempt++) {
    try {
      console.log(`🎬 Fetching ${type} page ${page} (attempt ${attempt})`);
      await fetchFn(page);
      console.log(`✅ Successfully fetched ${type} page ${page}`);
      return;
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      console.warn(`⚠️  Failed to fetch ${type} page ${page} (attempt ${attempt}): ${lastError.message}`);

      if (attempt < SEED_CONFIG.MAX_RETRIES) {
        console.log(`⏳ Retrying in ${SEED_CONFIG.RETRY_DELAY_MS}ms...`);
        await delay(SEED_CONFIG.RETRY_DELAY_MS);
      }
    }
  }

  throw new Error(`Failed to fetch ${type} page ${page} after ${SEED_CONFIG.MAX_RETRIES} attempts: ${lastError?.message}`);
}

/**
 * Seeds the database with movies and TV shows data
 */
async function seedDatabase(): Promise<void> {
  console.log('🚀 Starting database seeding process...');
  console.log(`📊 Configuration: ${SEED_CONFIG.TOTAL_PAGES} pages, ${SEED_CONFIG.DELAY_BETWEEN_REQUESTS_MS}ms delay`);

  const startTime = Date.now();
  let successfulPages = 0;
  let failedPages = 0;

  try {
    for (let page = 1; page <= SEED_CONFIG.TOTAL_PAGES; page++) {
      try {
        // Fetch movies for current page
        await fetchWithRetry(fetchMovies, page, 'movies');
        await delay(SEED_CONFIG.DELAY_BETWEEN_REQUESTS_MS);

        // Fetch shows for current page
        await fetchWithRetry(fetchShows, page, 'shows');

        successfulPages++;

        // Add delay between pages (except for the last page)
        if (page < SEED_CONFIG.TOTAL_PAGES) {
          await delay(SEED_CONFIG.DELAY_BETWEEN_REQUESTS_MS);
        }

        console.log(`📄 Completed page ${page}/${SEED_CONFIG.TOTAL_PAGES}`);
      } catch (error) {
        failedPages++;
        console.error(`❌ Failed to process page ${page}:`, error);

        // Continue with next page instead of stopping completely
        console.log('📍 Continuing with next page...');
      }
    }

    const endTime = Date.now();
    const duration = Math.round((endTime - startTime) / 1000);

    console.log('\n🎉 Seeding process completed!');
    console.log(`📈 Statistics:`);
    console.log(`   ✅ Successful pages: ${successfulPages}/${SEED_CONFIG.TOTAL_PAGES}`);
    console.log(`   ❌ Failed pages: ${failedPages}/${SEED_CONFIG.TOTAL_PAGES}`);
    console.log(`   ⏱️  Total duration: ${duration}s`);

    if (failedPages > 0) {
      console.warn(`⚠️  Warning: ${failedPages} pages failed to process completely`);
    }

  } catch (error) {
    const endTime = Date.now();
    const duration = Math.round((endTime - startTime) / 1000);

    console.error('\n💥 Seeding process failed!');
    console.error(`❌ Error after ${duration}s:`, error);
    throw error;
  }
}

/**
 * Gracefully handles process termination
 */
function setupGracefulShutdown(): void {
  const signals: NodeJS.Signals[] = ['SIGINT', 'SIGTERM'];

  signals.forEach((signal) => {
    process.on(signal, () => {
      console.log(`\n🛑 Received ${signal}, shutting down gracefully...`);
      process.exit(0);
    });
  });
}

// Main execution
async function main(): Promise<void> {
  setupGracefulShutdown();

  try {
    await seedDatabase();
    console.log('🏁 Process completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('💀 Fatal error during seeding:', error);
    process.exit(1);
  }
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('🚨 Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('🚨 Uncaught Exception:', error);
  process.exit(1);
});

// Start the seeding process
main();
