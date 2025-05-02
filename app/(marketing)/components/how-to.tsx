// components/HowToUse.tsx
"use client";

import React from "react";
import { Feature } from "./hero-component";
import { Box } from "lucide-react";
import { howto_steps } from "@lib/data";

const HowToUse = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 space-y-6">
      <h2 className="text-2xl font-semibold text-center">How It Works</h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto">
        It’s super simple. Whether you&apos;re creating a static link or a
        dynamic redirection QR, we’ve made it smooth and straightforward.
      </p>

      <div className="grid md:grid-cols-2 gap-6 pt-6">
        {howto_steps.map((step, i) => (
          <Feature
            key={i}
            icon={Box}
            title={step.title}
            desc={step.description}
          />
        ))}
      </div>
    </section>
  );
};

export default HowToUse;
