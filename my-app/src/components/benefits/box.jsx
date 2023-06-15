import React from "react";

const Box = ({ header, text }) => {
  return (
    <div className="">
      <div className="bg-[#e5e5e5] rounded-r-[50px] border-[2px] border-[#E67E22] min-h-[500px] max-w-[280px] flex gap-10 items-center p-10 flex-col">
        <h1 className="text-4xl font-light text-center">{header}</h1>
        <p className="text-lg text-center">{text}</p>
      </div>
    </div>
  );
};

export default Box;
