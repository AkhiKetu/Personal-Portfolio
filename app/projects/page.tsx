'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { FaGithub } from 'react-icons/fa'
import { ExternalLink } from 'lucide-react'
import { projects } from '@/app/data/project'

export default function ProjectsPage() {
  const [activeProjectId, setActiveProjectId] = useState<
    number | null
  >(null)

  return (
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
            ease: 'easeOut',
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
            ease: 'easeOut',
          }}
          className="relative mx-auto grid w-full max-w-2xl grid-cols-1 gap-4 px-1 py-3 md:grid-cols-2"
        >
          {projects.map((project) => {
            const isActive =
              activeProjectId === project.id

            const anotherProjectIsActive =
              activeProjectId !== null && !isActive

            return (
              <motion.article
                key={project.id}
                tabIndex={0}
                onHoverStart={() =>
                  setActiveProjectId(project.id)
                }
                onHoverEnd={() =>
                  setActiveProjectId(null)
                }
                onFocus={() =>
                  setActiveProjectId(project.id)
                }
                onBlur={() =>
                  setActiveProjectId(null)
                }
                animate={{
                  scale: isActive
                    ? 1.04
                    : anotherProjectIsActive
                      ? 0.98
                      : 1,

                  y: isActive ? -7 : 0,

                  opacity: anotherProjectIsActive
                    ? 0.35
                    : 1,

                  filter: anotherProjectIsActive
                    ? 'blur(3px)'
                    : 'blur(0px)',
                }}
                transition={{
                  scale: {
                    type: 'spring',
                    stiffness: 280,
                    damping: 24,
                  },

                  y: {
                    type: 'spring',
                    stiffness: 280,
                    damping: 24,
                  },

                  opacity: {
                    duration: 0.2,
                    ease: 'easeOut',
                  },

                  filter: {
                    duration: 0.2,
                    ease: 'easeOut',
                  },
                }}
                whileTap={{
                  scale: 0.98,
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
                      ? 'z-20 border-primary/70 shadow-2xl'
                      : 'z-0 border-border shadow-sm'
                  }
                `}
              >
                {/* Project Screenshot */}
                <div className="relative aspect-video overflow-hidden border-b border-border bg-muted">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    priority={project.id <= 2}
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
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
                      <li
                        key={feature}
                        className="flex items-start gap-2"
                      >
                        <span className="mt-0.5 text-primary">
                          •
                        </span>

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technology Icons */}
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {project.technologies.map(
                      (technology) => {
                        const Icon = technology.icon

                        return (
                          <div
                            key={technology.name}
                            title={technology.name}
                            className="cursor-default transition-transform duration-200 ease-out hover:-translate-y-1 hover:scale-110"
                          >
                            <Icon
                              size={18}
                              className={
                                technology.color
                              }
                            />
                          </div>
                        )
                      },
                    )}
                  </div>

                  {/* Project Links */}
                  <div className="mt-auto flex items-center gap-2 pt-5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) =>
                        event.stopPropagation()
                      }
                      className="inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-border bg-muted px-2.5 py-1.5 text-xs font-semibold transition-[transform,border-color,background-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/10"
                    >
                      <FaGithub size={14} />
                      GitHub
                    </a>

                    <a
                      href={project.preview}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) =>
                        event.stopPropagation()
                      }
                      className="inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-border bg-muted px-2.5 py-1.5 text-xs font-semibold transition-[transform,border-color,background-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/10"
                    >
                      <ExternalLink size={14} />
                      Preview
                    </a>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </main>
  )
}