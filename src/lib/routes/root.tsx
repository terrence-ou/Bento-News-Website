import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="bg-grid flex justify-center min-h-dvh py-8 px-12">
      <div className="w-full max-w-[1600px] rounded-[20px] shadow-body bg-background p-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
