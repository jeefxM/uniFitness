import React from "react";
import Header from "./Header";

const MainPage = () => {
  return (
    <div
      className="min-h-[80vh]  bg-cover bg-center bg-no-repeat darker-bg-image"
      style={{
        backgroundImage: `url("workout.png")`,
        opacity: "0.9",
      }}
    >
      <Header />
      <div className="p-24">
        {" "}
        <h1 className="text-[#E6683C] text-5xl">{`'BEST FITNESS GYM'`}</h1>
        <span className="text-5xl">{`MAKE TIME WITH US,`}</span>
        <span className="text-5xl">{` Get your body ready to fit.`}</span>
      </div>
    </div>
  );
};

export default MainPage;
