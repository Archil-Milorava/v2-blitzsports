import { getLandingHistories } from './actions';
import HistoryCard from './HistoryCard';

const HistoryPack = async () => {
  const histories = await getLandingHistories();

  if (!histories) return null;

  return (
    <div className="my-4 flex flex-col gap-8">
      {histories.map((history) => (
        <HistoryCard history={history} key={history.id} />
      ))}
    </div>
  );
};

export default HistoryPack;
