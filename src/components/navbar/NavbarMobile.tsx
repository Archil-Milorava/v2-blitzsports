'use client';

import { Menu, X, LogOut } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { TNavbaItem, TUser } from './NavbarMain';
import clsx from 'clsx';
import { Separator } from '../ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

type NavbarMobileProps = {
  navbarItems: TNavbaItem[];
  user?: TUser;
  isLoading: boolean;
};

const NavbarMobile = ({ navbarItems, user, isLoading }: NavbarMobileProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="flex h-full items-center justify-between px-4">
        <h1 className="bg-primary text-accent hover:bg-accent hover:text-primary cursor-pointer rounded-xs px-2 py-0.5 text-xl font-extrabold tracking-widest transition-all">
          BLITZ
        </h1>
        <button onClick={() => setOpen(true)}>
          <Menu size={28} className="cursor-pointer" />
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
          'bg-primary text-accent fixed top-0 left-0 z-50 flex h-full w-72 flex-col shadow-xl transition-transform duration-300',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex h-14 shrink-0 items-center justify-between px-3">
          <h1 className="text-lg font-semibold tracking-widest">BLITZ</h1>
          <button onClick={() => setOpen(false)}>
            <X size={24} className="cursor-pointer opacity-70" />
          </button>
        </div>
        <Separator />

        {/* Menu */}
        <ul className="flex flex-col py-2">
          {navbarItems.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              onClick={() => setOpen(false)}
              className="hover:bg-accent hover:text-primary px-4 py-2.5 text-sm font-medium transition-colors"
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
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">Profile</span>
            </div>

            <button className="opacity-70 transition hover:opacity-100">
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarMobile;
