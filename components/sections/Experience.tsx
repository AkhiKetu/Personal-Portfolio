'use client'

import { Briefcase } from 'lucide-react'

const experiences = [
  {
    id: 1,
    company: 'Tech Company A',
    position: 'Senior Full Stack Developer',
    period: 'Jan 2024 - Present',
    location: 'Remote',
    status: 'Working',
    description: 'Leading development of scalable web applications with React and Node.js',
  },
  {
    id: 2,
    company: 'StartUp B',
    position: 'Full Stack Developer',
    period: 'Jun 2023 - Dec 2023',
    location: 'San Francisco, USA',
    description: 'Built and maintained full-stack applications using modern technologies',
  },
  {
    id: 3,
    company: 'Company C',
    position: 'Frontend Developer',
    period: 'Jan 2023 - May 2023',
    location: 'New York, USA',
    description: 'Developed responsive web interfaces and optimized performance',
  },
]

export default function Experience() {
  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <Briefcase size={24} className="text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>

        {/* Experience List */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="group">
              {/* Timeline Dot and Line */}
              <div className="flex gap-6">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary mt-2" />
                  {index !== experiences.length - 1 && (
                    <div className="w-0.5 h-24 bg-border mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-6 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-primary">{exp.company}</h3>
                      <p className="text-base font-medium">{exp.position}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</p>
                      <p className="text-xs text-muted-foreground">{exp.location}</p>
                    </div>
                  </div>
                  {exp.status && (
                    <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded mb-2">
                      ● {exp.status}
                    </span>
                  )}
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
