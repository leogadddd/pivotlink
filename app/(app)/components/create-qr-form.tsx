import React from "react";
import { usePublicCreate } from "@lib/store/public-create-store";
import WebsiteForm from "./forms/website-form";

const Form = () => {
  const { type, nextStep } = usePublicCreate();

  if (!type) return null;

  const generate = () => {
    nextStep();
  };

  switch (type) {
    case "website":
      return <WebsiteForm submit={generate} />;
    default:
      return (
        <div className="max-w-xl mx-auto px-4 mt-4 flex flex-col gap-4 justify-center items-center">
          <h1 className="text-3xl font-semibold text-center mb-6">
            Website QR Code
          </h1>
          <h1 className="flex font-semibold text-red-500 my-6">
            Not Available
          </h1>
        </div>
      );
  }
};

const QRCodeForm = () => {
  return <>{Form()}</>;
};

export default QRCodeForm;
