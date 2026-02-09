'use server';
import { db } from '@/drizzle/db';
import { article, user } from '@/drizzle/schema';
import { auth } from '@/lib/auth';
import { count, desc, eq } from 'drizzle-orm';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { toast } from 'sonner';

export const getCurrentUserData = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) throw new Error('Not authorized');

  try {
    const currentUser = await db.query.user.findFirst({
      where: eq(user.id, session.user.id),
      with: {
        articles: {
          orderBy: [desc(article.createdAt)],
          limit: 10,
        },
      },
    });

    if (!currentUser) throw new Error('User not found');

    return currentUser;
  } catch (error) {
    return null;
  }
};

export const getArticlesByUserId = async (page: number = 1) => {
  const PAGE_SIZE = 10;
  const offset = (page - 1) * PAGE_SIZE;

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) throw new Error('Not authorized');

  try {
    const userArticles = await db
      .select()
      .from(article)
      .where(eq(article.authorId, session.user.id))
      .orderBy(desc(article.createdAt))
      .limit(PAGE_SIZE)
      .offset(offset);

    const [totalCount] = await db
      .select({ count: count() })
      .from(article)
      .where(eq(article.authorId, session.user.id));

    const totalPages = Math.ceil(totalCount.count / PAGE_SIZE);

    return {
      data: userArticles,
      metadata: {
        currentPage: page,
        totalPages: totalPages,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
      },
    };
  } catch (error) {
    console.error('Error fetching articles:', error);
    return { data: [], metadata: { currentPage: 1, totalPages: 0 } };
  }
};

export const handleSignOut = async () => {
  try {
    await auth.api.signOut({
      headers: await headers(),
    });
    toast.success('Logged out');
    redirect('/');
  } catch (error) {
    redirect('/');
  }
};
