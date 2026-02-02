import { db } from '@/drizzle/db';
import { article } from '@/drizzle/schema';
import { desc, eq, and } from 'drizzle-orm';

export const getLandingNews = async () => {
  try {
    const news = await db.query.article.findMany({
      where: and(eq(article.softDelete, false), eq(article.badge, 'news')),
      orderBy: [desc(article.createdAt)],
      limit: 6,
    });

    if (!news) throw new Error('No News found');

    return news;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const getLandingHistories = async () => {
  try {
    const histories = await db.query.article.findMany({
      where: and(eq(article.softDelete, false), eq(article.badge, 'history')),
      orderBy: [desc(article.createdAt)],
      limit: 3,
    });

    if (!histories) throw new Error('No News found');

    return histories;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
