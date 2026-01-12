import { Suspense } from 'react'
import SectionDevider from '@/components/ui/SectionDevider'
import { getNews, getStories } from '@/features/Articles/actions'
import HistoryCard from '@/features/Articles/HistoryCard'
import NewsCard from '@/features/Articles/NewsCard'
import StoriesSkeleton from '@/features/Landing/StoriesSkeleton'
import NewsSekelton from '@/features/Landing/NewsSekelton'

const NewsList = async () => {
  const news = await getNews()
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-4 px-2">
      {news?.length ? (
        news.map((card) => <NewsCard news_card={card} key={card.id} />)
      ) : (
        <p>{}</p>
      )}
    </div>
  )
}

const StoriesList = async () => {
  const histories = await getStories()
  return (
    <div className="w-full flex flex-col gap-8 my-4 px-2">
      {histories?.length ? (
        histories.map((card) => <HistoryCard news_card={card} key={card.id} />)
      ) : (
        <p>სტატია ვერ მოიძებნა</p>
      )}
    </div>
  )
}

const Page = () => {
  return (
    <div className="bg-[#D9D9D9] min-h-screen w-full">
      {/* News Section */}
      <div className="lg:px-48 pt-10">
        <SectionDevider redirectLink="news" redirectText="ახალი ამბები" />
        <Suspense fallback={<NewsSekelton />}>
          <NewsList />
        </Suspense>
      </div>

      {/* Stories Section */}
      <div className="lg:px-48 pt-10">
        <SectionDevider redirectLink="stories" redirectText="ისტორიები" />
        <Suspense fallback={<StoriesSkeleton />}>
          <StoriesList />
        </Suspense>
      </div>
    </div>
  )
}

export default Page