'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import SearchArticles from './SearchArticles'

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
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < lastScrollY) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false)
        setIsMenuOpen(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 flex h-16 w-full items-center justify-between bg-[#23232D] px-4 transition-transform duration-300 ease-in-out md:px-8 lg:justify-around ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Logo */}
      <Link
        href="/"
        className="z-20 flex h-8 w-auto cursor-pointer items-center justify-center rounded-sm bg-[#67206E] px-4 text-[1.2rem] font-bold tracking-widest text-[#DDF203] transition-all hover:bg-[#DDF203] hover:text-[#67206E] md:px-6"
      >
        BLITZ
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden items-center gap-4 md:flex lg:gap-6">
        {components.map((category) => (
          <li
            key={category.title}
            className="cursor-pointer transition-all hover:opacity-80"
          >
            <Link
              href={category.href}
              className="font-semibold text-white transition-all hover:opacity-80"
            >
              {category.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className=' flex gap-1.5'>
        {/* search */}
        <SearchArticles />

        {/* Desktop User Avatar */}
        <Avatar className="hidden cursor-pointer transition-all hover:opacity-80 md:block">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="z-20 cursor-pointer text-white transition-all hover:opacity-80 md:hidden"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={25} />}
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-10 bg-black/50 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'visible opacity-80' : 'invisible opacity-0'
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Menu */}
      <nav
        className={`fixed top-16 right-0 z-10 h-[calc(100vh-4rem)] w-full transform bg-[#23232D]/90 transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Mobile Navigation Links */}
          <ul className="flex flex-col items-center gap-4 py-4">
            {components.map((category) => (
              <Link
                href={category.href}
                key={category.title}
                className="text-lg font-semibold text-white transition-all hover:text-[#DDF203]"
                onClick={closeMenu}
              >
                {category.title}
              </Link>
            ))}
          </ul>

          {/* Mobile User Section */}
          <Link
            href="/"
            className="mt-auto cursor-pointer border-t border-gray-700 p-6 transition-all hover:opacity-90"
          >
            <div className="flex items-center justify-end gap-3">
              <span className="font-semibold text-white">Profile</span>
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
