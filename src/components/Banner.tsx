import appIcon from "@/assets/icon.png";
import { CodeXml, CloudDownload } from "lucide-react";

const Banner = () => {
  const buttonStyle =
    "flex justify-center items-center gap-1 w-48 border border-primary/20 h-10 rounded-lg font-medium cursor-pointer hover:bg-primary bg-background hover:text-secondary transition-all duration-150";

  return (
    <div className="relative w-full flex flex-col justify-center items-center py-20 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-background/0 via-background/0 to-background"></div>
      <img src={appIcon} className="w-32 my-2" />
      <h1 className="text-3xl font-bold">Bento News</h1>
      <h3 className="font-serif font-medium my-1 text-primary/60">
        Change the way you understand the world
      </h3>
      <div className="flex gap-3 justify-center items-center mt-4 z-20">
        <a className={buttonStyle}>
          <CodeXml className="w-5" />
          Source Code
        </a>
        <a className={buttonStyle}>
          <CloudDownload className="w-5" />
          Download
        </a>
      </div>
    </div>
  );
};

export default Banner;
