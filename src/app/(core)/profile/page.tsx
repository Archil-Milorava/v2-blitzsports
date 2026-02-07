import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/ui/OptimizedImage';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Link from 'next/link';
import { CiLogout } from 'react-icons/ci';
import { CalendarDays, FileText, PlusCircle } from 'lucide-react';

export const mockUsers = {
  id: 'user_7b29a1f4e8c3',
  name: 'Alex Rivera',
  authorName: 'A. Rivera',
  email: 'alex.rivera@example.com',
  emailVerified: true,
  image:
    'https://res.cloudinary.com/deijidv94/image/upload/v1769708731/articles/p73qmqc5tq8hxqpgcfdz.png',
  role: 'admin',
  canEditUser: false,
  canMakeArticle: true,
  canMakeCard: true,
  createdAt: new Date('2024-01-15T10:00:00Z'),
  updatedAt: new Date('2024-01-15T10:00:00Z'),
};

export const mockArticles = [
  {
    id: 'art_001',
    title: 'The Future of Web Development in 2026',
    content:
      'The landscape of web development is shifting rapidly with AI integration...',
    slug: 'future-of-web-dev-2026',
    coverImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    badge: 'news',
    category: 'Technology',
    authorId: 'user_7b29a1f4e8c3',
    softDelete: false,
    deletedAt: null,
    createdAt: new Date('2026-02-01T09:00:00Z'),
    updatedAt: new Date('2026-02-01T09:00:00Z'),
  },
  {
    id: 'art_002',
    title: 'Mastering TypeScript Schemas',
    content:
      'Defining your database schema with Drizzle ORM provides unparalleled type safety...',
    slug: 'mastering-typescript-schemas',
    coverImage: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea',
    badge: 'news',
    category: 'Programming',
    authorId: 'user_7b29a1f4e8c3',
    softDelete: false,
    deletedAt: null,
    createdAt: new Date('2026-02-03T14:20:00Z'),
    updatedAt: new Date('2026-02-04T10:15:00Z'),
  },
  {
    id: 'art_003',
    title: 'Designing for Modern Interfaces',
    content:
      'A deep dive into why minimalist design still reigns supreme in the current era...',
    slug: 'designing-modern-interfaces',
    coverImage: 'https://images.unsplash.com/photo-1586717791821-3f44a563dc4c',
    badge: 'news',
    category: 'Design',
    authorId: 'user_7b29a1f4e8c3',
    softDelete: false,
    deletedAt: null,
    createdAt: new Date('2026-02-05T18:45:00Z'),
    updatedAt: new Date('2026-02-05T18:45:00Z'),
  },
];

const ProfilePage = () => {
  const { name, image, role, canMakeArticle, canMakeCard, createdAt } =
    mockUsers;

  return (
    <div className="bg-background flex min-h-screen w-full flex-col gap-8 px-4 py-10 sm:px-10 md:px-14 lg:px-32 xl:px-48">
      {/* Profile Header */}
      <div className="flex flex-col items-center justify-between gap-6 border-b pb-8 sm:flex-row sm:items-start">
        <div className="flex flex-col items-center gap-6 sm:flex-row">
          <Avatar className="border-primary/10 h-24 w-24 border-2">
            <OptimizedImage
              alt={name}
              src={image || ''}
              className="object-cover"
            />
          </Avatar>

          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center gap-2 sm:justify-start">
              <h1 className="text-3xl font-bold tracking-tight">{name}</h1>
              <span className="bg-primary/10 text-primary rounded-full px-2 py-0.5 text-xs font-medium capitalize">
                {role}
              </span>
            </div>

            <div className="text-muted-foreground flex flex-wrap justify-center gap-4 text-sm sm:justify-start">
              <div className="flex items-center gap-1">
                <FileText className="h-4 w-4" />
                <span>{mockArticles.length} Articles</span>
              </div>
              <div className="flex items-center gap-1">
                <CalendarDays className="h-4 w-4" />
                <span>
                  Member since{' '}
                  {createdAt.toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="hover:bg-destructive/10 hover:text-destructive rounded-full transition-colors"
            >
              <CiLogout className="text-xl" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Log out</p>
          </TooltipContent>
        </Tooltip>
      </div>

      {/* Action Bar */}
      <div className="flex flex-wrap gap-3">
        {canMakeArticle && (
          <Button asChild className="gap-2">
            <Link href="/create-article">
              <PlusCircle className="h-4 w-4" />
              Make Article
            </Link>
          </Button>
        )}
        {canMakeCard && (
          <Button asChild variant="secondary" className="gap-2">
            <Link href="/create-card">
              <PlusCircle className="h-4 w-4" />
              Make Card
            </Link>
          </Button>
        )}
      </div>

      {/* Articles Grid */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Your Recent Articles</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockArticles.map((art) => (
            <div
              key={art.id}
              className="group bg-card overflow-hidden rounded-xl border transition-all hover:shadow-md"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <img
                  src={art.coverImage}
                  alt={art.title}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-primary text-[10px] font-bold tracking-wider uppercase">
                    {art.category}
                  </span>
                  <span className="text-muted-foreground text-[10px]">
                    {art.createdAt.toLocaleDateString()}
                  </span>
                </div>
                <h3 className="line-clamp-2 cursor-pointer leading-tight font-bold group-hover:underline">
                  {art.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
