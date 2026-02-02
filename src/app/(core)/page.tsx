import NewsPack from '@/components/Landing/NewsPack';
import NewsPackSkeleton from '@/components/Skeletons/NewsPackSkeleton';
import { Suspense } from 'react';

const page = () => {
  return (
    <div className="flex h-full w-full max-w-400 flex-col px-4 sm:px-10 md:px-14 lg:px-32 xl:px-44">
      <div className="bg-red- mt-6">
        <Suspense fallback={<NewsPackSkeleton />}>
          <NewsPack />
        </Suspense>
      </div>
    </div>
  );
};

export default page;
