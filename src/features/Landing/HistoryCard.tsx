import getPlainTextExcerpt from '@/lib/getPlainTextExcerpt'
import Image from 'next/image'
import Link from 'next/link'
import { Article } from '../../../generated/prisma/browser'

// We name the prop to match what you pass in page.tsx
interface HistoryCardProps {
  news_card: Article
}

const HistoryCard = ({ news_card }: HistoryCardProps) => {
  // 1. Destructure everything from news_card
  const { id, title, content, imageUrl, category, createdAt } = news_card

  // 2. Fix the date variable
  const formattedDate = new Date(createdAt).toLocaleDateString('ka-GE', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <Link
      href={`/article/${id}`}
      className="group relative flex h-auto cursor-pointer flex-col overflow-hidden rounded-sm border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md md:h-52 md:flex-row"
    >
      {/* Right-side accent border on hover */}
      <div className="absolute top-0 right-0 h-full w-0 bg-[#67206E] transition-all duration-300 group-hover:w-1.5" />

      {/* Image Section - Takes 1/3 of the width on desktop */}
      <div className="relative h-48 w-full overflow-hidden md:h-full md:w-1/3">
        <Image
          src={imageUrl || 'https://via.placeholder.com/800x450?text=History'}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          fill
          loading="lazy"
        />
        <span className="absolute top-2 left-2 z-10 rounded bg-[#DDF203] px-2 py-1 text-[10px] font-bold text-black uppercase">
          {category || 'ისტორია'}
        </span>
      </div>

      {/* Content Section - Takes 2/3 of the width on desktop */}
      <div className="flex w-full flex-col justify-between p-5 md:w-2/3 md:px-8 md:py-4">
        <div>
          <h2 className="mb-2 line-clamp-1 text-xl font-bold text-gray-900 transition-colors duration-200 group-hover:text-[#67206E]">
            {title}
          </h2>
          <p className="mb-4 line-clamp-2 text-sm text-gray-600 md:line-clamp-3">
            {getPlainTextExcerpt(content, 180)}
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-gray-100 pt-3">
          <div className="text-xs font-medium text-gray-400">
            {formattedDate}
          </div>
          <span className="text-sm font-bold text-[#67206E] transition-transform duration-300 group-hover:translate-x-1">
            კითხვის გაგრძელება →
          </span>
        </div>
      </div>
    </Link>
  )
}

export default HistoryCard
