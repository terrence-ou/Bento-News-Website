import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="bg-grid flex justify-center min-h-dvh py-2 sm:py-8 px-2 sm:px-12">
      <div className="flex flex-col gap-2 justify-between w-full max-w-[1600px] rounded-[20px] shadow-body bg-background p-2 sm:p-5">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Root;
