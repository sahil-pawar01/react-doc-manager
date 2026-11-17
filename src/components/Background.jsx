import React from "react";

const Background = () => {
  return (
    <div className="fixed z-10 w-full h-full">
      <div className="w-full py-8 flex justify-center items-center text-zinc-600 text-xl absolute top-[5%]">
        Documents
      </div>
      <h1 className="text-[13vw] leading-none tracking-tight font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-zinc-900">
        Docs.
      </h1>
    </div>
  );
};

export default Background;
