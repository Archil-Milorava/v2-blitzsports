'use client';

import { Menu, X, LogOut } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { TNavbaItem } from './NavbarMain';
import clsx from 'clsx';
import { Separator } from '../ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Skeleton } from '../ui/skeleton';
import { authClient } from '@/lib/auth-client';
import { toast } from 'sonner';

type NavbarMobileProps = {
  navbarItems: TNavbaItem[];
  user?: TCurrentUser | null;
  isLoading: boolean;
};

const NavbarMobile = ({ navbarItems, user, isLoading }: NavbarMobileProps) => {
  const [open, setOpen] = useState(false);

  const handleLogOut = async () => {
    try {
      await authClient.signOut();
    } catch (error) {
      if (error instanceof Error) {
        toast.error('something went wrong');
      }
    }
  };

  return (
    <>
      {/* Top bar */}
      <div className="flex h-full items-center justify-between px-4">
        <h1 className="bg-primary text-accent hover:bg-accent hover:text-primary cursor-pointer rounded-xs px-2 py-0.5 text-xl font-extrabold tracking-widest transition-all">
          BLITZ
        </h1>
        <button onClick={() => setOpen(true)}>
          <Menu
            size={28}
            color="white"
            className="cursor-pointer transition-all duration-300 hover:opacity-80"
          />
        </button>
      </div>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={clsx(
          'fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity',
          open
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        )}
      />

      {/* Sidebar */}
      <div
        className={clsx(
          'bg-secondary-foreground text-accent fixed top-0 left-0 z-50 flex h-full w-72 flex-col shadow-xl transition-transform duration-300 rounded-sm',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex h-14 shrink-0 items-center justify-between px-3">
          <h1 className="text-lg font-semibold tracking-widest">BLITZ</h1>
          <button onClick={() => setOpen(false)}>
            <X
              size={24}
              color="white"
              className="cursor-pointer transition-all duration-300 hover:opacity-80"
            />
          </button>
        </div>
        <Separator />

        {/* Menu */}
        <ul className="flex flex-col">
          {navbarItems.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              onClick={() => setOpen(false)}
              className="hover:bg-accent  hover:text-primary px-4 py-2.5 text-sm font-semibold transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </ul>

        {/* Footer pinned to bottom */}
        <div className="mt-auto">
          <Separator />
          <div className="flex items-center justify-between px-3 py-3">
            <div className="flex items-center gap-2">
              {isLoading ? (
                <Skeleton className="h-8 w-8 rounded-full" />
              ) : user ? (
                <Avatar className="cursor-pointer hover:opacity-90">
                  <AvatarImage
                    src={user.image || 'https://github.com/shadcn.png'}
                  />
                  <AvatarFallback>
                    {user.name ? user.name.slice(0, 2).toUpperCase() : 'U'}
                  </AvatarFallback>
                </Avatar>
              ) : (
                <Link href={`/sign-in`}>
                  <Avatar className="cursor-pointer hover:opacity-90">
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                </Link>
              )}
              <span className="text-sm font-medium">Profile</span>
            </div>

            {user && (
              <button
                className="opacity-70 transition hover:opacity-100"
                onClick={handleLogOut}
              >
                <LogOut
                  size={18}
                  color="white"
                  className="cursor-pointer transition-all duration-300 hover:opacity-80"
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarMobile;
