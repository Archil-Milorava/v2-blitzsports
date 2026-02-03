import { article } from '@/drizzle/schema';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import OptimizedImage from '../ui/OptimizedImage';

interface NewsCardProps {
  history: typeof article.$inferSelect;
}

const stripHtml = (html: string) => html.replace(/<[^>]*>/g, '');

const HistoryCard = ({ history }: NewsCardProps) => {
  const plainContent = stripHtml(history.content);
  const formattedDate = new Date(history.createdAt).toLocaleDateString(
    'en-US',
    {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
    }
  );

  return (
    <Link
      href={`/article/${history.slug}`}
      className="group relative flex h-auto cursor-pointer flex-col overflow-hidden rounded-sm bg-white shadow-sm transition-all duration-300 hover:shadow-md md:h-64 md:flex-row"
    >
      {/* Hover border animation */}
      <div className="bg-primary absolute top-0 right-0 h-full w-0 transition-all duration-300 group-hover:w-1" />

      {/* Image Section */}
      <div className="relative h-56 w-full overflow-hidden transition-transform duration-300 group-hover:scale-[1.02] md:h-full md:w-2/5">
        <OptimizedImage alt={history.title} src={history.coverImage} />
        {history.category && (
          <Badge className="bg-accent absolute top-3 left-3 z-20 text-black/80">
            {history.category}
          </Badge>
        )}
      </div>

      {/* Content Section */}
      <div className="flex w-full flex-col p-5 transition-transform duration-300 group-hover:translate-x-1 md:w-3/5 md:p-6">
        <div className="flex-grow">
          <h2 className="mb-3 line-clamp-2 text-xl font-bold text-gray-900 transition-colors duration-200 group-hover:text-black/80">
            {history.title}
          </h2>
          <p className="mb-4 line-clamp-3 text-sm text-gray-600 transition-colors duration-200 group-hover:text-gray-800 md:text-base">
            {plainContent}
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-gray-100 pt-3">
          <div className="text-xs font-medium text-gray-500 transition-colors duration-200 group-hover:text-gray-700">
            {formattedDate}
          </div>
          <span className="text-sm font-medium text-black transition-all duration-300 group-hover:text-black/90">
            სრულად →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default HistoryCard;
