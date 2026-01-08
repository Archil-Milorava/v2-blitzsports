import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

type Props = {
  redirectText?: string
  redirectLink: string
}

const SectionDevider = ({ redirectText, redirectLink }: Props) => {
  return (
    <Link
      href={redirectLink}
      className="group w-full border-b border-[#67206E] flex items-center justify-between px-4 py-1.5  my-2 transition-colors duration-200 cursor-pointer"
    >
      <h1 className="text-xl font-bold text-black tracking-widest">
        {redirectText}
      </h1>
      <button className="text-xs flex gap-1 items-center transition-opacity duration-200 group-hover:text-[#67206E] cursor-pointer text-black">
        იხილეთ მეტი{' '}
        <ChevronRight
          size={15}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </button>
    </Link>
  )
}

export default SectionDevider
