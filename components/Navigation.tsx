'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FolderKanban, GraduationCap, Home, Mail, Moon, Sun } from 'lucide-react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldUseDark = savedTheme ? savedTheme === 'dark' : prefersDark

    setIsDark(shouldUseDark)
    document.documentElement.classList.toggle('dark', shouldUseDark)
    document.documentElement.classList.toggle('light', !shouldUseDark)
  }, [])

  const toggleTheme = () => {
    const nextIsDark = !isDark
    setIsDark(nextIsDark)
    document.documentElement.classList.toggle('dark', nextIsDark)
    document.documentElement.classList.toggle('light', !nextIsDark)
    localStorage.setItem('theme', nextIsDark ? 'dark' : 'light')
  }

  const navItems = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: GraduationCap, label: 'Education', href: '#education' },
    { icon: FolderKanban, label: 'Projects', href: '#projects' },
    { icon: Mail, label: 'Contact', href: '#contact' },
    
  ]

  return (
    <nav
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 border-3 ${
        isScrolled
          ? 'bg-background/40 backdrop-blur-xl px-4 py-2 rounded-full border border-border/80 shadow-lg'
          : 'bg-background/30 backdrop-blur-lg px-6 py-3 rounded-full border border-border/80 shadow-lg'
      }`}
    >
      <div className="flex items-center gap-4 md:gap-8">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:text-primary group"
            >
              <Icon size={isScrolled ? 18 : 20} className="transition-all duration-300" />
              <span className={`${isScrolled ? 'hidden' : 'inline'} transition-all duration-300`}>
                {item.label}
              </span>
            </Link>
          )
        })}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          className="flex size-8 items-center justify-center rounded-full text-foreground transition-colors  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring hover:text-primary group hover:cursor-pointer"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  )
}
