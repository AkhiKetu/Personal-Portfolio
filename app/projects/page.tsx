/**
 * PROJECTS PAGE
 * 
 * Complete portfolio of all projects with detailed descriptions.
 * Includes filtering by technology, difficulty level, and year.
 * 
 * Features:
 * - Project cards with rich metadata
 * - Technology filtering
 * - Search functionality
 * - Case studies and detailed project info
 * - Live demo and GitHub links
 * - Performance metrics
 * 
 * SEO: Each project has comprehensive descriptions for search visibility
 */

'use client'

import Link from 'next/link'
import { ArrowLeft, Code2, ExternalLink, Star, Search, Filter } from 'lucide-react'
import { useState, useMemo } from 'react'
import { Button } from '@/components/ui/button'

export default function ProjectsPage() {
  // State for search and filtering
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTech, setSelectedTech] = useState('all')

  /**
   * Comprehensive project data
   * Each project should include:
   * - Complete description for SEO
   * - Multiple technologies used
   * - Performance metrics
   * - Key features
   * - Links to live demo and source code
   */
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description:
        'A full-stack e-commerce platform built with Next.js and PostgreSQL. Features include real-time inventory management, secure payment processing with Stripe, user authentication, and an admin dashboard. The platform processes hundreds of transactions daily with 99.9% uptime.',
      longDescription: `
        This project demonstrates full-stack development capabilities with production-ready features.
        
        Key accomplishments:
        - Built responsive UI with React and Tailwind CSS
        - Implemented secure payment processing with Stripe API
        - Created real-time inventory system with WebSocket updates
        - Designed comprehensive admin dashboard for product management
        - Optimized database queries achieving sub-100ms response times
        - Implemented SEO best practices achieving first-page Google rankings
      `,
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
      year: 2024,
      difficulty: 'Advanced',
      link: '#',
      github: '#',
      image: '/projects/ecommerce.jpg',
      featured: true,
      stats: {
        users: '1000+',
        uptime: '99.9%',
        responseTime: '< 100ms',
      },
    },
    {
      id: 2,
      title: 'AI Content Generator',
      description:
        'AI-powered content generation tool leveraging OpenAI GPT models for creating blog posts, social media content, and marketing copy. Features real-time streaming, usage analytics, and team collaboration capabilities.',
      longDescription: `
        Advanced AI integration project showcasing modern API patterns and real-time streaming.
        
        Key features:
        - Real-time streaming responses from OpenAI API
        - Usage analytics and token tracking
        - Team workspace management
        - Content history and versioning
        - Integration with popular platforms
        - Cost optimization and rate limiting
      `,
      technologies: ['React', 'Node.js', 'OpenAI API', 'Socket.io', 'MongoDB', 'Redis'],
      year: 2024,
      difficulty: 'Advanced',
      link: '#',
      github: '#',
      image: '/projects/ai-generator.jpg',
      featured: true,
      stats: {
        apiCalls: '50K+',
        avgLatency: '1.2s',
        accuracy: '94%',
      },
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description:
        'Interactive data visualization dashboard with advanced filtering, real-time updates, and export capabilities. Built with React and D3.js for creating custom visualizations of complex datasets.',
      longDescription: `
        Data visualization and business intelligence platform for actionable insights.
        
        Highlights:
        - Real-time data updates via WebSocket
        - 20+ custom chart types
        - Advanced filtering and drill-down capabilities
        - Export to multiple formats (PDF, CSV, Excel)
        - User role-based access control
        - Performance optimized for 1M+ data points
      `,
      technologies: ['React', 'D3.js', 'Redux', 'Firebase', 'TypeScript', 'Node.js'],
      year: 2023,
      difficulty: 'Advanced',
      link: '#',
      github: '#',
      image: '/projects/analytics.jpg',
      featured: true,
      stats: {
        datapoints: '1M+',
        renderTime: '< 200ms',
        users: '500+',
      },
    },
    {
      id: 4,
      title: 'Mobile Fitness Tracker',
      description:
        'Cross-platform fitness tracking application with real-time workout monitoring, social features, and AI-powered recommendations.',
      longDescription: `
        Comprehensive fitness and wellness platform with mobile-first design.
        
        Features:
        - Real-time GPS tracking for workouts
        - Social feed and friend challenges
        - AI-powered personalized workout recommendations
        - Integration with wearable devices
        - Detailed progress analytics
        - Offline-first data synchronization
      `,
      technologies: ['React Native', 'Firebase', 'ML Kit', 'Stripe', 'Node.js'],
      year: 2023,
      difficulty: 'Advanced',
      link: '#',
      github: '#',
      image: '/projects/fitness-tracker.jpg',
      featured: false,
      stats: {
        downloads: '50K+',
        rating: '4.8/5',
        activeUsers: '10K+',
      },
    },
    {
      id: 5,
      title: 'CMS Platform',
      description:
        'Headless CMS built with Next.js and GraphQL for managing content across multiple platforms with powerful version control and workflow automation.',
      longDescription: `
        Enterprise-grade content management system with modern architecture.
        
        Capabilities:
        - Headless CMS with GraphQL API
        - Git-based version control for content
        - Multi-environment deployment
        - Built-in SEO management tools
        - Custom content type builder
        - Webhook integrations and automation
      `,
      technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'Git', 'Docker', 'Kubernetes'],
      year: 2023,
      difficulty: 'Advanced',
      link: '#',
      github: '#',
      image: '/projects/cms-platform.jpg',
      featured: false,
      stats: {
        contentItems: '100K+',
        apiRequests: '1M+/day',
        uptime: '99.95%',
      },
    },
    {
      id: 6,
      title: 'Real-time Chat Application',
      description:
        'Full-featured messaging application with real-time updates, end-to-end encryption, voice/video calls, and group conversations using WebRTC and Socket.io.',
      longDescription: `
        Modern communication platform with advanced features and security.
        
        Implemented:
        - Real-time messaging with Socket.io
        - End-to-end encryption for privacy
        - Voice and video calling via WebRTC
        - Group chat management
        - User presence indicators
        - Message search and history
      `,
      technologies: ['React', 'Socket.io', 'WebRTC', 'Node.js', 'MongoDB', 'TweetNaCl.js'],
      year: 2022,
      difficulty: 'Advanced',
      link: '#',
      github: '#',
      image: '/projects/chat-app.jpg',
      featured: false,
      stats: {
        concurrentUsers: '1K+',
        messageLatency: '< 50ms',
        callQuality: 'HD',
      },
    },
  ]

  // Get unique technologies for filtering
  const allTechnologies = ['all', ...new Set(projects.flatMap((p) => p.technologies))]

  /**
   * Filter and search logic
   * Filters projects by:
   * - Search query (title, description, technologies)
   * - Selected technology
   */
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesTech = selectedTech === 'all' || project.technologies.includes(selectedTech)
      const searchLower = searchQuery.toLowerCase()
      const matchesSearch =
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(searchLower))

      return matchesTech && matchesSearch
    })
  }, [selectedTech, searchQuery])

  return (
    <div className="min-h-screen bg-linear-to-br from-background via-background to-accent/5">
      {/* Header with back button */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={18} />
            Back to Portfolio
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="space-y-4 mb-12">
          <div className="flex items-center gap-3">
            <Code2 className="w-8 h-8 text-primary" />
            <h1 className="text-4xl sm:text-5xl font-bold">Featured Projects</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            A curated selection of projects showcasing my full-stack development expertise, problem-solving abilities, 
            and passion for creating innovative solutions. From e-commerce platforms to AI applications, each project represents 
            significant technical achievement and real-world impact.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="space-y-4 mb-8">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Search projects by name, technology, or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-card hover:border-primary focus:border-primary focus:outline-none transition-colors"
            />
          </div>

          {/* Filter By Technology */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <Filter size={18} className="text-muted-foreground shrink-0" />
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-all duration-300 shrink-0 ${
                  selectedTech === tech
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted hover:bg-muted/80 text-foreground'
                }`}
              >
                {tech === 'all' ? 'All Technologies' : tech}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8 text-sm text-muted-foreground">
          Found <span className="font-semibold text-foreground">{filteredProjects.length}</span> project
          {filteredProjects.length !== 1 ? 's' : ''}
        </div>

        {/* Featured Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="space-y-6">
            {filteredProjects
              .sort((a, b) => {
                // Sort featured projects first, then by year
                if (a.featured !== b.featured) return b.featured ? 1 : -1
                return b.year - a.year
              })
              .map((project, index) => (
                <div
                  key={project.id}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary hover:shadow-xl transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                    {/* Project Image Placeholder */}
                    <div className="lg:col-span-1 order-2 lg:order-1">
                      <div className="aspect-square bg-linear-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden relative group/image">
                        <div className="w-full h-full flex items-center justify-center">
                          <Code2 size={64} className="text-muted-foreground/30" />
                        </div>
                        {/* Featured Badge */}
                        {project.featured && (
                          <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full flex items-center gap-1 text-xs font-semibold">
                            <Star size={12} /> Featured
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="lg:col-span-2 order-1 lg:order-2 space-y-4 flex flex-col justify-between">
                      {/* Header */}
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <div className="space-y-2">
                            <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h2>
                            <p className="text-sm text-muted-foreground">{project.year}</p>
                          </div>
                          <div className="text-right text-sm font-medium">
                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full inline-block">{project.difficulty}</span>
                          </div>
                        </div>
                        <p className="text-foreground leading-relaxed">{project.description}</p>
                      </div>

                      {/* Stats */}
                      {project.stats && (
                        <div className="grid grid-cols-3 gap-3">
                          {Object.entries(project.stats).map(([key, value]) => (
                            <div key={key} className="bg-muted/50 p-3 rounded-lg">
                              <p className="text-xs text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
                              <p className="font-semibold text-sm">{value}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-3 pt-2">
                        <a href={project.link} className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors">
                          Live Demo
                          <ExternalLink size={16} />
                        </a>
                        <a href={project.github} className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          Source Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          // No Results State
          <div className="text-center py-16 bg-muted/30 rounded-xl border border-border">
            <Code2 size={48} className="mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-semibold mb-2">No projects found</h3>
            <p className="text-muted-foreground mb-4">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedTech('all')
              }}
              className="text-primary hover:text-primary/80 font-semibold transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <section className="mt-16 py-12 bg-muted/30 rounded-xl border border-border text-center space-y-4">
          <h2 className="text-2xl font-bold">Interested in my work?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential collaboration? I&apos;m always open to interesting challenges and opportunities.
          </p>
          <Link href="/#contact">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Get In Touch</Button>
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-12 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} All projects are original works. Open to freelance and full-time opportunities.</p>
        </div>
      </footer>
    </div>
  )
}
