import { CodeXml, CloudDownload } from "lucide-react";
import icon from "../assets/icon.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full h-fit z-50 m-2">
      <div className="flex gap-6 items-center bg-background rounded-full px-6 py-1 shadow-body">
        <img src={icon} alt="icon" className="w-8 h-8" />
        <h3 className="text-lg tracking-tight font-bold">
          Bento News
        </h3>
      </div>
      <div className="flex items-center bg-background rounded-full px-2 py-1 shadow-body">
        <div className="flex h-8 items-center gap-3 px-4 font-semibold rounded-full">
          <CodeXml size={20} />
          Source Code
        </div>
        <div className="flex h-8 items-center gap-3 px-4 bg-primary font-semibold text-secondary rounded-full">
          <CloudDownload size={20} />
          Download
        </div>
      </div>
    </div>
  );
};

export default Header;
