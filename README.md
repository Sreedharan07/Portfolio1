# Sreedharan M — Cinematic Portfolio

A premium, award-worthy portfolio website built with Next.js 15, featuring:

- 🌌 **Live particle physics background** (600 particles, mouse interaction)
- ✨ **Framer Motion animations** throughout every section
- 🎨 **Dark futuristic AI Lab** aesthetic — deep midnight background with purple/cyan/pink accents
- 🔤 **Syne + DM Sans + JetBrains Mono** typography stack
- 🪄 **Custom cursor** with magnetic ring
- 📱 **Fully responsive** — mobile to 4K
- 🚀 **Production-ready** — SEO, metadata, lazy loading, code splitting

---

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 15 + React 19 |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion |
| Background | Canvas API (particle physics) |
| Icons | Lucide React |
| Fonts | Google Fonts (Syne, DM Sans, JetBrains Mono) |

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000)

---

## Folder Structure

```
src/
├── app/
│   ├── globals.css       # Design tokens, animations, glass effects
│   ├── layout.js         # Root layout with SEO metadata
│   └── page.js           # Main page assembly
├── components/
│   ├── ui/
│   │   ├── Cursor.js     # Custom cursor with magnetic ring
│   │   ├── Nav.js        # Sticky navigation with mobile menu
│   │   └── Footer.js     # Elegant footer
│   ├── sections/
│   │   ├── Hero.js       # Cinematic hero with rotating text
│   │   ├── About.js      # Identity card + animated skill bars
│   │   ├── Skills.js     # Floating skill bubbles by category
│   │   ├── Projects.js   # 3D tilt glassmorphism project cards
│   │   ├── Research.js   # Scientific paper cards (expandable)
│   │   ├── Experience.js # Work experience + certificates
│   │   ├── Timeline.js   # Interactive vertical timeline
│   │   ├── GitHub.js     # Contribution graph + language stats
│   │   └── Contact.js    # Contact form + social links
│   └── three/
│       └── ParticleField.js  # 600-particle canvas with mouse physics
```

---

## Customization

### Colors (`src/app/globals.css`)
```css
:root {
  --color-bg: #05060A;
  --color-accent-purple: #7C5CFF;
  --color-accent-cyan: #00E5FF;
  --color-accent-pink: #FF9FFC;
}
```

### Personal Data
Update the data arrays in each section component:
- `src/components/sections/Projects.js` — Add your real projects
- `src/components/sections/Research.js` — Add your papers
- `src/components/sections/Timeline.js` — Add your events
- `src/components/sections/Experience.js` — Add work experience

### Resume
Place your resume PDF at `public/resume.pdf` for the Download button to work.

---

## Deployment

### Vercel (Recommended)
```bash
npx vercel
```

### GitHub Pages / Netlify
```bash
npm run build
# Deploy the .next folder
```

---

## Performance Notes

- Particle canvas runs at 60 FPS using `requestAnimationFrame`
- All sections use `useInView` for scroll-triggered animations (once: true)
- Dynamic imports for canvas and cursor components (no SSR)
- Google Fonts loaded via `<head>` with `display=swap`

---

Built with 💜 by Sreedharan M · github.com/Sreedharan07
