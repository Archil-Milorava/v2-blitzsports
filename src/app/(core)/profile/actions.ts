import { db } from '@/drizzle/db';
import { article, user } from '@/drizzle/schema';
import { auth } from '@/lib/auth';
import { desc, eq } from 'drizzle-orm';
import { headers } from 'next/headers';

const session = await auth.api.getSession({
  headers: await headers(),
});

export const getCurrentUserData = async () => {
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
    console.error('Error fetching user data:', error);
    return null;
  }
};
