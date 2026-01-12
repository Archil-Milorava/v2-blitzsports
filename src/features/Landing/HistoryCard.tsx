import getPlainTextExcerpt from '@/lib/getPlainTextExcerpt'
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
      className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row h-auto md:h-52 group cursor-pointer relative border border-gray-200"
    >
      {/* Right-side accent border on hover */}
      <div className="absolute right-0 top-0 h-full w-0 bg-[#67206E] transition-all duration-300 group-hover:w-1.5" />

      {/* Image Section - Takes 1/3 of the width on desktop */}
      <div className="relative w-full md:w-1/3 h-48 md:h-full overflow-hidden">
        <img
          src={imageUrl || 'https://via.placeholder.com/800x450?text=History'}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute top-2 left-2 bg-[#DDF203] text-black text-[10px] px-2 py-1 rounded font-bold uppercase z-10">
          {category || 'ისტორია'}
        </span>
      </div>

      {/* Content Section - Takes 2/3 of the width on desktop */}
      <div className="flex flex-col p-5 md:px-8 md:py-4 w-full md:w-2/3 justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-[#67206E] transition-colors duration-200">
            {title}
          </h2>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 md:line-clamp-3">
            {getPlainTextExcerpt(content, 180)}
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-gray-100 pt-3">
          <div className="text-xs text-gray-400 font-medium">
            {formattedDate}
          </div>
          <span className="text-[#67206E] font-bold text-sm group-hover:translate-x-1 transition-transform duration-300">
            კითხვის გაგრძელება →
          </span>
        </div>
      </div>
    </Link>
  )
}

export default HistoryCard