import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

// SEO-optimized metadata for personal portfolio
// Ensure your name and profession in title for better Google search visibility
export const metadata: Metadata = {
  title: 'Your Name | Full Stack Developer & Creative Technologist Portfolio',
  description: 'Explore my portfolio showcasing innovative projects, university notes, and creative solutions. Full stack developer specializing in modern web technologies.',
  keywords: ['portfolio', 'developer', 'projects', 'full stack', 'web development'],
  generator: 'v0.app',
  // Open Graph metadata for better social media sharing
  openGraph: {
    title: 'Your Name | Developer Portfolio',
    description: 'Full stack developer showcasing projects and university journey',
    type: 'website',
  },
  // Twitter Card for enhanced social sharing
  twitter: {
    card: 'summary_large_image',
    title: 'Your Name | Developer Portfolio',
    description: 'Explore my projects and university notes',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f1e8' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // JSON-LD structured data for Google search visibility
  // Using dangerouslySetInnerHTML to prevent hydration mismatch
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Your Name',
    url: 'https://yourportfolio.com',
    jobTitle: 'Full Stack Developer',
    description: 'Creative technologist and full stack developer',
  }

  return (
    <html lang="en" className="bg-background scroll-smooth">
      <head>
        {/* Structured data for better Google search visibility */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          suppressHydrationWarning
        />
      </head>
      <body className="antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
