# Portfolio File Structure - Section-by-Section Guide

## Complete File Organization

```
portfolio/
│
├── app/
│   ├── page.tsx                    # Main homepage (uses all sections)
│   ├── layout.tsx                  # Root layout with metadata
│   ├── globals.css                 # Global styles & colors
│   ├── projects/
│   │   └── page.tsx               # Projects showcase page
│   └── university-notes/
│       └── page.tsx               # University notes page
│
├── components/
│   ├── Navigation.tsx              # Collapsing capsule nav (sticky bottom)
│   │
│   └── sections/                   # Individual page sections
│       ├── Hero.tsx               # Profile section with avatar
│       ├── Experience.tsx          # Work experience timeline
│       ├── Projects.tsx            # Featured projects grid
│       ├── Blog.tsx                # Blog posts list
│       ├── Skills.tsx              # Skills by category
│       └── Contact.tsx             # Contact methods & footer
│
├── public/                         # Static assets (images, icons)
├── lib/
│   └── utils.ts                    # Utility functions
└── [config files]                  # Next.js, TypeScript, Tailwind config
```

---

## Component-by-Component Guide

### 1. Navigation (`components/Navigation.tsx`)

**Purpose:** Collapsing capsule navigation bar that sticks to the bottom of the screen.

**Features:**
- Scrolls to page sections via anchor links
- Collapses on scroll (hides text labels, shows only icons)
- Smooth animations
- Mobile-optimized

**Key States:**
- `isScrolled` - Tracks scroll position to trigger collapse
- Shows: `Home`, `Work`, `Blog`, `Contact` labels
- Icons: `Home`, `Briefcase`, `BookOpen`, `Mail`

**Customization:**
```typescript
// Add/edit navigation items here:
const navItems = [
  { icon: Home, label: 'Home', href: '#home' },
  { icon: Briefcase, label: 'Work', href: '#work' },
  // Add more items...
]
```

---

### 2. Hero (`components/sections/Hero.tsx`)

**Purpose:** Landing section with profile introduction, avatar, and social links.

**Features:**
- Profile avatar (initials placeholder - customize with image)
- Your name and title
- Bio description
- Email copy-to-clipboard button
- Social media links
- Scroll indicator animation

**Customize:**
```typescript
// Line 8: Change avatar placeholder
<span className="text-3xl md:text-4xl font-bold">YN</span>  // Your initials

// Line 14-15: Update name and title
<h1>Your Name</h1>
<p>Full Stack Developer • Creative Technologist</p>

// Line 20: Update bio
<p>I build beautiful, performant digital experiences...</p>

// Line 26-27: Update email
<button onClick={() => navigator.clipboard.writeText('your.email@example.com')}>
```

---

### 3. Experience (`components/sections/Experience.tsx`)

**Purpose:** Display work experience with timeline visualization.

**Features:**
- Vertical timeline design
- Company, position, dates, location
- Working status indicator
- Professional description
- Animated line connector

**Data Structure:**
```typescript
const experiences = [
  {
    id: 1,
    company: 'Company Name',
    position: 'Job Title',
    period: 'Jan 2024 - Present',
    location: 'City, Country',
    status: 'Working',  // Optional
    description: 'Job description...',
  },
]
```

**Customize:**
Edit the `experiences` array at the top of the file.

---

### 4. Projects (`components/sections/Projects.tsx`)

**Purpose:** Showcase featured projects in a responsive grid.

**Features:**
- 2-column grid (responsive to 1 on mobile)
- Project image placeholder
- Tech stack tags
- View and Code links
- Hover animations

**Data Structure:**
```typescript
const projects = [
  {
    id: 1,
    title: 'Project Name',
    description: 'What the project does...',
    tags: ['React', 'Node.js'],
    link: '#',         // Live demo URL
    github: '#',       // GitHub repo URL
  },
]
```

**Customize:**
Edit the `projects` array at the top of the file.

---

### 5. Blog (`components/sections/Blog.tsx`)

**Purpose:** Display blog posts or articles.

**Features:**
- Clean list layout
- Title, excerpt, date, read time
- Hover effects
- External links

**Data Structure:**
```typescript
const blogPosts = [
  {
    id: 1,
    title: 'Article Title',
    excerpt: 'Short summary...',
    date: 'Dec 15, 2024',
    readTime: '5 min read',
    link: '#',
  },
]
```

**Customize:**
Edit the `blogPosts` array at the top of the file.

---

### 6. Skills (`components/sections/Skills.tsx`)

**Purpose:** Display technical skills organized by category.

**Features:**
- 3-column grid (responsive)
- Skill categories (Frontend, Backend, Tools)
- Hover effects on skill tags
- Clean organization

**Data Structure:**
```typescript
const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
]
```

**Customize:**
Edit the `skillCategories` array at the top of the file.

---

### 7. Contact (`components/sections/Contact.tsx`)

**Purpose:** Contact methods and social media links with footer.

**Features:**
- 4 contact cards (Email, GitHub, LinkedIn, Website)
- Social media icon links
- Footer with copyright
- Hover animations

**Customize:**
```typescript
// Email
href="mailto:your.email@example.com"
<p className="text-sm text-muted-foreground">your.email@example.com</p>

// GitHub
href="https://github.com/yourprofile"
<p className="text-sm text-muted-foreground">@yourprofile</p>

// LinkedIn  
href="https://linkedin.com/in/yourprofile"
<p className="text-sm text-muted-foreground">in/yourprofile</p>
```

---

## Main Page (`app/page.tsx`)

**Purpose:** Root page that assembles all sections.

**Structure:**
```typescript
export default function HomePage() {
  return (
    <div>
      {/* Background decoration (ready for animated background) */}
      <div className="fixed inset-0 -z-10">
        {/* Add animations here later */}
      </div>

      {/* Main content */}
      <div>
        <Hero />
        <Experience />
        <Projects />
        <Blog />
        <Contact />
      </div>

      {/* Floating navigation */}
      <Navigation />
    </div>
  )
}
```

**Add Animated Background:**
Later, replace the background decoration div with your animated background component.

---

## Global Styles (`app/globals.css`)

**Purpose:** Define color system and theme.

**Color Variables (Light & Dark Mode):**
```css
:root {
  --primary: oklch(0.3 0.12 260);      /* Primary brand color */
  --secondary: oklch(0.92 0.04 280);   /* Secondary color */
  --accent: oklch(0.7 0.15 35);        /* Accent color */
  --background: oklch(0.98 0.01 280);  /* Background */
  --foreground: oklch(0.1 0.0 0);      /* Text */
  --card: oklch(0.96 0.01 280);        /* Card background */
  --border: oklch(0.9 0.01 280);       /* Border color */
  --muted-foreground: oklch(0.5 0.03 260);
}

.dark {
  --primary: oklch(0.75 0.15 260);
  --accent: oklch(0.8 0.18 35);
  /* ... dark mode colors ... */
}
```

**Customize Colors:**
Edit the OKLCH values. Format: `oklch(Lightness Saturation Hue)`
- Lightness: 0-1 (0=black, 1=white)
- Saturation: 0-0.5 (higher=more vibrant)
- Hue: 0-360 (color wheel angle)

---

## Mobile Responsiveness

All components use Tailwind CSS responsive breakpoints:

```
sm: 640px   (tablets in portrait)
md: 768px   (tablets in landscape)
lg: 1024px  (laptops)
xl: 1280px  (desktops)
```

**Navigation Example:**
- Mobile: Shows only icons when scrolled
- Desktop: Shows labels all the time

**Projects Grid Example:**
- Mobile: 1 column
- Desktop: 2-3 columns

---

## Customization Checklist

- [ ] Update `Hero.tsx` - Your name, bio, email, social links
- [ ] Update `Experience.tsx` - Your work experience
- [ ] Update `Projects.tsx` - Your featured projects
- [ ] Update `Blog.tsx` - Your blog posts
- [ ] Update `Skills.tsx` - Your technical skills
- [ ] Update `Contact.tsx` - Your contact information
- [ ] Update `app/globals.css` - Theme colors (optional)
- [ ] Update `Navigation.tsx` - Navigation items (if needed)
- [ ] Add animated background to `app/page.tsx` later

---

## Running the Portfolio

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Visit http://localhost:3000
```

## Building for Production

```bash
# Build
pnpm build

# Run production build locally
pnpm start

# Deploy to Vercel
vercel
```

---

## Section Flow

When you scroll the page:

```
1. Hero (Landing)
   ↓ (scroll)
2. Experience (Work history)
   ↓ (scroll)
3. Projects (Featured work)
   ↓ (scroll)
4. Blog (Articles)
   ↓ (scroll)
5. Contact (Call to action & footer)
```

Navigation stays at the bottom and shrinks as you scroll!

---

## Icons Used

- `Home` - Home link
- `Briefcase` - Work experience
- `BookOpen` - Blog/learning
- `Mail` - Email/contact
- `Code2` - GitHub/code
- `Share2` - LinkedIn/sharing
- `Globe` - Website/portfolio
- `ExternalLink` - External links
- `ArrowRight` - CTA arrows

All from `lucide-react` icon library.

---

## Ready to Deploy!

Your portfolio is:
- ✅ Mobile-first and responsive
- ✅ SEO optimized
- ✅ Production-ready
- ✅ Easy to customize
- ✅ Section-based (clean file organization)

Deploy to Vercel with: `vercel`
