import { CodeXml, CloudDownload } from "lucide-react";
import DownloadDialog from "./DownloadDialog";
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
      <div className="sm:flex items-center bg-background rounded-full px-2 py-1 shadow-body sm:visible hidden">
        <div className="flex h-8 items-center gap-3 px-4 font-semibold rounded-full">
          <CodeXml size={20} />
          <a
            href="https://github.com/terrence-ou/Bento-News"
            target="_blank"
          >
            Source Code
          </a>
        </div>
        <DownloadDialog>
          <div className="flex h-8 items-center gap-3 px-4 bg-primary font-semibold text-secondary rounded-full cursor-pointer">
            <CloudDownload size={20} />
            Download
          </div>
        </DownloadDialog>
      </div>
    </div>
  );
};

export default Header;
