"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X, ArrowRight } from "lucide-react";
import { PROJECTS, type Project } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";

const ease = [0.22, 1, 0.36, 1] as const;

const spanClass: Record<Project["size"], string> = {
  tall: "md:row-span-2",
  wide: "md:col-span-2",
  regular: "",
};
const aspectClass: Record<Project["size"], string> = {
  tall: "aspect-[3/4] md:h-full",
  wide: "aspect-[16/10] md:aspect-[2/1]",
  regular: "aspect-[4/3]",
};

function Card({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) {
  return (
    <motion.button
      layout
      onClick={() => onOpen(project)}
      data-cursor="View"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, ease }}
      className={`group relative block w-full overflow-hidden rounded-3xl bg-charcoal-900 text-left ${spanClass[project.size]}`}
    >
      <div className={`relative w-full overflow-hidden ${aspectClass[project.size]}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={`${project.client} ${project.category.toLowerCase()} by Deevy Signs — ${project.industry}, Ireland`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent opacity-90" />
        {/* crimson hover overlay */}
        <div className="absolute inset-0 bg-crimson/0 mix-blend-multiply transition-colors duration-500 group-hover:bg-crimson/20" />
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
        <div>
          <span className="mb-2 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white/90 backdrop-blur">
            {project.category}
          </span>
          <h3 className="text-xl font-extrabold leading-tight text-white md:text-2xl">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-white/60">{project.client}</p>
        </div>
        <span className="flex h-11 w-11 shrink-0 translate-y-2 items-center justify-center rounded-full bg-crimson text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </div>
    </motion.button>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-charcoal-950/80 p-4 backdrop-blur-md md:p-8"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 60, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ duration: 0.5, ease }}
        className="relative my-auto w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-charcoal-950/40 text-white backdrop-blur transition-colors hover:bg-crimson"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Hero image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.gallery[0]}
            alt={`${project.client} — ${project.category} project by Deevy Signs, ${project.industry}`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 md:p-10">
            <span className="mb-3 inline-block rounded-full bg-crimson px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white">
              {project.category}
            </span>
            <h3 className="display text-3xl text-white md:text-5xl">
              {project.title}
            </h3>
          </div>
        </div>

        <div className="grid gap-8 p-6 md:grid-cols-3 md:p-10">
          {/* Meta */}
          <div className="space-y-6 md:border-r md:border-charcoal-900/10 md:pr-8">
            {[
              ["Client", project.client],
              ["Industry", project.industry],
              ["Year", project.year],
            ].map(([k, v]) => (
              <div key={k}>
                <p className="text-xs font-bold uppercase tracking-widest text-charcoal-900/40">
                  {k}
                </p>
                <p className="mt-1 text-lg font-bold text-charcoal-900">{v}</p>
              </div>
            ))}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-charcoal-900/40">
                Scope
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {project.scope.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-crimson/20 bg-crimson/5 px-3 py-1 text-xs font-semibold text-crimson"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Body + gallery */}
          <div className="md:col-span-2">
            <p className="text-xl font-medium leading-relaxed text-charcoal-900/80">
              {project.summary}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {project.gallery.map((src, i) => (
                <div
                  key={i}
                  className={`overflow-hidden rounded-2xl ${
                    i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`${project.client} ${project.category.toLowerCase()} by Deevy Signs, Portlaoise — detail ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </div>

            <a
              href="#contact"
              onClick={onClose}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-charcoal-900 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-crimson"
            >
              Start a project like this <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const CATEGORIES = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const [filter, setFilter] = useState("All");

  const visible =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative bg-white py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Selected Work"
            title={
              <>
                Brand campaigns,
                <br />
                not just signs
              </>
            }
            description="Every project is treated as a branding moment. Here's a selection of recent work delivered across Ireland."
          />
          <div className="hidden md:block">
            <MagneticButton href="#contact" variant="dark">
              Start your project <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="mt-12 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative rounded-full px-5 py-2.5 text-sm font-bold transition-colors duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-charcoal-900/60 hover:text-charcoal-900"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 -z-0 rounded-full bg-charcoal-900"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        <motion.div
          layout
          className="mt-8 grid auto-rows-[minmax(0,1fr)] grid-cols-1 gap-5 md:grid-cols-3 md:[grid-auto-rows:300px]"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <Card key={p.id} project={p} onOpen={setActive} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {active && (
          <ProjectModal project={active} onClose={() => setActive(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
