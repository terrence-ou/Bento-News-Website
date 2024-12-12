import { ReactNode } from "react";
import { Download } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { releases } from "@/releases";

import icon from "../assets/icon.png";
import apple from "../assets/apple.svg";

const DownloadDialog = ({ children }: { children: ReactNode }) => {
  const currRelease = releases[0];
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="flex gap-8 items-center">
          <img
            src={icon}
            className="w-28 h-28 shadow-lg rounded-3xl"
          />
          <div className="flex-1">
            <h1 className="font-bold font-serif text-3xl">
              {currRelease.version}
            </h1>
            <p className="text-primary/60 italic">
              {`Release date: ${currRelease.date}`}
            </p>
            <div className="flex items-center gap-2 mt-3">
              <img src={apple} className="w-4 opacity-55" />
              <p>macOS</p>
            </div>
            <div className="grid grid-cols-2 gap-3 w-full my-2">
              {currRelease.downloads.macOS.versions.map(
                ([platform, link]) => (
                  <a
                    key={`modal-macos-${platform}`}
                    className="flex justify-center items-center gap-1 h-8 border-dashed border rounded-md py-1 text-sm cursor-pointer hover:bg-primary hover:text-secondary hover:border-solid transition-all duration-150"
                    href={link}
                  >
                    <Download className="h-4" />
                    {platform}
                  </a>
                )
              )}
            </div>
            <p className="italic text-sm mt-6 text-primary/40 leading-tight">
              * Only macOS versions are available at this time due to
              limited development resources.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DownloadDialog;
