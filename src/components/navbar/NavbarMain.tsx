'use client';
import clsx from 'clsx';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';
import { authClient } from '@/lib/auth-client';

export type TNavbaItem = {
  label: string;
  link: string;
};

const navbarItems: TNavbaItem[] = [
  {
    label: 'ფეხბურთი',
    link: '/football',
  },
  {
    label: 'MMA',
    link: '/mma',
  },
  {
    label: 'ფორმულა 1',
    link: '/formula1',
  },
  {
    label: 'სხვა...',
    link: '/other',
  },
];

const NavbarMain = () => {
  const { data: session, isPending } = authClient.useSession();

  return (
    <div
      className={clsx(
        'h-14 w-full bg-green-300 transition-all duration-300',
        'lg:bg-green-700'
      )}
    >
      <div className="hidden h-full w-full lg:block">
        <NavbarDesktop
          navbarItems={navbarItems}
          user={session?.user}
          isLoading={isPending}
        />
      </div>

      <div className="block h-full w-full lg:hidden">
        <NavbarMobile
          navbarItems={navbarItems}
          user={session?.user}
          isLoading={isPending}
        />
      </div>
    </div>
  );
};

export default NavbarMain;
