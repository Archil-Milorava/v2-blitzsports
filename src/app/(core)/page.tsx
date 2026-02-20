import NewsMain from '@/components/Landing/news/NewsMain';
import CategorySeparator from '@/components/ui/CategorySeparator';

const LandingMain = () => {
  return (
    <div className="flex min-h-screen flex-col px-2 pt-2 transition-all duration-700 sm:px-8 md:px-14 lg:px-24 xl:px-48">
      <CategorySeparator url="/news" title="ახალი ამბები" />
      <NewsMain />
      <CategorySeparator url="/news" title="ახალი ამბები" />
      <NewsMain />
    </div>
  );
};

export default LandingMain;
