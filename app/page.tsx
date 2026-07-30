'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/sections/Hero'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Blog from '@/components/sections/Blog'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Background decoration - ready for animated background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-background via-background to-accent/5" />
      </div>

      {/* Main Content with Max Width */}
      <div className="relative z-10">
        <Hero />
        <Experience />
        <Projects />
        <Blog />
      </div>

      {/* Floating Navigation */}
      <Navigation />
    </div>
  )
}
