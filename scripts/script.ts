import { prisma } from '@/lib/db';
import * as fs from 'fs';
import path from 'path';


async function exportData() {
  try {
    console.log('🚀 Starting data export...');

    // 1. Fetch data from Prisma
    const users = await prisma.user.findMany();

    const articles = await prisma.article.findMany();

    // 2. Define export folder
    const exportDir = path.join(__dirname, 'exports');
    if (!fs.existsSync(exportDir)) {
      fs.mkdirSync(exportDir);
    }

    // 3. Write to JSON files
    fs.writeFileSync(
      path.join(exportDir, 'users.json'), 
      JSON.stringify(users, null, 2)
    );

    fs.writeFileSync(
      path.join(exportDir, 'articles.json'), 
      JSON.stringify(articles, null, 2)
    );

    console.log(`✅ Export complete! Files saved in: ${exportDir}`);
  } catch (error) {
    console.error('❌ Error exporting data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

exportData();