import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/ui/OptimizedImage';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { CalendarDays, PlusCircle } from 'lucide-react';
import Link from 'next/link';
import { CiLogout } from 'react-icons/ci';
import { getCurrentUserData, handleSignOut } from './actions';
import { ArticleTable } from './components/ArticleTable';

const ProfilePage = async () => {
  const user = await getCurrentUserData();

  return (
    <div className="bg-background flex min-h-screen w-full flex-col gap-8 px-4 py-10 sm:px-10 md:px-14 lg:px-32 xl:px-48">
      {/* Profile Header */}
      <div className="flex flex-col items-center justify-between gap-6 border-b pb-8 sm:flex-row sm:items-start">
        <div className="flex flex-col items-center gap-6 sm:flex-row">
          <Avatar className="border-primary/10 h-24 w-24 border-2">
            <OptimizedImage
              alt={user?.image || 'profile-image'}
              src={user?.image || '/Profile-Image.png'}
              className="object-cover"
            />
          </Avatar>

          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center gap-2 sm:justify-start">
              <h1 className="text-3xl font-bold tracking-tight">
                {user?.name}
              </h1>
              <span className="bg-primary/10 text-primary rounded-full px-2 py-0.5 text-xs font-medium capitalize">
                {user?.role}
              </span>
            </div>

            <div className="text-muted-foreground flex flex-wrap justify-center gap-4 text-sm sm:justify-start">
              <div className="flex items-center gap-1">
                <CalendarDays className="h-4 w-4" />
                <span>
                  Member since{' '}
                  {user?.createdAt.toLocaleDateString('en-GB', {
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
            <form action={handleSignOut}>
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-destructive/10 hover:text-destructive cursor-pointer rounded-full transition-colors"
                type="submit"
              >
                <CiLogout className="text-xl" />
              </Button>
            </form>
          </TooltipTrigger>
          <TooltipContent>
            <p>Log out</p>
          </TooltipContent>
        </Tooltip>
      </div>
      {/* Action Bar */}
      <div className="flex flex-wrap gap-3">
        {user?.canMakeArticle && (
          <Button asChild className="gap-2">
            <Link href="/create-article">
              <PlusCircle className="h-4 w-4" />
              Make Article
            </Link>
          </Button>
        )}
        {user?.canMakeCard && (
          <Button asChild variant="secondary" className="gap-2">
            <Link href="/create-card">
              <PlusCircle className="h-4 w-4" />
              Make Card
            </Link>
          </Button>
        )}
      </div>
      {(user?.articles?.length ?? 0) > 0 && <ArticleTable />}{' '}
    </div>
  );
};

export default ProfilePage;
