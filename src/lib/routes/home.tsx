import { useEffect, useState } from "react";
import { cn } from "../utils";

const baseSize: number = 90;
const padding: number = 15;
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
    <div className="relative flex w-full h-[600px] bg-primary/10 rounded-[20px]">
      <div className="absolute bottom-[250px] left-[55px]">
        {Array.from("BENTONEWS").map((letter, i) => {
          return (
            <p
              key={`home-${letter}-${i}`}
              className={cn(
                "absolute text-[60px] font-bold content-center text-center transition-all duration-500 rounded-lg shadow-lg",
                i > 4
                  ? "bg-primary text-secondary font-serif"
                  : "bg-secondary text-primary font-sans"
              )}
              style={{
                width: baseSize,
                height: baseSize,
                transform: `translate(${coords[i][0]}px, ${coords[i][1]}px)`,
              }}
            >
              {letter}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
