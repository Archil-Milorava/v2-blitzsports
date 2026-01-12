import { Skeleton } from '@/components/ui/skeleton'

const NewsSekelton = () => {
  return (
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-4 px-2'>
      {[...Array(6)].map((_, i) => (
        <div key={i} className="flex flex-col gap-4">
          {/* Image Area */}
          <Skeleton className='h-52 w-full rounded-md' />
          
          <div className="flex flex-col gap-2 px-1">
            {/* Badge/Category Small Tag */}
            <Skeleton className='h-4 w-20 rounded-md' />
            
            {/* Title - Two lines for a more realistic look */}
            <Skeleton className='h-6 w-full rounded-md' />
            <Skeleton className='h-6 w-2/3 rounded-md' />
            
            {/* Date/Author Metadata */}
            <div className="mt-2">
              <Skeleton className='h-3 w-32 rounded-sm' />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NewsSekelton