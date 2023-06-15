import React from "react";
import PackageBox from "./packageBox";

const Packages = () => {
  return (
    <div className="flex flex-col items-center pt-10 bg-[#E0E0E0] gap-16 pb-10">
      <h1 className="text-4xl text-[#272626] font-light">{`Start building muscles today with our new Packages`}</h1>
      <div className="flex gap-5">
        <PackageBox
          price={5}
          time={"one time"}
          content1={"Validate for one day"}
          content2={"Access to All equipments"}
          content3={"Not Guided by Trainer"}
        />
        <PackageBox
          price={25}
          time={"month"}
          content1={"Validate for one day"}
          content2={"Access to All equipments"}
          content3={"Guided by Trainer"}
        />
        <PackageBox
          price={125}
          time={"6-months"}
          content1={"Validate for 365-days"}
          content2={"Access to All equipments"}
          content3={"Guided by Trainer"}
        />
      </div>
    </div>
  );
};

export default Packages;
