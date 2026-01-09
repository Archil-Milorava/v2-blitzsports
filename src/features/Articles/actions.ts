import { prisma } from '@/lib/db'

export const getNews = async () => {
  try {
    const articles = await prisma.article.findMany({
      where: { badge: 'NEWS' },
    })

    return articles
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
  }
}

export const getStories = async () => {
  try {
    const articles = await prisma.article.findMany({
      where: { badge: 'HISTORY' },
    })

    return articles
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
  }
}
