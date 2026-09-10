"use client";

import {
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/ui/motion-primitives";
import { useI18n } from "@/lib/i18n";

type Project = {
  id: string;
  titleKey: string;
  descriptionKey: string;
  metaKey: string;
  imageRatio: number;
  image: string;
  imageAlt: string;
  link: string;
};

const PROJECTS: Project[] = [
  {
    id: "flutterfilm",
    titleKey: "projects.items.0.title",
    descriptionKey: "projects.items.0.description",
    metaKey: "projects.items.0.meta",
    imageRatio: 16 / 9,
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&h=675&fit=crop&q=90",
    imageAlt: "FlutterFilm App - Movie streaming application",
    link: "https://flutterfilm.vercel.app",
  },
  {
    id: "macode",
    titleKey: "projects.items.2.title",
    descriptionKey: "projects.items.2.description",
    metaKey: "projects.items.2.meta",
    imageRatio: 16 / 9,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=675&fit=crop&q=90",
    imageAlt: "Macode Team - Developer collaboration platform",
    link: "http://macodeteam.ir",
  },
  {
    id: "taskamon",
    titleKey: "projects.items.1.title",
    descriptionKey: "projects.items.1.description",
    metaKey: "projects.items.1.meta",
    imageRatio: 16 / 9,
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&h=675&fit=crop&q=90",
    imageAlt: "Taskamon - Project management application",
    link: "#",
  },
  {
    id: "portfolio",
    titleKey: "projects.items.3.title",
    descriptionKey: "projects.items.3.description",
    metaKey: "projects.items.3.meta",
    imageRatio: 16 / 9,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop&q=90",
    imageAlt: "Portfolio Website - Modern developer portfolio",
    link: "#",
  },
];

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  return path.split(".").reduce((acc: unknown, key: string) => {
    if (acc && typeof acc === "object" && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key];
    }
    return path;
  }, obj) as string;
}

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  const { t } = useI18n();
  const items = viewMoreVisible ? PROJECTS.slice(0, 4) : PROJECTS;

  return (
    <section className="relative w-full" style={{ direction: "ltr" }}>
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 md:px-12 lg:px-16">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-3 sm:gap-5 pt-8 pb-8 text-center sm:pt-12 sm:pb-10 md:pt-16 md:pb-12">
            <h2 className="text-2xl font-serif font-medium leading-[1.05] tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
              {t.projects.title}
            </h2>
            <p className="max-w-md text-sm leading-[1.45] tracking-tight text-foreground/65 sm:text-base md:text-lg lg:text-xl">
              {t.projects.subtitle}
            </p>
          </FadeIn>
        ) : null}

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
          {items.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {viewMoreVisible ? (
          <div className="mt-8 flex justify-center sm:mt-12 md:mt-16">
            <Link
              href="/projects"
              className="border border-foreground/8 focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5 sm:px-5 sm:py-2.5"
            >
              {t.projects.title}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): ReactNode {
  const { t, dir } = useI18n();
  const isRtl = dir === "rtl";
  const title = getNestedValue(t, project.titleKey);
  const description = getNestedValue(t, project.descriptionKey);
  const meta = getNestedValue(t, project.metaKey);

  return (
    <FadeIn
      delay={Math.min(index * 0.06, 0.3)}
    >
      <article className="project-card flex flex-col gap-4 rounded-2xl border border-foreground/8 bg-background p-3 transition-all duration-300 hover:border-wine/20 hover:shadow-xl sm:gap-5 sm:rounded-3xl sm:p-4 md:p-5">
        <div
          className="project-card__image ring-foreground/5 relative w-full overflow-hidden rounded-xl bg-foreground/5 ring-1 sm:rounded-2xl"
          style={{ aspectRatio: project.imageRatio }}
        >
          <div className="project-card__image-inner">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
              className="object-cover"
              priority={index < 2}
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 px-1 pb-1 sm:gap-4">
          <h3 className="text-lg font-semibold leading-[1.2] tracking-tight text-foreground sm:text-xl md:text-2xl">
            {title}
          </h3>
          <p className="text-sm leading-relaxed tracking-tight text-foreground/65 sm:text-base md:text-lg">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between px-1 pb-1.5 sm:pb-2">
          <p className="text-xs tracking-tight text-foreground/50 sm:text-sm">
            {meta}
          </p>
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring group inline-flex items-center gap-2 rounded-xl bg-wine px-4 py-2 text-xs font-medium text-white transition-all duration-300 hover:bg-wine/90 hover:shadow-lg sm:gap-2.5 sm:rounded-2xl sm:px-5 sm:py-2.5 sm:text-sm"
          >
            {t.projects.viewProject}
            <ExternalLink className={`h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 sm:h-4 sm:w-4 ${isRtl ? 'rotate-180' : ''}`} aria-hidden="true" />
          </Link>
        </div>
      </article>
    </FadeIn>
  );
}
