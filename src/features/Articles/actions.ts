"use server" 
import { prisma } from '@/lib/db'
import { revalidatePath } from 'next/cache'

export const getNews = async () => {
  try {
    const newsLanding = await prisma.article.findMany({
      where: { badge: 'NEWS' },
      orderBy: {createdAt: "desc"},
      take: 6
    })

    if (!newsLanding || newsLanding.length === 0) throw new Error("statia ver moidzebna")

    return newsLanding
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
  }
}

export const getStories = async () => {
  try {

    const storiesLanding = await prisma.article.findMany({
      where: { badge: 'HISTORY' },
      orderBy: {createdAt: "desc"},
      take: 3
    })

    if (!storiesLanding) throw new Error()

    return storiesLanding
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
        imageUrl: "https://via.placeholder.com/150", 
      },
    })

    
    revalidatePath('/') 
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    }
  }
}