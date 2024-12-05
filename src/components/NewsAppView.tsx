const NewsAppView = () => {
  return (
    <div
      className="absolute -bottom-80 right-5 w-[1000px] h-[900px] z-10"
      style={{
        perspective: "1400px",
      }}
    >
      <div
        className="relative w-full h-full rounded-xl bg-background px-6 py-3 flex flex-col justify-center items-center gap-4"
        style={{ transform: "rotateY(-30deg) rotateX(10deg)" }}
      >
        <Dots />
        <Header />
        <div className="bg-grid-small w-full h-full rounded-lg shadow-workspace p-6">
          <Body />
        </div>
      </div>
    </div>
  );
};

const Dots = () => {
  return (
    <div className="absolute flex top-4 left-6 gap-[0.55rem]">
      <div className="w-[14px] h-[14px] rounded-full bg-red-500"></div>
      <div className="w-[14px] h-[14px] rounded-full bg-yellow-500"></div>
      <div className="w-[14px] h-[14px] rounded-full bg-green-500"></div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="grid grid-cols-3 bg-primary/5 w-[340px] rounded-full items-center p-1 ">
      <p className="text-center text-sm font-semibold bg-primary rounded-full text-secondary">
        Headlines
      </p>
      <p className="text-center text-sm font-medium">Search</p>
      <p className="text-center text-sm font-medium">Folders</p>
    </div>
  );
};

const Body = () => {
  return (
    <div>
      <h2
        className="my-3 text-3xl font-serif font-semibold animate-translateZ"
        style={{
          transform: "perspective(2400px)",
        }}
      >
        Today's Headlines
      </h2>
      <div className="grid grid-cols-4 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div className="animate-translateZ-card p-2 border bg-background/80 rounded-lg transition-all duration-150 shadow-news-card h-[300px]"></div>
  );
};

export default NewsAppView;
