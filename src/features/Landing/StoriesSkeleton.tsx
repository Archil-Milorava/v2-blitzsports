import { Skeleton } from "@/components/ui/skeleton"

const StoriesSkeleton = () => {
  return (
    <div className="w-full flex flex-col gap-8 my-4 px-2">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="flex flex-col md:flex-row gap-6 w-full">
          {/* Large Image/Thumbnail area */}
          <Skeleton className="h-52 w-full md:w-[400px] shrink-0 rounded-xl" />

          {/* Text Content area */}
          <div className="flex flex-col gap-4 flex-grow py-2">
            {/* Category/Badge */}
            <Skeleton className="h-5 w-24 rounded-md" />
            
            {/* Main Title */}
            <div className="flex flex-col gap-2">
              <Skeleton className="h-8 w-full md:w-[90%] rounded-md" />
              <Skeleton className="h-8 w-[60%] rounded-md" />
            </div>

            {/* Short Description snippet */}
            <div className="flex flex-col gap-2 mt-2">
              <Skeleton className="h-4 w-full rounded-sm" />
              <Skeleton className="h-4 w-[85%] rounded-sm" />
            </div>

            {/* Footer / Date */}
            <div className="mt-auto">
              <Skeleton className="h-4 w-32 rounded-sm" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StoriesSkeleton