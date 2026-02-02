import { article } from '@/drizzle/schema';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '../ui/badge';

type NewsCardProp = {
  newsItem: typeof article.$inferSelect;
  variant?: 'hero' | 'default';
};

const stripHtml = (html: string) => html.replace(/<[^>]*>/g, '');

const NewsCard = ({ newsItem, variant = 'default' }: NewsCardProp) => {
  const plainContent = stripHtml(newsItem.content);
  const formattedDate = new Date(newsItem.createdAt).toLocaleDateString(
    'ka-GE'
  );
  const isHero = variant === 'hero';

  return (
    <Link
      href={`/news/${newsItem.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-sm bg-black transition-all hover:ring-2 hover:ring-white/20"
    >
      {/* Category Badge */}
      {newsItem.category && (
        <Badge className="bg-accent absolute top-3 left-3 z-20 text-black/80">
          {newsItem.category}
        </Badge>
      )}

      {/* Image Container */}
      <div
        className={`relative w-full overflow-hidden ${isHero ? 'aspect-16/10 h-full' : 'aspect-video'}`}
      >
        <Image
          alt={newsItem.title}
          src={newsItem.coverImage || '/images/placeholder.jpg'}
          fill
          priority={isHero}
          sizes={isHero ? '100vw' : '(max-width: 768px) 100vw, 33vw'}
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* REINFORCED GRADIENT: Higher opacity and higher coverage */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/30 to-transparent" />
      </div>

      {/* Text Overlay */}
      <div className="absolute bottom-0 z-20 flex w-full flex-col gap-1 p-4 text-white md:p-6">
        <div className="flex items-center gap-2">
          <span className="bg-accent h-1 w-6" />
          <small className="text-[10px] tracking-widest uppercase opacity-70">
            {formattedDate}
          </small>
        </div>

        <h2
          className={`leading-tight font-bold drop-shadow-md ${
            isHero ? 'text-2xl md:text-4xl' : 'text-lg'
          }`}
        >
          {newsItem.title}
        </h2>

        {isHero && (
          <p className="mt-2 line-clamp-3 max-w-[90%] text-sm opacity-80 md:text-base">
            {plainContent}
          </p>
        )}
      </div>
    </Link>
  );
};

export default NewsCard;
