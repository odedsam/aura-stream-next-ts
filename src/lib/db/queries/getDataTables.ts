// src/lib/db/queries/getDataTables.ts

import { prisma } from '@/lib/prisma';

// Recursively convert BigInt to string
function convertBigInts(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map(convertBigInts);
  }
  if (obj && typeof obj === 'object') {
    const newObj: Record<string, any> = {};
    for (const key in obj) {
      const value = obj[key];
      newObj[key] = typeof value === 'bigint' ? value.toString() : convertBigInts(value);
    }
    return newObj;
  }
  return obj;
}

export async function getDataTables() {
  try {
    const tableNames: { tablename: string }[] = await prisma.$queryRaw`
      SELECT tablename FROM pg_tables WHERE schemaname = 'public';
    `;

    const dataTables: Record<string, any[]> = {};

    for (const { tablename } of tableNames) {
      const tableData = await prisma.$queryRawUnsafe<any[]>(`SELECT * FROM "${tablename}"`);
      dataTables[tablename] = convertBigInts(tableData);
    }

    console.log('📦 All table data:\n', JSON.stringify(dataTables, null, 2));
    return dataTables;
  } catch (error) {
    console.error('❌ Failed to fetch table data:', error);
    throw error;
  }
}
