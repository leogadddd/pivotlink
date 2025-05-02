"use client";

import React from "react";
import { usePublicCreate } from "@lib/store/public-create-store";
import { QRType } from "@lib/type";
import { availableQRType } from "@lib/data";
import { LockIcon } from "lucide-react";

const QRTypePicker = () => {
  const { setType, nextStep } = usePublicCreate();

  const handleActionClick = (value: QRType) => {
    setType(value);
    nextStep();
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {availableQRType.map((action, index) => (
          <div
            key={index}
            className={`relative select-none border-2 border-accent/30 rounded-xl p-4 flex flex-col items-center justify-center transition
    ${
      action.dynamic
        ? "border-accent/70 hover:border-yellow-300/60"
        : !action.lock && "border-accent/30 hover:border-[var(--teal-forest)]"
    }
    ${!action.lock && "cursor-pointer"}
  `}
            role="button"
            onClick={() => {
              if (action.lock) return;
              handleActionClick(action.value);
            }}
          >
            <action.icon
              className={`w-6 h-6 mb-2 ${
                action.dynamic
                  ? "text-yellow-400 -rotate-90"
                  : "text-[var(--teal-forest)]"
              }`}
            />
            <h3
              className={`text-sm font-semibold text-center ${
                action.dynamic ? "text-yellow-400" : ""
              }`}
            >
              {action.title}
            </h3>
            <p className="text-xs text-center text-muted-foreground mt-2 px-4">
              {action.description}
            </p>

            {action.dynamic && (
              <span className="absolute top-2 left-2 border-yellow-400 text-yellow-400 text-[10px] font-bold px-2 py-0.5 rounded-full">
                PREMIUM
              </span>
            )}

            {action.lock && (
              <div className="absolute inset-1 flex flex-col items-center justify-center bg-muted-foreground/5 backdrop-blur-xs rounded-lg">
                <LockIcon className="w-8 h-8 text-white" />
                <h1 className="text-sm mt-2">Not Available</h1>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QRTypePicker;
