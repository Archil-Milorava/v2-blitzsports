'use client'

import { useEffect, useState } from 'react'
import { getArticlesByTitle } from '../Landing/actions'
import { Article } from '../../../generated/prisma/browser'

const SearchArticles = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [searchInput, setSearchInput] = useState<string | null>('')
  const [articles, setArticles] = useState<Article[] | null>([])

  useEffect(() => {
    const debounceArticles = setTimeout(async () => {
      try {
        if (searchInput?.trim()) {
          setLoading(true)
          const articles = await getArticlesByTitle(searchInput)
          setArticles(articles)
          setLoading(false)
        }
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message)
        }
      }
    }, 500)
    return () => clearTimeout(debounceArticles)
  }, [searchInput])

  return (
    <div className="felx flex-col gap-1">
      <input
        className="text-white"
        type="text"
        name="seach"
        placeholder="search for arTcile"
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <div className='absolute  top-16 right-10 max-w-64 flex flex-col gap-2'>
        {loading ? (
          <div>loading...</div>
        ) : (
          <div className=''>
            {articles ? (
              articles.map((article) => (
                <div className='bg-red-400' key={article.id}>{article.title}</div>
              ))
            ) : (
              <div>article not found</div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchArticles
