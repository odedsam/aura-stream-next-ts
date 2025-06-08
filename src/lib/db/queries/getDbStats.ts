import { prisma } from '@/lib/prisma';

interface DbSizeResult {
  size: string;
  size_bytes: bigint;
}

interface TableSizeResult {
  tablename: string;
  size: string;
  size_bytes: bigint;
}

interface IndexSizeResult {
  size: string;
}

export async function getDbStats() {
  await prisma.$queryRaw`SELECT 1`;

  const dbSize = await prisma.$queryRaw<DbSizeResult[]>`
    SELECT
      pg_size_pretty(pg_database_size(current_database())) as size,
      pg_database_size(current_database()) as size_bytes
  `;

  const tableSizes = await prisma.$queryRaw<TableSizeResult[]>`
    SELECT
      tablename,
      pg_size_pretty(pg_total_relation_size(quote_ident(schemaname)||'.'||quote_ident(tablename))) as size,
      pg_total_relation_size(quote_ident(schemaname)||'.'||quote_ident(tablename)) as size_bytes
    FROM pg_tables
    WHERE schemaname = 'public'
    ORDER BY pg_total_relation_size(quote_ident(schemaname)||'.'||quote_ident(tablename)) DESC
  `;

  const indexSize = await prisma.$queryRaw<IndexSizeResult[]>`
    SELECT pg_size_pretty(SUM(pg_relation_size(indexrelid))) as size
    FROM pg_index
    JOIN pg_class ON pg_class.oid = pg_index.indexrelid
    WHERE pg_class.relnamespace = (SELECT oid FROM pg_namespace WHERE nspname = 'public')
  `;

  const totalTableSize = tableSizes.reduce((sum, table) => sum + Number(table.size_bytes), 0);

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'kB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  const tablesWithPercentages = tableSizes.map((table) => ({
    tablename: table.tablename,
    size: table.size,
    percentage: ((Number(table.size_bytes) / totalTableSize) * 100).toFixed(1) + '%',
  }));

  return {
    overview: {
      database: 'mydb',
      totalSize: dbSize[0]?.size || 'Unknown',
      totalSizeBytes: Number(dbSize[0]?.size_bytes) || 0,
      totalTablesSize: formatBytes(totalTableSize),
      totalTablesSizeBytes: totalTableSize,
      indexSize: indexSize[0]?.size || 'Unknown',
      tableCount: tableSizes.length,
    },
    breakdown: {
      allTables: tablesWithPercentages,
      summary: {
        episodeData: tableSizes.find((t) => t.tablename === 'Episode')?.size || 'N/A',
        personData: tableSizes.find((t) => t.tablename === 'Person')?.size || 'N/A',
        movieData: tableSizes.find((t) => t.tablename === 'Movie')?.size || 'N/A',
        showData: tableSizes.find((t) => t.tablename === 'Show')?.size || 'N/A',
      },
    },
    tmdbStats: {
      allContentTables: tablesWithPercentages,
      totalCalculated: {
        allTablesSize: formatBytes(totalTableSize),
        allTablesSizeBytes: totalTableSize,
        tableCount: tableSizes.length,
      },
    },
  };
}
