import { LucideIcon } from "lucide-react";

export type QRType =
  | "dynamic"
  | "website"
  | "message"
  | "email"
  | "phone"
  | "wifi"
  | "vcard"
  | "event"
  | "location"
  | "payment";

export type actionType = {
  title: string;
  description: string;
  icon: LucideIcon;
  value: QRType;
  lock?: boolean;
  dynamic?: boolean;
};

export type PublicCreateStore = {
  step: number;
  type: QRType | null;
  content: string | null;
  custom_message: string | null;

  setStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;

  setType: (type: QRType) => void;
  setContent: (content: string) => void;
  setCustomMessage: (message: string) => void;

  reset: () => void;
};
