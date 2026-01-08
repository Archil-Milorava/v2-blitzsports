'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const components: { title: string; href: string; description?: string }[] = [
  {
    title: 'ფეხბურთი',
    href: '/football',
    description: '',
  },
  {
    title: 'MMA',
    href: '/mma',
    description: '',
  },
  {
    title: 'ფორმულა 1',
    href: '/f1',
    description: '',
  },
  {
    title: 'სხვა..',
    href: '/other',
    description: '',
  },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-[#23232D] w-full h-16 flex items-center justify-between px-4 md:px-8 lg:justify-around relative">
      {/* Logo */}
      <Link
        href="/"
        className="w-auto h-8 bg-[#67206E] text-[#DDF203] px-6 md:px-10 text-[1.2rem] flex items-center justify-center font-bold tracking-widest hover:bg-[#DDF203] hover:text-[#67206E] cursor-pointer transition-all z-20"
      >
        BLITZ
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-4 lg:gap-6">
        {components.map((category) => (
          <li
            key={category.title}
            className="hover:opacity-80 transition-all cursor-pointer"
          >
            <Link
              href={category.href}
              className="text-white font-semibold hover:opacity-80 transition-all"
            >
              {category.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop User Avatar */}
      <Avatar className="hidden md:block hover:opacity-80 transition-all cursor-pointer">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-white z-20 hover:opacity-80 transition-all cursor-pointer"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={25} />}
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-10 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-80 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Menu */}
      <nav
        className={`fixed top-16 right-0 h-[calc(100vh-4rem)] w-full bg-[#23232D]/90 z-10 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Navigation Links */}
         <ul className=' py-4 flex flex-col items-center gap-4'>
            {
                components.map((category) => (
                    <Link href={category.href} key={category.title} className='text-lg text-white font-semibold hover:text-[#DDF203] transition-all'>{category.title}</Link>
                ))
            }
         </ul>

          {/* Mobile User Section */}
          <Link href="/" className="mt-auto p-6 border-t border-gray-700 hover:opacity-90 transition-all cursor-pointer">
            <div className="flex items-center justify-end gap-3">
              <span className="text-white font-semibold">Profile</span>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  )
}
