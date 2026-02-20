import Image from 'next/image';

const PrimaryNewsCard = ({ title }) => {
  return (
    <div className="group relative h-full w-full cursor-pointer">
      <img
        alt="news"
        src="https://res.cloudinary.com/deijidv94/image/upload/v1769708731/articles/p73qmqc5tq8hxqpgcfdz.png"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      <h1 className="absolute bottom-4 z-10 line-clamp-2 px-2 text-2xl font-bold text-white">
        {title}
      </h1>
    </div>
  );
};

export default PrimaryNewsCard;
