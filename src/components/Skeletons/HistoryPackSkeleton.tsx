import { Skeleton } from '../ui/skeleton';

const HistoryPackSkeleton = () => {
  return (
    <div className="my-8 flex flex-col gap-8">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="bg-muted/20 flex h-auto w-full flex-col overflow-hidden rounded-sm md:h-64 md:flex-row"
        >
          {/* Image Section Skeleton */}
          <Skeleton className="h-56 w-full rounded-none md:h-full md:w-2/5" />

          {/* Content Section Skeleton */}
          <div className="flex w-full flex-col p-5 md:w-3/5 md:p-6">
            <div className="flex-grow space-y-3">
              {/* Title lines */}
              <Skeleton className="h-7 w-3/4" />
              <Skeleton className="h-7 w-1/2" />

              {/* Content lines */}
              <div className="space-y-2 pt-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[90%]" />
                <Skeleton className="h-4 w-[80%]" />
              </div>
            </div>

            {/* Bottom Section Skeleton */}
            <div className="flex items-center justify-between border-t border-gray-100 pt-3">
              <Skeleton className="h-3 w-16" />
              <Skeleton className="h-4 w-12" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HistoryPackSkeleton;
