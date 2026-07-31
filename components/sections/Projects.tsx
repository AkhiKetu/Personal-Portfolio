'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { FaGithub } from 'react-icons/fa'
import { ExternalLink } from 'lucide-react'
import { projects } from '@/app/data/project'

export default function Projects() {
  const [activeProjectId, setActiveProjectId] = useState<
    number | null
  >(null)

  // Only the first two projects appear on the homepage.
  const homepageProjects = projects.slice(0, 2)

  return (
    <section
      id="projects"
      className="px-4 pb-12 pt-5 md:pb-14 md:pt-6"
    >
      <div className="mx-auto w-full max-w-3xl">
        {/* Section Heading */}
        <div className="mb-6">
          <h2 className="text-3xl font-extrabold uppercase tracking-tight">
            Projects
          </h2>
        </div>

        {/* Project Cards */}
        <div className="relative mx-auto grid w-full max-w-2xl grid-cols-1 gap-4 px-1 py-3 md:grid-cols-2">
          {homepageProjects.map((project) => {
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
                    ? 1.05
                    : anotherProjectIsActive
                      ? 0.97
                      : 1,

                  y: isActive ? -8 : 0,

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
                    priority
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Project Information */}
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="text-center text-lg font-bold transition-colors duration-200 group-hover:text-primary">
                    {project.title}
                  </h3>

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
                  <div className="mt-4 flex items-center gap-2">
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
                      Browser
                    </a>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Show All Projects Button */}
        <div className="mt-8 flex justify-center">
          <motion.div
            whileHover={{
              y: -3,
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            <Link
              href="/projects"
              className="inline-flex cursor-pointer items-center justify-center rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold shadow-sm transition-[border-color,background-color,box-shadow] duration-200 ease-out hover:border-primary/60 hover:bg-primary/10 hover:shadow-lg"
            >
              Show All Projects
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}