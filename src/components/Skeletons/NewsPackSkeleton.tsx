import { Skeleton } from '../ui/skeleton';

const NewsPackSkeleton = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Hero skeleton */}
        <div className="md:col-span-2 lg:row-span-2">
          <Skeleton className="aspect-16/10 w-full rounded-sm" />
        </div>

        {/* Secondary cards */}
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="aspect-video w-full rounded-sm" />
        ))}
      </div>
    </section>
  );
};

export default NewsPackSkeleton;
