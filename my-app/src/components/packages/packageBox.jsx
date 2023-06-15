import React from "react";

const PackageBox = ({ price, time, content1, content2, content3 }) => {
  return (
    <div className="flex flex-col shadow-lg shadow-black text-[#272626] sh">
      <div className="bg-[#E7E6E6] text-[#E67E22] text-4xl pt-10 p-2 font-light pr-10 flex flex-col gap-3">
        <p className="font-base font-normal text-7xl">{price}</p>
        <p className="text-5xl">/{time}</p>
        <p className="text-[#272626] text-base">{`Includes Gym, Cardio and Weight-area`}</p>
      </div>
      <div className="bg-[#EFEFEF] p-2 pt-3 font-light flex flex-col items-center pb-24">
        <div>
          <p>{content1}</p>
          <p>{content2}</p>
          <p>{content3}</p>
        </div>
      </div>
      <div className="border-t-[1px] border-[#D8D8D8] bg-[#EFEFEF] flex items-center justify-center py-6">
        <button className="rounded-3xl px-6 py-2 border-[1px] text-xl border-[#E67E22] hover hover:bg-[#E67E22]">
          Get Started Now
        </button>
      </div>
    </div>
  );
};

export default PackageBox;
