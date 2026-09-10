"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { FadeIn } from "@/components/ui/motion-primitives";
import { useI18n } from "@/lib/i18n";

type Tech = {
  name: string;
  category: string;
  icon: string;
};

const TECH_STACK: Tech[] = [
  { name: "Flutter", category: "Mobile", icon: "flutter" },
  { name: "React", category: "Frontend", icon: "react" },
  { name: "Next.js", category: "Framework", icon: "nextdotjs" },
  { name: "TypeScript", category: "Language", icon: "typescript" },
  { name: "JavaScript", category: "Language", icon: "javascript" },
  { name: "Python", category: "Language", icon: "python" },
  { name: "Node.js", category: "Runtime", icon: "nodedotjs" },
  { name: "Tailwind CSS", category: "Styling", icon: "tailwindcss" },
  { name: "Vue.js", category: "Frontend", icon: "vue-dot-js" },
  { name: "Nuxt.js", category: "Framework", icon: "nuxt" },
  { name: "Dart", category: "Language", icon: "dart" },
  { name: "MongoDB", category: "Database", icon: "mongodb" },
  { name: "PostgreSQL", category: "Database", icon: "postgresql" },
  { name: "Supabase", category: "Backend", icon: "supabase" },
  { name: "Docker", category: "DevOps", icon: "docker" },
  { name: "Git", category: "Tools", icon: "git" },
];

export function TechStack(): ReactNode {
  const { t } = useI18n();

  return (
    <section className="relative w-full" style={{ direction: "ltr" }}>
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-12 lg:px-16">
        <FadeIn className="mb-8 sm:mb-12">
          <div className="flex flex-col items-center gap-3 sm:gap-5 text-center">
            <h2 className="text-2xl font-serif font-medium leading-[1.05] tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
              {t.techStack.title}
            </h2>
            <p className="max-w-md text-sm leading-[1.45] tracking-tight text-foreground/65 sm:text-base md:text-lg lg:text-xl">
              {t.techStack.subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-4">
          {TECH_STACK.map((tech, index) => (
            <FadeIn key={tech.name} delay={Math.min(index * 0.05, 0.3)}>
              <TechCard tech={tech} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechCard({ tech }: { tech: Tech }): ReactNode {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group relative flex flex-col items-center gap-2 rounded-xl border border-foreground/8 bg-background p-3 transition-all duration-300 hover:border-foreground/15 hover:shadow-lg sm:gap-3 sm:rounded-2xl sm:p-4 md:p-6"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/5 transition-colors group-hover:bg-foreground/10 sm:h-12 sm:w-12 sm:rounded-xl md:h-16 md:w-16">
        <img
          src={`https://cdn.simpleicons.org/${tech.icon}`}
          alt={tech.name}
          width={32}
          height={32}
          className="h-5 w-5 opacity-70 transition-opacity group-hover:opacity-100 sm:h-6 sm:w-6 md:h-8 md:w-8 dark:invert"
          draggable={false}
        />
      </div>

      <div className="text-center">
        <p className="text-xs font-semibold tracking-tight text-foreground sm:text-sm md:text-base">
          {tech.name}
        </p>
        <p className="text-[10px] tracking-tight text-foreground/50 sm:text-xs">
          {tech.category}
        </p>
      </div>
    </motion.div>
  );
}
