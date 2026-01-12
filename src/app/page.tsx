import { Suspense } from 'react'
import SectionDevider from '@/components/ui/SectionDevider'
import { getNews, getStories } from '@/features/Landing/actions'
import HistoryCard from '@/features/Landing/HistoryCard'
import NewsCard from '@/features/Landing/NewsCard'
import StoriesSkeleton from '@/features/Landing/StoriesSkeleton'
import NewsSekelton from '@/features/Landing/NewsSekelton'
import LandingNotFound from '@/features/Landing/LandingNotFound'

const NewsList = async () => {
  const news = await getNews()
  return (
    <div className="my-4 grid w-full grid-cols-1 gap-8 px-2 sm:grid-cols-2 lg:grid-cols-3">
      {news?.length ? (
        news.map((card) => <NewsCard news_card={card} key={card.id} />)
      ) : (
        <div className="col-span-full">
          <LandingNotFound />
        </div>
      )}
    </div>
  )
}

const StoriesList = async () => {
  const histories = await getStories()
  return (
    <div className="my-4 flex w-full flex-col gap-8 px-2">
      {histories?.length ? (
        histories.map((card) => <HistoryCard news_card={card} key={card.id} />)
      ) : (
        <div className="col-span-full">
          <LandingNotFound />
        </div>
      )}
    </div>
  )
}

const Page = () => {
  return (
    <div className="min-h-screen w-full bg-[#D9D9D9]">
      {/* News Section */}
      <div className="pt-10 lg:px-48">
        <SectionDevider redirectLink="news" redirectText="ახალი ამბები" />
        <Suspense fallback={<NewsSekelton />}>
          <NewsList />
        </Suspense>
      </div>

      {/* Stories Section */}
      <div className="w-full pt-10 lg:px-48">
        <SectionDevider redirectLink="stories" redirectText="ისტორიები" />
        <Suspense fallback={<StoriesSkeleton />}>
          <StoriesList />
        </Suspense>
      </div>
    </div>
  )
}

export default Page
