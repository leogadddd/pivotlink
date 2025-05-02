import QRCodeHero from "@components/qrcode-hero";
import { Button } from "@components/ui/button";
import { usePublicCreate } from "@lib/store/public-create-store";
import React from "react";

const QRCodeResult = () => {
  const { content, custom_message } = usePublicCreate();

  if (!content) return;

  return (
    <div className="max-w-2xl mx-auto mt-10 flex gap-4">
      <div className="flex-1">
        <h1 className="text-3xl font-semibold text-left mb-4">
          Your QR Code is ready!
        </h1>
        <p>
          Scan it now to test it out, or hit the button below to download it as
          a PNG.
        </p>

        <p className="mt-16">
          Make this QR Code dynamic — so you can update the destination later —
          by simply:
        </p>

        <div className="flex gap-2 items-center mt-4">
          <Button variant="outline">Login</Button>
          <span>or</span>
          <Button>Sign Up</Button>
        </div>
      </div>
      <div className="w-min mx-auto">
        <QRCodeHero
          text={content}
          label={custom_message!}
          showContent
          showDownloadButton
        />
      </div>
    </div>
  );
};

export default QRCodeResult;
