"use client";

import { Code, Layers, Zap, Globe, Shield, Sparkles } from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import { FadeIn } from "@/components/ui/motion-primitives";
import { useI18n } from "@/lib/i18n";

const FEATURE_ICONS: ComponentType<{ className?: string }>[] = [
  Code,
  Layers,
  Zap,
  Globe,
  Shield,
  Sparkles,
];

export function Features(): ReactNode {
  const { t } = useI18n();

  return (
    <section className="relative w-full" style={{ direction: "ltr" }}>
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-12 lg:px-16">
        <FadeIn className="mb-12 sm:mb-16 md:mb-20">
          <div className="flex flex-col items-center gap-4 sm:gap-6 text-center">
            <h2 className="text-3xl font-serif font-medium leading-[1.05] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              {t.features.title}
            </h2>
            <p className="max-w-2xl text-base leading-relaxed tracking-tight text-foreground/65 sm:text-lg md:text-xl lg:text-2xl">
              {t.features.subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
          {t.features.items.map((feature, index) => {
            const Icon = FEATURE_ICONS[index] ?? Code;
            return (
              <FadeIn key={feature.number} delay={Math.min(index * 0.1, 0.5)}>
                <FeatureCard
                  number={feature.number}
                  icon={Icon}
                  title={feature.title}
                  description={feature.description}
                />
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  number,
  icon: Icon,
  title,
  description,
}: {
  number: string;
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}): ReactNode {
  return (
    <div className="group relative rounded-2xl border border-foreground/8 bg-background p-5 transition-all duration-300 hover:border-wine/20 hover:shadow-xl sm:rounded-3xl sm:p-6 md:p-8">
      <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-wine/10 px-3 py-1 text-sm font-mono text-wine sm:mb-5 sm:rounded-xl sm:px-4 sm:py-1.5 sm:text-base">
        {number}
      </div>

      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-wine/5 text-wine transition-colors group-hover:bg-wine/10 sm:mb-5 sm:h-14 sm:w-14 sm:rounded-2xl md:h-16 md:w-16">
        <Icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
      </div>

      <h3 className="mb-2 text-lg font-semibold tracking-tight text-foreground sm:mb-3 sm:text-xl md:text-2xl">
        {title}
      </h3>
      <p className="text-sm leading-relaxed tracking-tight text-foreground/60 sm:text-base md:text-lg">
        {description}
      </p>
    </div>
  );
}
