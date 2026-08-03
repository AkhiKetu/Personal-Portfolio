"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { FaGithub } from "react-icons/fa";
import { ExternalLink, Laptop, X } from "lucide-react";
import { projects, type Project } from "@/app/data/project";

export default function ProjectsPage() {
  const [activeProjectId, setActiveProjectId] = useState<number | null>(null);

  const [setupProject, setSetupProject] = useState<Project | null>(null);

  // Close the floating note with Escape
  // and stop background scrolling while it is open.
  useEffect(() => {
    if (!setupProject) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSetupProject(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [setupProject]);

  return (
    <>
      <main className="min-h-screen px-4 pb-16 pt-28 md:pt-32">
        <div className="mx-auto w-full max-w-2xl">
          {/* Page Heading */}
          <motion.div
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
            className="mb-7 text-center"
          >
            <h1 className="text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
              Projects
            </h1>
          </motion.div>

          {/* All Project Cards */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="relative mx-auto grid w-full max-w-2xl grid-cols-1 gap-4 px-1 py-3 md:grid-cols-2"
          >
            {projects.map((project) => {
              const isActive = activeProjectId === project.id;

              const anotherProjectIsActive =
                activeProjectId !== null && !isActive;

              return (
                <motion.article
                  key={project.id}
                  tabIndex={0}
                  onHoverStart={() => setActiveProjectId(project.id)}
                  onHoverEnd={() => setActiveProjectId(null)}
                  onFocus={() => setActiveProjectId(project.id)}
                  onBlur={() => setActiveProjectId(null)}
                  animate={{
                    scale: isActive ? 1.04 : anotherProjectIsActive ? 0.98 : 1,

                    y: isActive ? -7 : 0,

                    opacity: anotherProjectIsActive ? 0.35 : 1,

                    filter: anotherProjectIsActive ? "blur(3px)" : "blur(0px)",
                  }}
                  transition={{
                    scale: {
                      type: "spring",
                      stiffness: 280,
                      damping: 24,
                    },

                    y: {
                      type: "spring",
                      stiffness: 280,
                      damping: 24,
                    },

                    opacity: {
                      duration: 0.2,
                      ease: "easeOut",
                    },

                    filter: {
                      duration: 0.2,
                      ease: "easeOut",
                    },
                  }}
                  className={`
                    group
                    relative
                    flex
                    cursor-pointer
                    flex-col
                    overflow-hidden
                    rounded-lg
                    border
                    bg-card
                    outline-none
                    transition-[border-color,box-shadow]
                    duration-200
                    ease-out
                    focus-visible:ring-2
                    focus-visible:ring-primary
                    ${
                      isActive
                        ? "z-20 border-primary/70 shadow-2xl"
                        : "z-0 border-border shadow-sm"
                    }
                  `}
                >
                  {/* Project Screenshot */}
                  <div
                    className={`relative overflow-hidden border-b border-border bg-muted ${
                      project.fit === "contain" ? "h-72 p-2" : "aspect-video"
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      priority={project.id <= 2}
                      sizes="(max-width: 768px) 100vw, 320px"
                      className={`transition-transform duration-500 ease-out group-hover:scale-105 ${
                        project.fit === "contain"
                          ? "object-contain"
                          : "object-cover"
                      }`}
                    />
                  </div>

                  {/* Project Information */}
                  <div className="flex flex-1 flex-col p-4">
                    <h2 className="text-center text-lg font-bold transition-colors duration-200 group-hover:text-primary">
                      {project.title}
                    </h2>

                    <p className="mt-1 text-center text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    {/* Project Features */}
                    <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <span className="mt-0.5 text-primary">•</span>

                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technology Icons */}
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      {project.technologies.map((technology) => {
                        const Icon = technology.icon;

                        return (
                          <div
                            key={technology.name}
                            title={technology.name}
                            className="cursor-default transition-transform duration-200 ease-out hover:-translate-y-1 hover:scale-110"
                          >
                            <Icon size={18} className={technology.color} />
                          </div>
                        );
                      })}
                    </div>

                    {/* Project Links */}
                    <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        // onPointerDown={(event) => event.stopPropagation()}
                        onClick={(event) => event.stopPropagation()}
                        className="inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-border bg-muted px-2.5 py-1.5 text-xs font-semibold transition-[transform,border-color,background-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/10"
                      >
                        <FaGithub size={14} />
                        GitHub
                      </a>

                      {/* Normal deployed project */}
                      {project.preview && (
                        <a
                          href={project.preview}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(event) => event.stopPropagation()}
                          className="inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-border bg-muted px-2.5 py-1.5 text-xs font-semibold transition-[transform,border-color,background-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/10"
                        >
                          <ExternalLink size={14} />
                          Preview
                        </a>
                      )}

                      {/* Local-only project */}
                      {!project.preview && project.localSetup && (
                        <button
                          type="button"
                          onClick={(event) => {
                            event.stopPropagation();
                            setSetupProject(project);
                          }}
                          className="inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-border bg-muted px-2.5 py-1.5 text-xs font-semibold transition-[transform,border-color,background-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/10"
                        >
                          <Laptop size={14} />
                          Run Locally
                        </button>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </main>

      {/* Floating XAMPP Setup Note */}
      <AnimatePresence>
        {setupProject?.localSetup && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            onClick={() => setSetupProject(null)}
            className="fixed inset-0 z-100 flex cursor-zoom-out items-center justify-center overflow-y-auto bg-background/75 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 35,
                scale: 0.92,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 25,
                scale: 0.94,
              }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 25,
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative my-auto w-full max-w-xl cursor-default rounded-xl border border-border bg-card p-5 shadow-2xl md:p-7"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSetupProject(null)}
                aria-label="Close local setup instructions"
                className="absolute right-3 top-3 flex size-9 cursor-pointer items-center justify-center rounded-full border border-border bg-background text-foreground transition-[transform,background-color] duration-200 hover:rotate-90 hover:bg-muted"
              >
                <X size={18} />
              </button>

              <div className="pr-10">
                <p className="text-xs font-bold uppercase tracking-wider text-primary">
                  Local project
                </p>

                <h2 className="mt-1 text-xl font-bold md:text-2xl">
                  {setupProject.localSetup.title}
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Follow these steps to download and run the project on your
                  computer.
                </p>
              </div>

              {/* Clone command */}
              <div className="mt-5">
                <p className="mb-2 text-sm font-bold">
                  1. Clone the repository
                </p>

                <code className="block overflow-x-auto rounded-md border border-border bg-muted p-3 text-xs">
                  {setupProject.localSetup.cloneCommand}
                </code>
              </div>

              {/* XAMPP steps */}
              <div className="mt-5">
                <p className="mb-2 text-sm font-bold">2. Run with XAMPP</p>

                <ol className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {setupProject.localSetup.steps.map((step, index) => (
                    <li key={step} className="flex items-start gap-2">
                      <span className="font-bold text-primary">
                        {index + 1}.
                      </span>

                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Local URL */}
              <div className="mt-5">
                <p className="mb-2 text-sm font-bold">3. Open the project</p>

                <code className="block overflow-x-auto rounded-md border border-border bg-muted p-3 text-xs">
                  {setupProject.localSetup.localUrl}
                </code>
              </div>

              {/* Update project */}
              <div className="mt-5">
                <p className="mb-2 text-sm font-bold">Pull future updates</p>

                <code className="block overflow-x-auto rounded-md border border-border bg-muted p-3 text-xs">
                  {setupProject.localSetup.updateCommand}
                </code>
              </div>

              {/* Important note */}
              <p className="mt-5 rounded-md border border-primary/20 bg-primary/5 p-3 text-xs leading-relaxed text-muted-foreground">
                <strong className="text-foreground">Note:</strong>{" "}
                {setupProject.localSetup.note}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
