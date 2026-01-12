import Link from 'next/link'
import { Article } from '../../../generated/prisma/client'

interface NewsCardProps {
  news_card: Article
}

const NewsCard = ({ news_card }: NewsCardProps) => {
  const { id, title, content, imageUrl, category, createdAt } = news_card

  const formattedDate = new Date(createdAt).toLocaleDateString('ka-GE', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  const getPlainTextExcerpt = (text: string, length: number = 100) => {
    // Your Prisma content is @db.Text, if it's not HTML, we don't need the regex
    return text.length > length ? text.substring(0, length) + '...' : text
  }

  return (
    <Link
      href={`/article/${id}`} // Added leading slash for correct routing
      className="group relative bg-[#FFFCF1] rounded-sm overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1 cursor-pointer border border-gray-200"
    >
      {/* Image with gradient overlay */}
      <div className="relative w-full aspect-video overflow-hidden bg-gray-200">
        <img
          src={
            imageUrl || 'https://via.placeholder.com/800x450?text=Sports+News'
          }
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Floating category chip */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 text-[10px] font-bold bg-[#67206E] text-[#DDF203] rounded-full uppercase tracking-widest">
            {category || 'News'}
          </span>
        </div>
      </div>

      {/* Content section */}
      <div className="p-5 flex flex-col flex-grow">
        <span className="text-xs font-medium text-gray-500 mb-2">
          {formattedDate}
        </span>

        <h2 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 leading-tight group-hover:text-[#67206E] transition-colors">
          {title}
        </h2>

        <p className="text-gray-600 text-sm line-clamp-3">
          {getPlainTextExcerpt(content, 120)}
        </p>
      </div>

      {/* Blitz Yellow accent line on hover */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-[#DDF203] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </Link>
  )
}

export default NewsCard
