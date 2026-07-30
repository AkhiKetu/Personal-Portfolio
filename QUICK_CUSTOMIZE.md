# Quick Customization Guide

## 5-Minute Setup

### Step 1: Update Hero Section
File: `components/sections/Hero.tsx`

```typescript
// Line 8 - Change avatar initials
<span className="text-3xl md:text-4xl font-bold">AB</span>  // Your initials

// Line 14 - Your name
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
  Your Name
</h1>

// Line 16 - Your title
<p className="text-lg md:text-xl text-muted-foreground font-medium">
  Your Title • Your Specialty
</p>

// Line 21 - Your bio
<p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
  Your bio here...
</p>

// Line 27-28 - Your email (two places)
navigator.clipboard.writeText('your.email@example.com')
<span className="text-sm font-medium">your.email@example.com</span>

// Lines 33, 38, 43 - Update social media links
<a href="https://github.com/yourprofile">
<a href="https://linkedin.com/in/yourprofile">
<a href="mailto:your.email@example.com">
```

### Step 2: Update Experience
File: `components/sections/Experience.tsx`

```typescript
// Edit the experiences array:
const experiences = [
  {
    id: 1,
    company: 'Your Company Name',
    position: 'Your Job Title',
    period: 'Jan 2024 - Present',  // Or your actual dates
    location: 'City, Country',
    status: 'Working',  // Remove if not currently working
    description: 'What you did here...',
  },
  // Add more jobs...
]
```

### Step 3: Update Projects
File: `components/sections/Projects.tsx`

```typescript
// Edit the projects array:
const projects = [
  {
    id: 1,
    title: 'Project Name',
    description: 'What this project does...',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: 'https://live-demo-url.com',    // Your project URL
    github: 'https://github.com/user/repo',  // Your GitHub repo
  },
  // Add more projects...
]
```

### Step 4: Update Blog Posts
File: `components/sections/Blog.tsx`

```typescript
// Edit the blogPosts array:
const blogPosts = [
  {
    id: 1,
    title: 'Article Title',
    excerpt: 'Short description of the article...',
    date: 'Dec 15, 2024',
    readTime: '5 min read',
    link: 'https://your-blog.com/article',  // Blog URL
  },
  // Add more posts...
]
```

### Step 5: Update Skills
File: `components/sections/Skills.tsx`

```typescript
// Edit the skillCategories array:
const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'PostgreSQL', 'MongoDB', 'GraphQL'],
  },
  {
    category: 'Tools & DevOps',
    skills: ['Git', 'Docker', 'AWS', 'Vercel'],
  },
]
```

### Step 6: Update Contact Section
File: `components/sections/Contact.tsx`

```typescript
// Line 24 - Email card
href="mailto:your.email@example.com"
<p className="text-sm text-muted-foreground">your.email@example.com</p>

// Line 33 - GitHub card
href="https://github.com/yourprofile"
<p className="text-sm text-muted-foreground">@yourprofile</p>

// Line 42 - LinkedIn card
href="https://linkedin.com/in/yourprofile"
<p className="text-sm text-muted-foreground">in/yourprofile</p>

// Line 51 - Website card
href="https://yourwebsite.com"
<p className="text-sm text-muted-foreground">www.yourwebsite.com</p>

// Line 86 - Footer copyright
<p className="text-sm text-muted-foreground">
  © 2024 Your Name. All rights reserved.
</p>
```

---

## Optional: Customize Colors

File: `app/globals.css`

Find the color variables and adjust OKLCH values:

```css
:root {
  --primary: oklch(0.3 0.12 260);    /* Change 260 to different hue */
  --accent: oklch(0.7 0.15 35);      /* Orange/warm accent */
  /* ... other colors ... */
}
```

OKLCH Format: `oklch(Lightness Saturation Hue)`
- **Lightness**: 0 (black) to 1 (white)
- **Saturation**: 0 (gray) to 0.5+ (vibrant)
- **Hue**: 0-360 degrees on color wheel
  - 0-60: Red/Orange
  - 60-180: Green/Cyan
  - 180-300: Blue/Purple
  - 300-360: Red/Magenta

Example: Change primary from blue (260) to purple (280):
```css
--primary: oklch(0.3 0.12 280);
```

---

## Navigation Customization

File: `components/Navigation.tsx`

Add or remove navigation items:

```typescript
const navItems = [
  { icon: Home, label: 'Home', href: '#home' },
  { icon: Briefcase, label: 'Work', href: '#work' },
  { icon: BookOpen, label: 'Blog', href: '#blog' },
  { icon: Mail, label: 'Contact', href: '#contact' },
  // Add more items like:
  // { icon: Code2, label: 'Projects', href: '#projects' },
]
```

Available icons from `lucide-react`:
- `Home`, `Briefcase`, `BookOpen`, `Mail`
- `Code2`, `Share2`, `Globe`, `ExternalLink`
- `Download`, `Link`, `Menu`, `X`
- And hundreds more...

---

## Add Profile Picture

File: `components/sections/Hero.tsx`

Replace the initials placeholder with your profile image:

**Current (initials):**
```typescript
<div className="w-full h-full rounded-full bg-background flex items-center justify-center">
  <span className="text-3xl md:text-4xl font-bold">YN</span>
</div>
```

**Replace with image:**
```typescript
<img 
  src="/profile.jpg" 
  alt="Your Name"
  className="w-full h-full rounded-full object-cover"
/>
```

Then add your image to `public/profile.jpg`

---

## Add Project Images

File: `components/sections/Projects.tsx`

Replace the placeholder:

**Current (placeholder):**
```typescript
<div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
  <Code2 size={40} className="text-muted-foreground/30" />
</div>
```

**Replace with image:**
```typescript
<img 
  src={`/projects/project-${project.id}.jpg`}
  alt={project.title}
  className="aspect-video object-cover"
/>
```

Then add images to `public/projects/`

---

## Update Page Metadata

File: `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Your Name | Full Stack Developer',
  description: 'My portfolio showcasing projects and experience',
  // ... other metadata
}
```

---

## Deployment

### Deploy to Vercel (Recommended)

```bash
# Login to Vercel
vercel login

# Deploy
vercel

# Your portfolio is live at: https://your-portfolio.vercel.app
```

### Deploy to Netlify

```bash
# Build
pnpm build

# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=.next
```

### Deploy to GitHub Pages

```bash
# Build
pnpm build

# Push to GitHub
git add .
git commit -m "Deploy portfolio"
git push origin main
```

---

## File Locations Reference

| What | File | Lines |
|------|------|-------|
| Name & Title | `Hero.tsx` | 14-16 |
| Bio | `Hero.tsx` | 21 |
| Email | `Hero.tsx` | 27-28 |
| Social Links | `Hero.tsx` | 33-43 |
| Work Experience | `Experience.tsx` | 6-20 |
| Projects | `Projects.tsx` | 6-24 |
| Blog Posts | `Blog.tsx` | 6-19 |
| Skills | `Skills.tsx` | 1-14 |
| Contact Info | `Contact.tsx` | 24-55 |
| Colors | `globals.css` | ~10-30 |

---

## Pro Tips

1. **Keep it Updated**: Review and update content every 3-6 months
2. **Use Real URLs**: Replace `#` with actual links to projects
3. **Add Descriptions**: Write meaningful descriptions for projects
4. **Update Dates**: Keep experience and blog dates current
5. **Test Mobile**: Always test on mobile after changes
6. **Ask for Feedback**: Get a second opinion on your content

---

## Need Help?

1. Check `PORTFOLIO_FILE_STRUCTURE.md` for detailed component breakdown
2. Read component comments in the code
3. Check the `lucide-react` docs for more icons
4. Refer to `app/globals.css` for styling reference

---

## Common Issues

**Q: How do I change the font?**
A: Edit `app/layout.tsx` - import a different font from `next/font/google`

**Q: How do I add a new section?**
A: Create a new file in `components/sections/` and import it in `app/page.tsx`

**Q: How do I hide a section?**
A: In `app/page.tsx`, remove the component: `{/* <Experience /> */}`

**Q: How do I change the navigation items?**
A: Edit the `navItems` array in `components/Navigation.tsx`

---

You're all set! Customize, save, and deploy! 🚀
