'use client'

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs', 'Express'],
  },
  {
    category: 'Tools & DevOps',
    skills: ['Git', 'Docker', 'AWS', 'Vercel', 'GitHub', 'VS Code'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <p className="text-lg text-muted-foreground">Technologies and tools I work with</p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.category} className="space-y-4">
              <h3 className="text-lg font-bold text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-card border border-border rounded-full text-sm font-medium hover:border-primary hover:bg-accent/10 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
