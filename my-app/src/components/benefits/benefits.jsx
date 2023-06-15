import React from "react";
import Box from "./box";

const BenefitsPage = () => {
  return (
    <div className="bg-[#E9E9E9]  p-10 text-[#272626] font-light">
      <div className="flex items-center flex-col gap-10">
        <h1 className="text-[#272626] text-4xl">{`Transform Your Body Fast With Professional Trainers.`}</h1>
        <p className="text-xl">
          {`We Provide Best Service in North-Asia. We help You To Transform Your Body in Few Months – Our Trainers Will Guide You How To Do it!`}
        </p>
      </div>
      <div className="flex flex-row gap-96 pt-10 justify-center">
        <Box
          header={"Professional Trainers"}
          text={
            "We provide best Professional trainers in our gym that guides you every movement, Our trainers works one-on-one with a client to develop and implement a fitness training regimen that helps them improve physical performance or maintain their health."
          }
        />
        <Box
          header={"Cardio Equipments"}
          text={
            "We provide best cardio equipments for cardiovascular workout to facilate physical activity that the human body can utilize to promote good health, lose weight and even relieve stress. (Treadmill, Spin bike, Rowing machine, Skierg, Airdyne, Elliptical)."
          }
        />
      </div>
      <div className="flex flex-row gap-96 pt-10 justify-center">
        <Box
          header={"Lady Coach"}
          text={
            "We also provide a Lady trainer for our female customers. She may make things easier since they can relate to what you are feeling. With a female trainer ,your comfort level may be higher, which will increase your motivation and help you to get fit easily."
          }
        />
        <Box
          header={"Free Weight-area"}
          text={
            "We provide you a big-section for free Weight-area. free weight include dumbbells, barbells, medicine balls, sandbells, and kettlebells. If you are strong enough, we give you a big area to raise or pull free weights. So come today and have a look on."
          }
        />
      </div>
    </div>
  );
};

export default BenefitsPage;
