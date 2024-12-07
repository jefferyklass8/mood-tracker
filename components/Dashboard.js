"use client";

import React from "react";
import Calendar from "./Calendar";

export default function Dashboard() {
  const moods = {
    Sad: "😢",
    Anxious: "😟",
    Neutral: "😐",
    Calm: "🙂",
    Joyful: "😄",
  };

  const statuses = {
    num_days: 21,
    time_remaining: "19:59:59",
    date: new Date().toDateString(),
  };

  return (
    <div className="flex flex-col flex-1 gap-8 sm:gap-12 md:gap-16">
      <div className="grid grid-cols-3 gap-4 p-4 text-indigo-500 rounded-lg bg-indigo-50">
        {Object.keys(statuses).map((status, statusIndex) => {
          return (
            <div key={statusIndex} className="flex flex-col gap-1 sm:gap-2">
              <p className="text-xs font-medium capitalize truncate sm:text-sm">
                {status.replaceAll("_", " ")}
              </p>
              <p className="font-mono text-base truncate sm:text-lg">
                {statuses[status]}
                {status === "num_days" ? " 🔥" : ""}
              </p>
            </div>
          );
        })}
      </div>
      <h4 className="text-5xl text-center sm:text-6xl md:text-7xl">
        How do you <span className="textGradient">feel</span> today?
      </h4>
      <div className="flex flex-wrap items-stretch gap-4">
        {Object.keys(moods).map((mood, moodIndex) => {
          return (
            <button
              onClick={() => {}}
              className="flex flex-col items-center flex-1 gap-2 p-4 px-5 text-center duration-200 rounded-2xl purpleShadow bg-indigo-50 hover:bg-indigo-100"
              key={moodIndex}
            >
              <p className="text-xl sm:text-2xl md:text-3xl">{moods[mood]}</p>
              <p className="font-mono text-xs font-semibold text-indigo-500 sm:text-sm md:text-base">
                {mood}
              </p>
            </button>
          );
        })}
      </div>
      <Calendar />
    </div>
  );
}
