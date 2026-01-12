import { prisma } from '@/lib/db';
import fs from 'fs';
import path from 'path';


async function run() {
  try {
    // 1. Load the JSON
    const dataPath = path.join(process.cwd(), 'articles.json');
    const fileContents = fs.readFileSync(dataPath, 'utf8');
    const articles = JSON.parse(fileContents);

    console.log(`🚀 Found ${articles.length} articles. Starting import...`);

    // 2. Transform the data
    // We remove 'id' so Prisma generates a UUID automatically
    // We convert date strings to actual Date objects
    const formattedArticles = articles.map((article: any) => ({
      title: article.title,
      content: article.content,
      imageUrl: article.imageUrl,
      badge: article.badge,
      category: article.category || "",
      authorId: article.authorId,
      createdAt: new Date(article.createdAt),
      updatedAt: new Date(article.updatedAt),
    }));

    // 3. Insert into DB
    const result = await prisma.article.createMany({
      data: formattedArticles,
      skipDuplicates: true,
    });

    console.log(`✅ Success! Inserted ${result.count} articles.`);
  } catch (error) {
    console.error('❌ Migration failed:');
    if (error instanceof Error) {
      console.error(error.message);
    }
  } finally {
    await prisma.$disconnect();
  }
}

run();