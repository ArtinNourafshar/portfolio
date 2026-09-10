"use client";

import type { ReactNode } from "react";

import { HeroCtas } from "./hero-ctas";
import { FadeIn, ScaleUnblur } from "@/components/ui/motion-primitives";
import { PortraitMorph } from "./portrait-morph";
import { useI18n } from "@/lib/i18n";

const PORTRAIT_SRC = "https://i.postimg.cc/0Q4s2jhQ/Aa-Bipn-DR9Yj-SRs-Ua-Dpn0s-A-Aa-Bipn-DRSz-Xx-HOKh-F8PWb-Q.jpg";
const PORTRAIT_HOVER_SRC = "https://i.postimg.cc/0Q4s2jhQ/Aa-Bipn-DR9Yj-SRs-Ua-Dpn0s-A-Aa-Bipn-DRSz-Xx-HOKh-F8PWb-Q.jpg";

export function Hero(): ReactNode {
  const { t } = useI18n();

  return (
    <section className="relative w-full overflow-hidden" style={{ direction: "ltr" }}>
      <div className="mx-auto w-full max-w-7xl px-4 pt-28 pb-12 sm:px-6 sm:pt-32 sm:pb-16 md:px-8 md:pt-40 md:pb-20 lg:px-12 lg:pt-48 lg:pb-24">
        <FadeIn className="mb-6 sm:mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1.5 text-xs font-mono text-foreground/70 sm:px-4 sm:py-2 sm:text-sm md:px-5 md:py-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 sm:h-2 sm:w-2" />
            <span>{t.hero.available}</span>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-8 sm:gap-10 md:flex-row md:items-center md:gap-12 lg:gap-16">
          <div className="flex-1 flex flex-col gap-5 text-center sm:gap-6 md:text-left lg:gap-8">
            <h1 className="text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              <span className="block">{t.hero.greeting}</span>
              <span className="block">{t.hero.title1}</span>
              <span className="block text-foreground/40">{t.hero.title2}</span>
            </h1>

            <p className="max-w-lg text-sm leading-relaxed tracking-tight text-foreground/60 sm:text-base md:text-lg lg:text-xl mx-auto md:mx-0">
              {t.hero.description}
            </p>

            <FadeIn delay={0.2}>
              <div className="rounded-xl border border-foreground/10 bg-foreground/5 p-3 font-mono text-xs sm:p-4 sm:text-sm md:p-5">
                <div className="flex items-center gap-2 text-foreground/40">
                  <span className="text-green-500">$</span>
                  <span>npx create-portfolio@latest</span>
                </div>
                <div className="mt-2 text-foreground/60">
                  <span className="text-foreground/40">// {t.hero.terminal}</span>
                </div>
              </div>
            </FadeIn>

            <div className="flex justify-center md:justify-start">
              <HeroCtas />
            </div>
          </div>

          <ScaleUnblur className="w-full flex justify-center md:w-auto md:flex-none">
            <div className="relative aspect-square w-56 overflow-hidden rounded-2xl border border-foreground/8 bg-background p-1 shadow-sm sm:w-64 sm:rounded-3xl sm:p-1.5 md:w-80 lg:w-96">
              <div className="relative h-full w-full overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl">
                <PortraitMorph
                  srcA={PORTRAIT_SRC}
                  srcB={PORTRAIT_HOVER_SRC}
                  alt="Artin portrait"
                />
              </div>
            </div>
          </ScaleUnblur>
        </div>
      </div>
    </section>
  );
}
