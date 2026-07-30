'use client'

import { BookOpen, ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Development',
    excerpt: 'Exploring emerging technologies and best practices in modern web development.',
    date: 'Dec 15, 2024',
    readTime: '5 min read',
    link: '#',
  },
  {
    id: 2,
    title: 'Mastering React Performance',
    excerpt: 'Advanced techniques for optimizing React applications and improving user experience.',
    date: 'Dec 10, 2024',
    readTime: '8 min read',
    link: '#',
  },
  {
    id: 3,
    title: 'Building Scalable APIs',
    excerpt: 'Best practices for designing and implementing scalable REST APIs with Node.js.',
    date: 'Dec 5, 2024',
    readTime: '7 min read',
    link: '#',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <BookOpen size={24} className="text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold">Blog</h2>
        </div>

        {/* Blog Posts */}
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              className="group block p-6 rounded-lg border border-border hover:border-primary bg-card hover:bg-accent/5 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                  <p className="text-xs text-muted-foreground pt-2">
                    {post.date} • {post.readTime}
                  </p>
                </div>
                <ArrowRight
                  size={20}
                  className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 shrink-0"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
