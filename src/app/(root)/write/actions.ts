'use server'

import { prisma } from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export const makePost = async (formData: FormData) => {
  try {
    const title = formData.get('title')!.toString()
    const content =
      formData.get('content')?.toString() || 'Default content here.'
    const category = formData.get('category')?.toString() || 'General'
    const badge =
      formData.get('badge')?.toString() === 'HISTORY' ? 'HISTORY' : 'NEWS'

    await new Promise((res) => setTimeout(res, 3000))

    await prisma.article.create({
      data: {
        title,
        content,
        category,
        badge,
        imageUrl: 'https://via.placeholder.com/600x400',
        authorId: '86b8bc17-c337-4bc5-89aa-0e4630065e56',
      },
    })

    revalidatePath('/')
  } catch (err) {
    console.error('Error creating article:', err)
    throw new Error('Failed to create article')
  }
  redirect('/')
}
