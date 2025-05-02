import React from "react";
import { Button } from "@components/ui/button";
import Link from "next/link";

const tabs = [
  {
    name: "Create",
    href: "/create",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
];

const NavigationBar = () => {
  return (
    <nav className="flex items-center justify-between p-4 max-w-4xl mx-auto">
      <Logo />
      <div className="flex items-center space-x-2">
        {tabs.map((tab) => (
          <Button asChild key={tab.name} variant="ghost">
            <Link key={tab.name} href={tab.href} className="font-semibold">
              {tab.name}
            </Link>
          </Button>
        ))}
      </div>
      <div>
        <Button variant={"outline"} size={"sm"}>
          Dashboard
        </Button>
      </div>
    </nav>
  );
};

const Logo = () => {
  return (
    <Link href="/" className="text-2xl font-bold">
      Pivot<span className="text-[var(--teal-forest)]">Link</span>
    </Link>
  );
};

export default NavigationBar;
