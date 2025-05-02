"use client";

import React, { useEffect } from "react";
import HowToUse from "@components/how-to";
import StepCounter from "@components/steps-counter";
import QRTypePicker from "@components/qr-type-picker";
import { usePublicCreate } from "@lib/store/public-create-store";
import QRCodeForm from "@components/create-qr-form";
import QRCodeResult from "@components/qrcode-result";
import { steps } from "@/lib/data";

const CreatePage = () => {
  const { step, reset } = usePublicCreate();

  // Render the correct section based on the step
  const renderSection = () => {
    switch (step) {
      case 0:
        return <QRTypePicker />;
      case 1:
        return <QRCodeForm />;
      case 2:
        return <QRCodeResult />;
      default:
        return null; // Optionally return a fallback or a 404 message
    }
  };

  useEffect(() => {
    reset();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-semibold text-center mt-10">
        {steps[step].title}
      </h1>
      <div className="min-h-[400px]">
        <StepCounter />
        {renderSection()}
      </div>
      <div className="bg-foreground/15 h-[1px] w-full my-10 max-w-4xl mx-auto" />
      <HowToUse />
    </div>
  );
};

export default CreatePage;
