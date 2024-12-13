import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import NewsAppView from "@/components/NewsAppView";
import Header from "@/components/Header";
import { Sparkles } from "lucide-react";
import StoreFront from "@/components/StoreFront";
import Banner from "@/components/Banner";

const baseSize: number = 80;
const padding: number = 10;

const mobileSize: number = 50;
const mobilePadding: number = 6;

const shuffleArray = (array: number[][]) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const getOrderedCoords = (size: number) => [
  [0, 0],
  [size, 0],
  [size * 2, 0],
  [size * 3, 0],
  [size * 4, 0],
  [0, size],
  [size, size],
  [2 * size, size],
  [3 * size, size],
];

const Home = () => {
  const [dimension, setDimension] = useState<number[]>(
    window.innerWidth > 640
      ? [baseSize, padding]
      : [mobileSize, mobilePadding]
  );

  const orderedCoords = getOrderedCoords(dimension[0] + dimension[1]);
  const [coords, setCoords] = useState<number[][]>(orderedCoords);

  const handleDimensions = () => {
    const width = window.innerWidth;
    if (width <= 640) {
      setDimension([mobileSize, mobilePadding]);
      setCoords(getOrderedCoords(mobileSize + mobilePadding));
    } else {
      setDimension([baseSize, padding]);
      setCoords(getOrderedCoords(baseSize + padding));
    }
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const debounceHandleDimensions = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        handleDimensions();
      }, 100);
    };
    handleDimensions();
    window.addEventListener("resize", debounceHandleDimensions);
    const interval = setInterval(() => {
      setCoords((prev) => shuffleArray(prev));
    }, 2000);
    return () => {
      window.removeEventListener("resize", debounceHandleDimensions);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="relative flex flex-col w-full h-[630px] bg-primary/10 rounded-[16px] p-2 sm:p-5 overflow-hidden">
        <Header />
        <div className="absolute -bottom-[14%] rounded-lg left-[50%] -translate-x-[50%] -translate-y-[50%] w-[340px] h-[220px] shadow-lg sm:bottom-[250px] sm:left-[55px] z-30 px-4 sm:px-0 sm:h-fit sm:w-fit sm:translate-x-0 sm:translate-y-0 bg-background sm:bg-transparent sm:shadow-none">
          <div className="py-4 md:py-8 text-lg md:text-xl tracking-tight">
            <div className="flex items-center">
              <p>Your</p>
              <Sparkles className="w-4 ml-2" />
              <p className="font-semibold px-1">AI-driven</p>
              <Sparkles className="w-4 mr-2" />
              <p>News APP</p>
            </div>
            <div className="font-bold">
              1000x faster then Google News. *
            </div>
          </div>
          {Array.from("BENTONEWS").map((letter, i) => {
            return (
              <div
                key={`home-${letter}-${i}`}
                className={cn(
                  "absolute flex items-center justify-center font-bold transition-all duration-500 rounded-lg shadow-lg",
                  i > 4
                    ? "bg-primary text-secondary font-serif text-[34px] sm:text-[56px]"
                    : "bg-secondary text-primary font-sans text-[40px] sm:text-[60px]"
                )}
                style={{
                  width: dimension[0],
                  height: dimension[0],
                  transform: `translate(${coords[i][0]}px, ${coords[i][1]}px)`,
                }}
              >
                {letter}
              </div>
            );
          })}
        </div>
        <NewsAppView />
      </div>
      <div className="text-center my-20 px-1 sm:px-0 sm:my-32">
        <h1 className="text-[24px] sm:text-[32px] font-bold animate-fade-in tracking-wide my-2">
          Revolutionize how you manage and analyze news
        </h1>
        <div className="text-[16px] sm:text-[18px] font-medium leading-tight text-primary/60 tracking-tight">
          <p className="animate-fade-in-1">
            Bento News supports content from over{" "}
            <span className="font-bold text-primary/80">3,000</span>{" "}
            trusted media outlets worldwide.
          </p>
          <p className="animate-fade-in-2 my-2 sm:my-0">
            Harness{" "}
            <span className="font-bold text-primary/80">
              AI-driven tools
            </span>{" "}
            to gain broader and deeper insights into your curated
            collection.
          </p>
          <p className="animate-fade-in-3">
            Collect and organize the news as you preferred locally to{" "}
            <span className="font-bold text-primary/80">
              ensure your privacy
            </span>
            .
          </p>
        </div>
      </div>
      <StoreFront />
      <Banner />
    </>
  );
};

export default Home;
