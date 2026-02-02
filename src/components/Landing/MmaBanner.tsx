import Image from 'next/image';
import Link from 'next/link';

const MmaBanner = () => {
  return (
    <div className="group relative my-4 h-80 w-full cursor-pointer overflow-hidden rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl md:h-[28rem]">
      <Link href="/mma" className="block h-full w-full">
        <Image
          src="/mmaBanner.png"
          alt="MMA Background"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          quality={90}
          priority={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay with MMA text */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/30 to-transparent">
          <h2 className="text-accent transform text-6xl font-bold tracking-wider transition-all duration-500 group-hover:scale-110 group-hover:opacity-90 sm:text-7xl md:text-8xl">
            MMA
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default MmaBanner;
