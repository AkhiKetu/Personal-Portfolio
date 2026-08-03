'use client'

import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()

  const handleContactClick = () => {
    if (pathname !== '/') {
      window.location.href = '/#home'
      return
    }

    document.getElementById('home')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <footer className="px-4 py-10">
      <div className="mx-auto w-full max-w-3xl">
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()}</span>

          <span className="font-bold text-foreground">
            Akhi Ketu Chakma
          </span>

          <span>•</span>

          <button
            type="button"
            onClick={handleContactClick}
            className="cursor-pointer font-medium text-primary transition-colors duration-200 hover:text-primary/70"
          >
            Want to contact?
          </button>
        </div>
      </div>
    </footer>
  )
}