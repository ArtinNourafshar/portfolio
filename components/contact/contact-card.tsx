"use client";

import { Coffee, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { ContactCardCtas } from "./contact-card-ctas";
import { FadeIn } from "@/components/ui/motion-primitives";
import { ShaderFlow } from "../shaders/shader-flow";
import { useI18n } from "@/lib/i18n";

const CARD_FADE_MASK =
  "radial-gradient(ellipse 90% 110% at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 40%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.4) 90%, rgba(0,0,0,0.15) 100%)";

export function ContactCard(): ReactNode {
  const { t } = useI18n();

  return (
    <section className="mx-auto my-8 w-full max-w-7xl px-5 sm:my-12 sm:px-8 md:my-16 md:px-12 lg:my-20 lg:px-16" style={{ direction: "ltr" }}>
      <FadeIn>
        <div className="relative w-full overflow-hidden rounded-2xl border border-foreground/8 bg-background p-1 shadow-sm sm:rounded-3xl sm:p-1.5 md:rounded-4xl">
          <div className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl md:rounded-[1.6rem]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-45 dark:opacity-25"
              style={{
                WebkitMaskImage: CARD_FADE_MASK,
                maskImage: CARD_FADE_MASK,
              }}
            >
              <ShaderFlow scale={3} brightness={3}/>
            </div>

            <div className="relative grid gap-6 p-4 sm:gap-8 sm:p-6 md:grid-cols-[1.2fr_1fr] md:items-stretch md:gap-6 md:p-6 lg:gap-10">
              <div className="flex flex-col gap-4 sm:gap-5">
                <h2 className="text-xl font-serif font-medium leading-[1.05] tracking-tight text-foreground sm:text-2xl md:text-3xl lg:text-4xl">
                  {t.contact.title}
                </h2>
                <p className="max-w-md text-sm leading-[1.4] tracking-tight text-foreground/65 sm:text-base md:text-lg lg:text-xl">
                  {t.contact.description}
                </p>
                <ContactCardCtas />
              </div>

              <div className="border-foreground/8 flex flex-col items-center justify-center gap-4 rounded-xl border bg-background p-4 sm:gap-6 sm:rounded-2xl sm:p-6 md:p-8">
                <div className="flex items-center gap-2 opacity-75 sm:gap-3">
                  <SocialIcon
                    href="mailto:artinnourafshar1387@gmail.com"
                    label="Email"
                    lucideIcon={Mail}
                  />
                  <SocialIcon
                    href="https://github.com/artinNourafshar"
                    label="GitHub"
                    imageSrc="/github.svg"
                  />
                  <SocialIcon
                    href="https://www.linkedin.com"
                    label="LinkedIn"
                    imageSrc="/linkedin.svg"
                  />
                </div>

                <Link
                  href="https://donofa.ir/artindev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring group inline-flex items-center gap-2 rounded-xl bg-wine px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-wine/90 hover:shadow-lg sm:gap-2.5 sm:rounded-2xl sm:px-5 sm:py-3 sm:text-base"
                >
                  <Coffee className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                  {t.footer.donate}
                </Link>

                <div className="flex flex-col items-center gap-0.5 text-center sm:gap-1">
                  <p className="text-[10px] tracking-tight text-foreground/70 sm:text-xs md:text-sm">
                    {t.footer.copyright}
                  </p>
                  <p className="text-[9px] tracking-tight text-foreground/45 sm:text-[10px] sm:text-xs">
                    {t.footer.madeBy}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

function SocialIcon({
  href,
  label,
  lucideIcon: LucideIcon,
  imageSrc,
}: {
  href: string;
  label: string;
  lucideIcon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  imageSrc?: string;
}): ReactNode {
  const isExternal = href.startsWith("http");
  const props = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <Link
      href={href}
      aria-label={label}
      className="border-foreground/10 hover:border-wine/30 focus-ring inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-background text-foreground/70 transition-all duration-300 hover:text-wine hover:shadow-md sm:h-11 sm:w-11 md:h-12 md:w-12"
      {...props}
    >
      {LucideIcon ? (
        <LucideIcon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.5} aria-hidden="true" />
      ) : imageSrc ? (
        <Image
          src={imageSrc}
          alt=""
          width={14}
          height={14}
          aria-hidden="true"
          className="max-h-4 max-w-4 object-contain sm:max-h-5 sm:max-w-5 dark:invert"
        />
      ) : null}
    </Link>
  );
}
