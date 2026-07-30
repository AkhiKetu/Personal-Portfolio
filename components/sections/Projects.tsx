'use client'

import { ExternalLink, Code2 } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory and payment integration.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'AI Content Generator',
    description: 'OpenAI-powered tool for generating high-quality content with real-time streaming.',
    tags: ['React', 'Node.js', 'OpenAI API'],
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description: 'Interactive data visualization dashboard with advanced filtering capabilities.',
    tags: ['React', 'D3.js', 'Firebase'],
    link: '#',
    github: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <Code2 size={24} className="text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg border border-border hover:border-primary transition-all duration-300 overflow-hidden hover:shadow-lg hover:-translate-y-1"
            >
              {/* Project Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <Code2 size={40} className="text-muted-foreground/30" />
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.link}
                    className="flex items-center gap-1 text-primary hover:text-accent transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={14} />
                    View
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                  >
                    <Code2 size={14} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
