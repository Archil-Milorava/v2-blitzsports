'use client';

import { Avatar } from '@heroui/react';
import { LogOut, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { name: 'ფეხბურთი', href: '/football' },
  { name: 'MMA', href: '/mma' },
  { name: 'ფორმულა 1', href: '/formula-1' },
  { name: 'სხვა', href: '/other' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b px-6 lg:px-12">
      {/* LEFT: Logo */}
      <Link
        href="/"
        className="group flex items-center justify-center rounded-xl px-4 py-2 transition-all duration-300"
      >
        <span className="text-accent bg-accent-second text-2xl font-extrabold tracking-wider transition-all hover:opacity-80">
          BLITZ
        </span>
      </Link>

      {/* MIDDLE: Desktop Links */}
      <div className="hidden items-center gap-6 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-default hover:text-accent text-sm font-semibold transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* RIGHT: Desktop Avatar */}
      <div className="hidden md:block">
        <Link
          href="/profile"
          className="block rounded-full border-2 border-transparent p-1 transition-all hover:border-[var(--accent)]"
        >
          <Avatar>
            <Avatar.Image
              alt="John Doe"
              src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
            />
            <Avatar.Fallback>JD</Avatar.Fallback>
          </Avatar>
        </Link>
      </div>

      {/* MOBILE: Hamburger Icon */}
      <button
        className="text-default cursor-pointer p-2 hover:opacity-80 md:hidden"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={28} />
      </button>

      {/* MOBILE OVERLAY DRAWER */}
      <div
        className={`bg-background fixed inset-0 z-50 transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <div className="flex h-[90%] w-full flex-col gap-4 px-12 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-accent hover:text-accent-hover cursor-pointer text-2xl font-extrabold"
            >
              BLITZ
            </Link>
            <X
              onClick={() => setIsOpen(false)}
              size={25}
              className="text-default cursor-pointer transition-all duration-500 hover:opacity-80"
            />
          </div>
          <div className="flex flex-col">
            {navLinks.map((item) => (
              <Link
                className="text-default hover:bg-accent-soft-hover cursor-pointer rounded-md px-2 py-2 transition-all"
                href={item.href}
                key={item.name}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="text-default flex h-[10%] w-full items-center justify-between px-12">
          <Link
            href="/profile"
            className="hover:text-accent-foreground flex cursor-pointer items-center gap-4"
          >
            <Avatar>
              <Avatar.Image
                alt="John Doe"
                src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
              />
              <Avatar.Fallback>JD</Avatar.Fallback>
            </Avatar>
            <p>profile name</p>
          </Link>
          <div>
            <LogOut
              size={25}
              className="hover:text-danger cursor-pointer transition-all"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
