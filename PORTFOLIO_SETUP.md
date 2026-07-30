# Personal Portfolio Website - Complete Setup Guide

Welcome to your professional portfolio website! This is a modern, SEO-optimized personal portfolio built with Next.js 16, TypeScript, and Tailwind CSS.

## 🎯 What You Have

A complete portfolio solution with:

- **Homepage** (`/`) - Hero section, featured projects, skills overview, university notes preview, and contact section
- **Projects Page** (`/projects`) - Showcase of all your projects with filtering and search
- **University Notes** (`/university-notes`) - Organized academic coursework and notes by semester and subject
- **Responsive Design** - Fully mobile-optimized with smooth animations ready
- **SEO Optimized** - Structured data, meta tags, and semantic HTML for Google indexing
- **Dark/Light Theme** - Automatic theme support based on system preferences

## 🚀 Getting Started

### 1. Personalize Your Portfolio

Replace the following in the code with your actual information:

#### In `app/page.tsx` (Homepage):

```typescript
// Line 25 - Update your name
<span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Your Name</span>

// Line 173 - Update social links
<a href="YOUR_GITHUB_URL">
<a href="YOUR_LINKEDIN_URL">

// Line 376 - Update email
<a href="mailto:your.email@example.com">

// Line 380 - Update LinkedIn profile
<a href="YOUR_LINKEDIN_URL">

// Line 386 - Update GitHub profile
<a href="YOUR_GITHUB_URL">
```

#### In `app/layout.tsx` (SEO Metadata):

```typescript
// Line 5-6 - Update for Google search visibility
title: 'Your Name | Full Stack Developer & Creative Technologist Portfolio',
description: 'Explore my portfolio showcasing innovative projects, university notes, and creative solutions.',

// Line 13 - Update structured data
name: 'Your Name',
url: 'https://yourportfolio.com',
jobTitle: 'Your Job Title',
```

### 2. Update Project Data

In `app/page.tsx`, replace the `projects` array (around line 49):

```typescript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'What this project does',
    longDescription: 'Detailed explanation',
    technologies: ['Tech1', 'Tech2', 'Tech3'],
    year: 2024,
    difficulty: 'Advanced',
    link: 'https://your-project-link.com',
    github: 'https://github.com/yourprofile/project',
    image: '/projects/project-name.jpg',
    featured: true,
    stats: {
      users: '1000+',
      uptime: '99.9%',
      metric: 'value',
    },
  },
  // Add more projects...
]
```

### 3. Update University Notes

In `app/university-notes/page.tsx`, replace the `universityNotes` array (around line 32):

```typescript
const universityNotes = [
  {
    id: 1,
    title: 'Course Name',
    code: 'CS201',
    semester: 'Spring 2023',
    semesterOrder: 2,
    subject: 'Computer Science',
    description: 'What you learned in this course',
    topics: ['Topic1', 'Topic2', 'Topic3'],
    notes: '/notes/course-code.pdf',
    resourceCount: 5,
  },
  // Add more courses...
]
```

### 4. Update Skills

In `app/page.tsx`, find the `skillCategories` array (around line 81) and update:

```typescript
const skillCategories = [
  {
    category: 'Frontend',
    skills: ['Your', 'Frontend', 'Skills'],
  },
  {
    category: 'Backend',
    skills: ['Your', 'Backend', 'Skills'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Your', 'Tools'],
  },
]
```

## 🎨 Customization

### Theme Colors

The theme is defined in `app/globals.css`. The color system uses OKLCH color space:

```css
/* Light Theme - Modify these values */
--primary: oklch(0.3 0.12 260);      /* Deep blue */
--accent: oklch(0.7 0.15 35);         /* Warm orange */
--background: oklch(0.98 0.02 280);   /* Light background */

/* Dark Theme */
.dark {
  --primary: oklch(0.75 0.15 260);    /* Light blue */
  --accent: oklch(0.8 0.18 35);       /* Bright orange */
  --background: oklch(0.12 0.02 280); /* Dark background */
}
```

### Fonts

The portfolio uses system fonts by default. To add custom fonts, modify `app/layout.tsx`:

```typescript
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ weight: ['600', '700'], subsets: ['latin'] })
```

Then update the theme in `app/globals.css`:

```css
@theme inline {
  --font-sans: 'Inter', system-ui;
  --font-heading: 'Poppins', system-ui;
}
```

### Adding Animations

The portfolio is structure-ready for animations! All interactive elements have:

- Hover states with `transition-all duration-300`
- Classes like `hover:scale-110` for scaling effects
- `animate-bounce` for scroll indicator
- Ready for Framer Motion or Tailwind animations

To add animations, install Framer Motion:

```bash
pnpm add framer-motion
```

Then wrap components:

```typescript
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Your content
</motion.div>
```

## 📊 SEO Best Practices

Your portfolio is optimized for Google ranking:

- ✅ Semantic HTML with proper heading hierarchy
- ✅ Meta tags and Open Graph for social sharing
- ✅ Structured data (JSON-LD) for rich snippets
- ✅ Mobile-responsive design
- ✅ Fast performance (Vercel serverless)
- ✅ Clean URLs and internal linking
- ✅ Alt text for images (add yours)

**Next steps for better SEO:**

1. Replace "Your Name" with your actual name (appears in title)
2. Update domain in `app/layout.tsx` (`url: 'https://yourdomain.com'`)
3. Create a `public/sitemap.xml` for search engine crawling
4. Add images to `/public/projects/` for project showcases
5. Set up Google Search Console and Analytics

## 📱 Responsive Breakpoints

The portfolio uses Tailwind CSS breakpoints:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

All components are mobile-first, tested at:

- Mobile: 375px × 812px (iPhone)
- Tablet: 768px × 1024px (iPad)
- Desktop: 1920px × 1080px

## 🚀 Deployment

### Option 1: Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: Deploy to Netlify

```bash
# Build
pnpm build

# The .next folder is ready to deploy
```

### Option 3: Deploy to GitHub Pages

Configure `next.config.mjs` for static export, then build and push to `gh-pages` branch.

## 📁 Project Structure

```
/app
  ├── page.tsx                    # Homepage
  ├── layout.tsx                  # Root layout with SEO
  ├── globals.css                 # Theme and styles
  ├── projects/
  │   └── page.tsx                # Projects showcase
  └── university-notes/
      └── page.tsx                # Academic notes

/public
  ├── projects/                   # Project images
  ├── notes/                       # PDF files for notes
  └── icons/                       # Favicon and icons

/components
  └── ui/
      └── button.tsx              # Reusable button component

/lib
  └── utils.ts                    # Utility functions
```

## 🛠 Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: SVG and Lucide React
- **Fonts**: System fonts (customizable)
- **Animations**: CSS Transitions + Animation-ready for Framer Motion
- **Deployment**: Vercel (serverless)
- **SEO**: Built-in structured data and metadata

## 🔍 Key Features to Remember

1. **All pages are statically prerendered** - Better SEO and performance
2. **Mobile-first design** - Optimized for all screen sizes
3. **Dark mode support** - Automatic based on system preference
4. **Fast performance** - Optimized images and lazy loading
5. **Search and filter** - Projects and notes pages have working search
6. **Accessible** - Semantic HTML and ARIA labels throughout

## 📝 Code Comments

Every component has detailed comments explaining:

- Component purpose
- Data structures
- Filter and search logic
- SEO considerations
- Animation-ready elements

This makes it easy to understand and modify the code!

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Framer Motion](https://www.framer.com/motion/) (for animations)
- [Web Accessibility](https://www.w3.org/WAI/fundamentals/)

## 🐛 Troubleshooting

**Build fails:**
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `pnpm install`

**Styles not applying:**
- Restart dev server: `pnpm dev`
- Check Tailwind classes in `globals.css`

**Navigation not working:**
- Ensure links use `href` (not `to`)
- Use Next.js `<Link>` component

## 📞 Need Help?

- Check the inline code comments
- Review `app/layout.tsx` for SEO setup
- Refer to component structure in `app/page.tsx`
- Consult Next.js docs for advanced features

---

**Ready to showcase your work? Update your information and deploy!** 🚀

Your portfolio is now production-ready and optimized for success!
