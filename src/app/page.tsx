import SectionDevider from '@/components/ui/SectionDevider'
import { getNews, getStories } from '@/features/Articles/actions'
import HistoryCard from '@/features/Articles/HistoryCard'
import NewsCard from '@/features/Articles/NewsCard'

type Props = {}

const page = async (props: Props) => {
  const news = await getNews()
  const histories = await getStories()
  return (
    <div className="bg-[#D9D9D9] min-h-screen w-full">
      {/* news */}
      <div className="lg:px-48 pt-10">
        <SectionDevider redirectLink="news" redirectText="ახალი ამბები" />
        {/* grid */}
        <div className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-4 px-2">
          {news ? (
            news.map((news_card) => (
              <NewsCard news_card={news_card} key={news_card.id} />
            ))
          ) : (
            <p>statia ver moidzebna</p>
          )}
        </div>
      </div>
      {/* stories */}
      <div className="lg:px-48 pt-10">
        <SectionDevider redirectLink="stories" redirectText="ისტორიები" />
        {/* grid */}
        <div className=" w-full flex flex-col gap-8 my-4 px-2 ">
          {histories ? (
            histories.map((histories_card) => (
              <HistoryCard news_card={histories_card} key={histories_card.id} />
            ))
          ) : (
            <p>statia ver moidzebna</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default page
