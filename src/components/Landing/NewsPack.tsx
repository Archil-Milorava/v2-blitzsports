import { getLandingNews } from './actions';
import NewsCard from './NewsCard';

const NewsPack = async () => {
  const news = await getLandingNews();
  if (!news?.length) return null;

  const [hero, ...rest] = news;

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {/* Hero */}
        <div className="lg:col-span-2 lg:row-span-2">
          <NewsCard newsItem={hero} variant="hero" />
        </div>

        {/* Rest */}
        {rest.slice(0, 5).map((item) => (
          <NewsCard key={item.id} newsItem={item} />
        ))}
      </div>
    </section>
  );
};

export default NewsPack;
