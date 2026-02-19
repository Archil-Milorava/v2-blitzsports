import PrimaryNewsCard from './PrimaryNewsCard';
import SecondaryNewsCard from './SecondaryNewsCard';

const NewsMain = () => {
  return (
    <div className="grid w-full grid-cols-2 gap-4 bg-gray-100 p-4 md:grid-cols-4 md:grid-rows-2">
      {/* 1. Large Top-Left Card */}
      <div className="col-span-2 row-span-1 min-h-[300px] overflow-hidden rounded-lg bg-blue-400">
        <PrimaryNewsCard title="UFC 325: Makhachev vs. Oliveira" />
      </div>

      {/* 2. Two Small Cards (Top Right on MD) */}
      {Array.from({ length: 2 }).map((_, i) => (
        <div
          key={`top-${i}`}
          className="overflow-hidden rounded-lg bg-white shadow-sm"
        >
          <SecondaryNewsCard />
        </div>
      ))}

      {/* 3. Two Small Cards (Bottom Left on MD) */}
      {Array.from({ length: 2 }).map((_, i) => (
        <div
          key={`bot-${i}`}
          className="overflow-hidden rounded-lg bg-white shadow-sm"
        >
          <SecondaryNewsCard />
        </div>
      ))}

      {/* 4. Large Bottom-Right Card */}
      <div className="col-span-2 row-span-1 min-h-[300px] overflow-hidden rounded-lg bg-red-400">
        <PrimaryNewsCard title="F1 2026: New Regulations" />
      </div>
    </div>
  );
};

export default NewsMain;
