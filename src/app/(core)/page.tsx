import NewsPack from '@/components/Landing/NewsPack';

const page = () => {
  return (
    <div className="flex h-full w-full flex-col px-4 sm:px-10 md:px-14 lg:px-32 xl:px-44">
      <div className="bg-red- mt-6">
        <NewsPack />
      </div>
    </div>
  );
};

export default page;
