"use client";

import { total_steps } from "@lib/data";
import { usePublicCreate } from "@lib/store/public-create-store";
import React from "react";

const StepCounter = () => {
  const { step, setStep } = usePublicCreate();

  const onChangeStep = (index: number) => {
    if (step < index) return;

    setStep(index);
  };

  return (
    <div className="max-w-4xl px-4 flex flex-col-reverse md:flex-col gap-10 mt-10 mx-auto items-center">
      <div className="relative w-full flex items-center justify-between px-4 md:px-24">
        {/* Dotted line behind */}
        <div className="absolute top-5 left-4 right-4 md:left-24 md:right-24 border-t-2 border-dotted border-gray-400 z-0 opacity-25" />

        {/* Steps */}
        {Array.from({ length: total_steps }, (_, index) => (
          <div
            key={index + 1}
            role="button"
            onClick={() => onChangeStep(index)}
            className={`relative z-10 flex flex-col items-center select-none ${
              step > index && "cursor-pointer"
            }`}
          >
            <div
              className={`w-10 h-10 select-none border rounded-full flex items-center justify-center text-lg font-bold ${
                index === step
                  ? "text-white bg-[var(--teal-forest)]"
                  : "text-white/50 bg-accent"
              }`}
            >
              {index + 1}
            </div>
            <span className="text-sm mt-2"> Step {index + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepCounter;
