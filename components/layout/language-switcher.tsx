"use client";

import { Globe } from "lucide-react";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import { useI18n } from "@/lib/i18n";

export function LanguageSwitcher(): ReactNode {
  const { locale, setLocale } = useI18n();

  return (
    <motion.button
      type="button"
      onClick={() => setLocale(locale === "en" ? "fa" : "en")}
      aria-label={locale === "en" ? "Switch to Persian" : "Switch to English"}
      className="focus-ring relative inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-background ring-1 ring-foreground/10 transition-all duration-300 hover:ring-wine/30 sm:h-10 sm:w-10"
    >
      <Globe className="h-4 w-4 text-foreground" aria-hidden="true" />
    </motion.button>
  );
}
