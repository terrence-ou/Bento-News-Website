import { mockNews } from "@/const";
import img0 from "../assets/imgs/0.jpeg";
import img1 from "../assets/imgs/1.jpeg";
import img2 from "../assets/imgs/2.jpeg";
import img3 from "../assets/imgs/3.jpeg";
import img4 from "../assets/imgs/4.jpeg";
import img5 from "../assets/imgs/5.jpeg";
import img6 from "../assets/imgs/6.jpeg";
import img7 from "../assets/imgs/7.jpeg";

const imgs = [img0, img1, img2, img3, img4, img5, img6, img7];

const NewsAppView = () => {
  return (
    <div
      className="absolute -bottom-[400px] left-[30%] w-[1100px] z-10"
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
        {mockNews.map((news, i) => (
          <Card key={news.title} news={news} img={imgs[i]} />
        ))}
      </div>
    </div>
  );
};

const Card = ({
  news,
  img,
}: {
  news: (typeof mockNews)[0];
  img: string;
}) => {
  return (
    <div className="animate-translateZ-card p-2 border bg-background/80 rounded-lg transition-all duration-150 shadow-news-card">
      <img src={img} />
      <h1 className="font-semibold leading-tight text-md hover:underline hover:cursor-pointer">
        {news.title}
      </h1>
      <div className="flex justify-start items-center gap-2 my-3">
        <div className="flex items-center justify-center max-w-[60%] px-2 font-semibold text-xs text-background bg-primary/70 rounded">
          {news.source}
        </div>

        <p className="text-xs text-primary/50">
          {news.publishedAt.slice(0, 10)}
        </p>
      </div>
      <p className="font-serif text-[0.8rem]">{news.description}</p>
    </div>
  );
};

export default NewsAppView;
