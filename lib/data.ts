import {
  LinkIcon,
  MessageCircleIcon,
  MailIcon,
  PhoneIcon,
  WifiIcon,
  UserIcon,
  CalendarIcon,
  MapPinIcon,
  CreditCardIcon,
  TrendingUpDownIcon,
} from "lucide-react";
import { actionType } from "./type";

export const availableQRType: actionType[] = [
  {
    title: "Dynamic QR",
    description: "A dynamic qr code that lets you control the content.",
    icon: TrendingUpDownIcon,
    value: "dynamic",
    dynamic: true,
  },
  {
    title: "Website URL",
    description: "Paste a link you want your QR code to open.",
    icon: LinkIcon,
    value: "website",
  },
  {
    title: "Text Message",
    description: "Send a pre-filled text message when scanned.",
    icon: MessageCircleIcon,
    value: "message",
    lock: true,
  },
  {
    title: "Email",
    description: "Send an email to a specified address.",
    icon: MailIcon,
    value: "email",
    lock: true,
  },
  {
    title: "Phone Number",
    description: "Dial a phone number when scanned.",
    icon: PhoneIcon,
    value: "phone",
    lock: true,
  },
  {
    title: "Wi-Fi Connection",
    description: "Connect to a Wi-Fi network automatically.",
    icon: WifiIcon,
    value: "wifi",
    lock: true,
  },
  {
    title: "vCard Contact",
    description: "Save a contact (name, phone, email) to device.",
    icon: UserIcon,
    value: "vcard",
    lock: true,
  },
  {
    title: "Event",
    description: "Add a calendar event with date and time.",
    icon: CalendarIcon,
    value: "event",
    lock: true,
  },
  {
    title: "Location",
    description: "Open a location on Google Maps.",
    icon: MapPinIcon,
    value: "location",
    lock: true,
  },
  {
    title: "Payment Link",
    description: "Link to payment platforms like PayPal or Stripe.",
    icon: CreditCardIcon,
    value: "payment",
    lock: true,
  },
];

export const steps = [
  {
    title: "Pick a QR Type",
  },
  {
    title: "Complete QR Creation",
  },
  {
    title: "Download your QR Code",
  },
];

export const total_steps = 3;

export const howto_steps = [
  {
    title: "Enter Content",
    description: "Paste a URL or text you want your QR code to lead to.",
  },
  {
    title: "Add Label (Optional)",
    description:
      "Label your QR for better recognition. Like 'Scan Me!' under the code.",
  },
  {
    title: "Customize & Generate",
    description:
      "Click Generate QR. You’ll see a live preview to the right as you type.",
  },
  {
    title: "Use Dynamic QR (Advanced)",
    description:
      "Login to access smart redirects based on time, day, or device.",
  },
];
