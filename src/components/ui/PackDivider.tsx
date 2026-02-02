import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const PackDivider = ({ title, to }: { title: string; to: string }) => {
  return (
    <Link
      href={to}
      className="group my-4 flex w-full cursor-pointer items-center justify-between border-b border-b-gray-600 px-4 py-1.5 transition-colors duration-200"
    >
      <h1 className="text-xl font-bold tracking-widest text-black">{title}</h1>
      <button className="group-hover:text-primary flex cursor-pointer items-center gap-1 text-sm text-gray-600 transition-opacity duration-200">
        იხილეთ მეტი{' '}
        <ChevronRight
          size={15}
          color="gray"
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </button>
    </Link>
  );
};

export default PackDivider;
