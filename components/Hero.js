import React from "react";
import Calendar from "./Calendar";
import CallToAction from "./CallToAction";

const Hero = () => {
  return (
    <div className="flex flex-col gap-8 py-4 md:py-10 sm:gap-10">
      <h1 className="text-5xl text-center sm:text-6xl md:text-7xl">
        <span className="font-semibold text-violet-500">Mood Mapper</span> helps
        you track your{" "}
        <span className="font-semibold text-fuchsia-500">emotions!</span>
      </h1>
      <p className="text-lg font-mono sm:text-xl md:text-2xl text-center w-full mx-auto max-w-[600px]">
        Create a personalized mood record and visualize your emotional journey{" "}
        <span className="font-semibold">throughout the year.</span>
      </p>
      <CallToAction />
      <Calendar demo />
    </div>
  );
};

export default Hero;
