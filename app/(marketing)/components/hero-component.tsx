import { Button } from "@components/ui/button";
import Link from "next/link";
import React from "react";
import QRCodeHero from "@components/qrcode-hero";
import {
  AlarmClockIcon,
  CalendarCheckIcon,
  LucideIcon,
  PencilIcon,
  ScanQrCodeIcon,
} from "lucide-react";

const Hero = () => {
  return (
    <div>
      <main className="min-h-screen max-w-4xl mx-auto flex flex-col items-center justify-center px-6 py-20">
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-5xl font-bold tracking-tight">
              Create <span className="text-[var(--teal-forest)]">QR codes</span>{" "}
              that evolve.
            </h1>
            <p className="font-medium">
              PivotLink is a powerful QR code generator that lets you do more —
              dynamic redirects based on time, device, and more.
            </p>
            <div className="flex justify-center md:justify-start gap-4 flex-wrap">
              <Button size="lg" asChild>
                <Link href="/create">Generate QR Code</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/dashboard">Login to Dashboard</Link>
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <QRCodeHero text="https://pivotlink.leogadil.com/" />
          </div>
        </div>

        <section className="mt-32 max-w-4xl w-full space-y-12">
          <h2 className="text-3xl font-bold text-center">Why PivotLink?</h2>
          <div className="grid sm:grid-cols-2 gap-6 text-left">
            <Feature
              icon={AlarmClockIcon}
              title="Time-Based Redirects"
              desc="Show different links in the morning, afternoon, or night."
            />
            <Feature
              icon={CalendarCheckIcon}
              title="Day Rules"
              desc="Weekday vs Weekend links? We’ve got you."
            />
            <Feature
              icon={PencilIcon}
              title="Editable Links"
              desc="Update your QR's destination anytime — no reprint needed."
            />
            <Feature
              icon={ScanQrCodeIcon}
              title="Simple by Default"
              desc="Just want a QR for a link? Done in seconds."
            />
          </div>
        </section>
      </main>
    </div>
  );
};

interface FeatureProps {
  icon?: LucideIcon;
  title: string;
  desc: string;
}

export function Feature({ icon, title, desc }: FeatureProps) {
  const Icon = icon as LucideIcon;
  return (
    <div className="px-6 min-h-24 flex items-center gap-2 border rounded-xl shadow-sm dark:bg-input/30 dark:hover:bg-input/40 dark:hover:transition-colors">
      {icon && <Icon className="w-10 h-10 mr-2 text-[var(--teal-forest)]" />}
      <div className="flex-1 flex flex-col">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm dark:text-foreground/30">{desc}</p>
      </div>
    </div>
  );
}

export default Hero;
