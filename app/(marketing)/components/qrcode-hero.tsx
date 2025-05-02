"use client";

import React, { useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Button } from "@components/ui/button";
import { toPng } from "html-to-image";
import { convertToURLFriendly } from "@lib/utils";

export interface QRCodeHeroProps {
  text?: string;
  showContent?: boolean;
  label?: string;
  maxLength?: number;
  showDownloadButton?: boolean;
  showLabel?: boolean;
}

const QRCodeHero = ({
  text = "https://pivotlink.leogadil.com/",
  showContent = true,
  label,
  maxLength = 30,
  showDownloadButton = false,
  showLabel = true,
}: QRCodeHeroProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const fullText = label ?? (showContent ? text : null);

  const truncate = (str: string, length: number) => {
    return str.length > length ? str.slice(0, length) + "..." : str;
  };

  const displayText = fullText ? truncate(fullText, maxLength) : null;

  const downloadCard = async () => {
    if (!cardRef.current) return alert("No QR code to download.");

    const dataUrl = await toPng(cardRef.current, {
      backgroundColor: "#ffffff", // ensure white background
      skipFonts: true, // skip font loading for faster processing

      quality: 1, // set quality to 1 for best resolution
    });

    const link = document.createElement("a");
    link.download = label
      ? `pivotlink-${convertToURLFriendly(label)}.png`
      : "pivotlink-qr.png";
    link.href = dataUrl;
    link.click();
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div
        ref={cardRef}
        className="flex flex-col items-center justify-center space-y-4 p-4 bg-white rounded-lg shadow-md border"
      >
        <div className="bg-white">
          <QRCodeCanvas
            value={text}
            size={200}
            ref={(node) => {
              const canvas = node?.querySelector("canvas");
              if (canvas) canvasRef.current = canvas;
            }}
          />
        </div>
        {showLabel && displayText && (
          <p
            className="font-semibold text-sm text-center select-none text-background"
            title={fullText ?? undefined}
          >
            {displayText}
          </p>
        )}
      </div>
      {showDownloadButton && (
        <Button onClick={downloadCard} className="w-full">
          Download QR as PNG
        </Button>
      )}
    </div>
  );
};

export default QRCodeHero;
