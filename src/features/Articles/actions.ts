import { prisma } from '@/lib/bd'

export const getArticles = async () => {
  try {
    const articles = await prisma.article.findMany()

    return articles
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
  }
}



export const makeArticle = async () => {
  try {

  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
  }
}
