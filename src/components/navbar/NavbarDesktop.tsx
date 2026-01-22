import Link from 'next/link';
import { TNavbaItem } from './NavbarMain';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Skeleton } from '../ui/skeleton';

type NavbarDesktopProps = {
  navbarItems: TNavbaItem[];
  user?: TCurrentUser | null;
  isLoading: boolean;
};

const NavbarDesktop = ({
  navbarItems,
  user,
  isLoading,
}: NavbarDesktopProps) => {
  return (
    <div className="flex h-full w-full items-center justify-around">
      {/* logo */}
      <h1 className="bg-primary text-accent hover:bg-accent hover:text-primary max-w-full cursor-pointer rounded-xs px-2 py-0.5 text-xl font-extrabold tracking-widest transition-all duration-300">
        BLITZ
      </h1>

      {/* categories */}
      <ul className="flex gap-5 text-white">
        {navbarItems.map((navItem) => (
          <Link
            className="cursor-pointer font-semibold transition-all duration-300 hover:opacity-80"
            href={navItem.link}
            key={navItem.link}
          >
            {navItem.label}
          </Link>
        ))}
      </ul>

      {isLoading ? (
        <Skeleton className="h-8 w-8 rounded-full" />
      ) : user ? (
        <Link href="/profile">
          <Avatar className="cursor-pointer hover:opacity-90">
            <AvatarImage src={user.image || 'https://github.com/shadcn.png'} />
            <AvatarFallback>
              {user.name ? user.name.slice(0, 2).toUpperCase() : 'U'}
            </AvatarFallback>
          </Avatar>
        </Link>
      ) : (
        <Link href={`/sign-in`}>
          <Avatar className="cursor-pointer hover:opacity-90">
            <AvatarImage src="https://github.com/shadcn.png" />
          </Avatar>
        </Link>
      )}
    </div>
  );
};

export default NavbarDesktop;
