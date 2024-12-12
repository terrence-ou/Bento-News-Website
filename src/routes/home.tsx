import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import NewsAppView from "@/components/NewsAppView";
import Header from "@/components/Header";
import { Sparkles } from "lucide-react";
import StoreFront from "@/components/StoreFront";
import Banner from "@/components/Banner";

const baseSize: number = 80;
const padding: number = 10;
const size: number = baseSize + padding;

const orderedCoords = [
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

const shuffleArray = (array: number[][]) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const Home = () => {
  const [coords, setCoords] =
    useState<typeof orderedCoords>(orderedCoords);

  useEffect(() => {
    const interval = setInterval(() => {
      setCoords(() => shuffleArray(orderedCoords));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative flex flex-col w-full h-[630px] bg-primary/10 rounded-[16px] p-5 overflow-hidden">
        <Header />
        <div className="absolute bottom-[250px] left-[55px] z-30">
          <div className="py-8 text-xl tracking-tight">
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
                    ? "bg-primary text-secondary font-serif text-[56px]"
                    : "bg-secondary text-primary font-sans text-[60px]"
                )}
                style={{
                  width: baseSize,
                  height: baseSize,
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
      <div className="text-center my-32">
        <h1 className="text-[32px] font-bold animate-fade-in tracking-wide my-2">
          Revolutionize how you manage and analyze news
        </h1>
        <div className="text-[18px] font-medium leading-tight text-primary/60 tracking-tight">
          <p className="animate-fade-in-1">
            Bento News supports content from over{" "}
            <span className="font-bold text-primary/80">3,000</span>{" "}
            trusted media outlets worldwide.
          </p>
          <p className="animate-fade-in-2">
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
