import { Button } from '@/components/ui/button'
import { getArticles } from '@/features/Articles/actions'

const Page = async () => {
  // 1. Fetch the data directly
  const articles = await getArticles()

  
  return (
    <div className="p-8 h-[200vh] bg-red-300">
      <h1 className="text-2xl font-bold mb-4">Articles</h1>

      <div className="space-y-4 mb-6">
        {/* 2. Map through the data */}
        {articles?.map((article) => (
          <>
            <div key={article.id} className="p-4 border rounded shadow-sm">
              {article.title}
            </div>
            <div>{article.imageUrl}</div>
          </>
        ))}

        {/* Handle empty state */}
        {articles?.length === 0 && <p>No articles found.</p>}
      </div>

      <Button>Refresh List</Button>
    </div>
  )
}

export default Page
