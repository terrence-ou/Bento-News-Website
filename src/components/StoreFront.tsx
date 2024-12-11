import { useState } from "react";
import { Circle, CircleDashed } from "lucide-react";
import { cn } from "@/lib/utils";
import headlinesImg from "@/assets/imgs/headlines.png";
import searchImg from "@/assets/imgs/search.png";
import localNewsImg1 from "@/assets/imgs/local.png";
import localNewsImg2 from "@/assets/imgs/local-2.png";
import aiImg1 from "@/assets/imgs/ai-1.png";
import aiImg2 from "@/assets/imgs/ai-2.png";
import aiImg3 from "@/assets/imgs/ai-3.png";
import aiImg4 from "@/assets/imgs/ai-4.png";

const descriptions = [
  {
    title: "Curated Daily Headlines",
    description:
      "We curate daily headlines in politics, economy, technology, science, and more to keep you informed about the fields you're interested in.",
  },
  {
    title: "Instant Keyword Search",
    description:
      "Search for news by keywords, dates, and fields, and get results instantly. Bento News supports searches in 10+ languages and across 3000 resources.",
  },
  {
    title: "Local News Management",
    description:
      "Mark, save, and organize news as you prefer to maximize its value. All file management happens locally to ensure your privacy.",
  },
  {
    title: "AI-Assisted Analysis",
    description:
      "Use AI tools to summarize collected news, predict trends, and provide suggestions on related topics to help you gain broader and deeper insights.",
  },
  {
    title: "Cover Image Generation",
    description:
      "Generate cover images based on your selected topics in multiple styles for your posts or essays to make your work more attractive.",
  },
];

const StoreFront = () => {
  const [currExpand, setCurrExpand] = useState<number>(3);
  const handleExpand = (i: number) => {
    setCurrExpand(i);
  };

  const getDemo = () => {
    switch (currExpand) {
      case 0:
        return <Scroll />;
      case 1:
        return <Search />;
      case 2:
        return <LocalNews />;
      case 3:
        return <AIs />;
      default:
        return <></>;
    }
  };

  return (
    <div className="w-full grid grid-cols-5 px-16 py-7 border-primary/40 border rounded-xl border-dashed">
      <div className="col-span-2">
        <h2 className="text-2xl font-bold tracking-tighter pb-4 text-primary/80">
          Bento News's Unique Features
        </h2>
        <div className="flex flex-col w-full">
          {descriptions.map((desc, i) => (
            <div
              className={cn(
                "rounded-lg transition-all duration-300 cursor-pointer",
                i === currExpand ? "h-28" : "h-8"
              )}
              key={desc.title}
              onClick={() => handleExpand(i)}
            >
              <div className="flex gap-2 items-center">
                <div>
                  {currExpand === i ? (
                    <Circle
                      className="w-4 stroke-primary"
                      strokeWidth={"3px"}
                    />
                  ) : (
                    <CircleDashed className="w-4 stroke-primary/20" />
                  )}
                </div>
                <h3
                  className={cn(
                    "text-lg font-bold transition-all duration-300",
                    i === currExpand
                      ? "text-primary"
                      : "text-primary/20"
                  )}
                >
                  {desc.title}
                </h3>
              </div>
              {currExpand === i && (
                <p className="pl-6 pr-20 py-1 animate-fade-in-opacity font-serif leading-tight text-primary/70">
                  {desc.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-3 h-[540px] overflow-hidden rounded-lg shadow-body">
        {getDemo()}
      </div>
    </div>
  );
};

// ========== Sub components ==========

const Scroll = () => {
  return (
    <img
      src={headlinesImg}
      className="w-full rounded-xl animate-scroll"
    />
  );
};

const Search = () => {
  return (
    <img src={searchImg} className="w-full rounded-xl animate-zoom" />
  );
};

const LocalNews = () => {
  return (
    <div className="relative">
      <img
        src={localNewsImg2}
        className="absolute animate-slide-in"
      />
      <img src={localNewsImg1} />
    </div>
  );
};

const AIs = () => {
  return (
    <div className="relative">
      <img
        src={aiImg4}
        className="absolute w-[45%] translate-x-[120%] rotate-[3deg] animate-swin-1"
      />
      <img
        src={aiImg1}
        className="absolute w-[45%] translate-y-0 -rotate-[6deg] animate-swin-2"
      />
      <img
        src={aiImg2}
        className="absolute w-[45%] translate-x-[40%] rotate-[20deg] animate-swin-3"
      />
      <img
        src={aiImg3}
        className="absolute w-[45%] translate-x-[70%] translate-y-[14%] -rotate-[6deg] animate-swin-4"
      />
    </div>
  );
};
export default StoreFront;
