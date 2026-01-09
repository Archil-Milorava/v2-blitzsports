"use server" 
import { prisma } from '@/lib/db'
import { revalidatePath } from 'next/cache'

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
        imageUrl: "https://via.placeholder.com/150", // Placeholder since we're ignoring upload
      },
    })

    // This refreshes the page data immediately
    revalidatePath('/') 
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
  }
}