"use client";

import { ArrowRight } from "lucide-react";
import { LayoutGroup, motion } from "motion/react";
import Link from "next/link";
import type { ReactNode } from "react";

import { ContactButton } from "./contact-button";

const EASE = [0.22, 1, 0.36, 1] as const;

export function ContactCardCtas(): ReactNode {
  return (
    <LayoutGroup>
      <motion.div
        layout
        transition={{ layout: { duration: 0.55, ease: EASE } }}
        className="mt-4 flex flex-wrap items-center gap-4 sm:mt-6 sm:gap-5"
      >
        <ContactButton />

        <motion.div
          layout
          transition={{ layout: { duration: 0.55, ease: EASE } }}
        >
          <Link
            href="/projects"
            className="border border-foreground/10 focus-ring group inline-flex cursor-pointer items-center gap-2.5 rounded-2xl bg-background px-7 py-3.5 text-sm font-medium text-foreground shadow-lg transition-all duration-300 hover:bg-foreground/5 hover:shadow-xl sm:px-8 sm:py-4 sm:text-base"
          >
            See projects
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5"
              aria-hidden="true"
            />
          </Link>
        </motion.div>
      </motion.div>
    </LayoutGroup>
  );
}
