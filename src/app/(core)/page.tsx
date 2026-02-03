import F1Banner from '@/components/Landing/F1Banner';
import HistoryPack from '@/components/Landing/HistoryPack';
import MmaBanner from '@/components/Landing/MmaBanner';
import NewsPack from '@/components/Landing/NewsPack';
import HistoryPackSkeleton from '@/components/Skeletons/HistoryPackSkeleton';
import NewsPackSkeleton from '@/components/Skeletons/NewsPackSkeleton';
import PackDivider from '@/components/ui/PackDivider';
import { Suspense } from 'react';

const page = () => {
  return (
    <div className="flex h-full w-full max-w-400 flex-col px-4 sm:px-10 md:px-14 lg:px-32 xl:px-48">
      <div className="bg-red- my-6">
        <PackDivider title="ახალი ამბები" to="/news" />
        <Suspense fallback={<NewsPackSkeleton />}>
          <NewsPack />
        </Suspense>
      </div>
      <div className="bg-red- my-6">
        <PackDivider title="ვრცელი სტატიები" to="/histories" />
        <Suspense fallback={<HistoryPackSkeleton />}>
          <HistoryPack />
        </Suspense>
      </div>
      <MmaBanner />
      <F1Banner />
    </div>
  );
};

export default page;
