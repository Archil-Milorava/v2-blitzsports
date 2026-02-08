import { Spinner } from '@/components/ui/spinner';

const loading = () => {
  return (
    <div className="z-50 flex h-screen w-full items-center justify-center overflow-hidden">
      <Spinner />
    </div>
  );
};

export default loading;
