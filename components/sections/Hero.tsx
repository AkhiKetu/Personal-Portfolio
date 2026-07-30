'use client'

import { useEffect, useState } from 'react'
import { Mail, Code2, Share2, ExternalLink } from 'lucide-react'
import Lottie from 'lottie-react'
import profileAnimation from '@/components/assets/profile-animation.json'

export default function Hero() {
  const fullName = "Hi, I'm Akhi Ketu Chakma"
  const [typedName, setTypedName] = useState('')

  useEffect(() => {
    const isComplete = typedName.length === fullName.length
    const timeout = setTimeout(
      () => {
        setTypedName(isComplete ? '' : fullName.slice(0, typedName.length + 1))
      },
      isComplete ? 3000 : 100,
    )

    return () => clearTimeout(timeout)
  }, [typedName, fullName])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Avatar/Profile Image */}
        <div className="flex justify-center">
          <div className="h-40 w-40 overflow-hidden rounded-full md:h-52 md:w-52">
            <div className="h-full w-full overflow-hidden rounded-full bg-background">
              <Lottie
                animationData={profileAnimation}
                loop
                autoplay
                aria-label="Animated profile illustration"
                className="h-full w-full scale-110"
              />
            </div>
          </div>
        </div>

        {/* Name and Title */}
        <div className="space-y-2">
          <h1
            aria-label={fullName}
            className="min-h-[1.2em] text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
          >
            {typedName}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-medium">
            Full Stack Developer • Creative Technologist
          </p>
        </div>

        {/* Bio */}
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
          Trying to build a better web experience with modern technologies and best practices. Passionate about creating intuitive and engaging user interfaces.
        </p>

        {/* Email with Copy */}
        <div className="flex justify-center">
          <button
            onClick={() => {
              navigator.clipboard.writeText('your.email@example.com')
              alert('Email copied!')
            }}
            className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-accent/20 rounded-lg transition-all duration-300"
          >
            <Mail size={18} />
            <span className="text-sm font-medium">your.email@example.com</span>
            <ExternalLink size={14} className="text-muted-foreground" />
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          <a
            href="#"
            className="p-3 rounded-lg bg-muted hover:bg-accent/20 transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <Code2 size={20} />
          </a>
          <a
            href="#"
            className="p-3 rounded-lg bg-muted hover:bg-accent/20 transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Share2 size={20} />
          </a>
          <a
            href="#"
            className="p-3 rounded-lg bg-muted hover:bg-accent/20 transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-8 animate-bounce">
          <p className="text-lg text-muted-foreground">Scroll to explore</p>
        </div>
      </div>
    </section>
  )
}
