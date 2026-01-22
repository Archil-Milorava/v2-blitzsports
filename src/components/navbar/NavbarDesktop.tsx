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
  const { id, image, name } = user;

  return (
    <div className="flex h-full w-full items-center justify-around">
      {/* logo */}
      <h1 className="bg-primary text-accent hover:bg-accent hover:text-primary max-w-full cursor-pointer rounded-xs px-2 py-0.5 text-3xl font-extrabold tracking-widest transition-all duration-300">
        BLITZ
      </h1>

      {/* categories */}
      <ul className="flex gap-5">
        {navbarItems.map((navItem) => (
          <Link
            className="cursor-pointer font-semibold hover:opacity-80"
            href={navItem.link}
            key={navItem.link}
          >
            {navItem.label}
          </Link>
        ))}
      </ul>

      {id ? (
        <Link href={`/profile/${id}`}>
          <Avatar className="cursor-pointer hover:opacity-90">
            <AvatarImage src={image || 'https://github.com/shadcn.png'} />
            <AvatarFallback>
              <Skeleton className="h-full w-full" />
            </AvatarFallback>
          </Avatar>
        </Link>
      ) : (
        <Link href={`/sing-in`}>
          <Avatar className="cursor-pointer hover:opacity-90">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>b </AvatarFallback>
          </Avatar>
        </Link>
      )}
    </div>
  );
};

export default NavbarDesktop;
