'use server'
import { prisma } from '@/lib/db'
import { revalidatePath, unstable_cache } from 'next/cache'

export const getNews = unstable_cache(
  async () => {
    return prisma.article.findMany({
      where: { badge: 'NEWS' },
      orderBy: { createdAt: 'desc' },
      take: 6,
    })
  },
  ['landing-news'],
  { revalidate: 600 }
)

export const getStories = unstable_cache(
  async () => {
    return prisma.article.findMany({
      where: { badge: 'HISTORY' },
      orderBy: { createdAt: 'desc' },
      take: 3,
    })
  },
  ['landing-stories'],
  { revalidate: 3600 }
)

export const getArticlesByTitle = async (titleInput: string | null) => {
  if (!titleInput) return null

  const articlesByTitle = await prisma.article.findMany({
    where: {
      title: {
        contains: titleInput,
        mode: 'insensitive',
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 5,
  })

  return articlesByTitle
}

export const createArticles = async (formData: FormData) => {
  try {
    const title = formData.get('title') as string
    const content = formData.get('content') as string
    const category = formData.get('category') as string
    const badge = formData.get('badge') as 'NEWS' | 'HISTORY'
    const authorId = formData.get('authorId') as string

    await prisma.article.create({
      data: {
        title,
        content,
        category,
        badge,
        authorId,
        imageUrl: 'https://via.placeholder.com/150',
      },
    })

    revalidatePath('/')
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
  }
}
