'use client'

import { Mail, Code2, Share2, Globe } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-2xl mx-auto text-center space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Let&apos;s Connect</h2>
          <p className="text-lg text-muted-foreground">
            Have a project in mind? Feel free to reach out and let&apos;s create something amazing together.
          </p>
        </div>

        {/* Contact Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Email */}
          <a
            href="mailto:your.email@example.com"
            className="group p-6 rounded-lg border border-border hover:border-primary bg-card hover:bg-accent/5 transition-all duration-300"
          >
            <Mail size={28} className="mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
            <p className="font-semibold mb-1">Email</p>
            <p className="text-sm text-muted-foreground">your.email@example.com</p>
          </a>

          {/* GitHub */}
          <a
            href="#"
            className="group p-6 rounded-lg border border-border hover:border-primary bg-card hover:bg-accent/5 transition-all duration-300"
          >
            <Code2 size={28} className="mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
            <p className="font-semibold mb-1">GitHub</p>
            <p className="text-sm text-muted-foreground">@yourprofile</p>
          </a>

          {/* LinkedIn */}
          <a
            href="#"
            className="group p-6 rounded-lg border border-border hover:border-primary bg-card hover:bg-accent/5 transition-all duration-300"
          >
            <Share2 size={28} className="mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
            <p className="font-semibold mb-1">LinkedIn</p>
            <p className="text-sm text-muted-foreground">in/yourprofile</p>
          </a>

          {/* Portfolio */}
          <a
            href="#"
            className="group p-6 rounded-lg border border-border hover:border-primary bg-card hover:bg-accent/5 transition-all duration-300"
          >
            <Globe size={28} className="mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
            <p className="font-semibold mb-1">Visit</p>
            <p className="text-sm text-muted-foreground">My Website</p>
          </a>
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

        {/* Footer */}
        <div className="pt-12 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2024 Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}
