
const SecondaryNewsCard = () => {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-sm">
      <div className="h-1/2 w-full">
        <img
          src="https://res.cloudinary.com/deijidv94/image/upload/v1769708731/articles/p73qmqc5tq8hxqpgcfdz.png"
          alt="test2"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="h-1/2 w-full p-1">UFC 325</div>
    </div>
  );
};

export default SecondaryNewsCard;
