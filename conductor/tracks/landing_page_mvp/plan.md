# Implementation Plan: Landing Page MVP

## Phase 1: Foundation & Scaffolding [checkpoint: bed29ca]
- [x] Task: Initialize Next.js Project ()
    - [ ] Initialize Next.js app with TypeScript, Tailwind, and ESLint.
    - [ ] Configure `tsconfig.json` for strict mode and path aliases (`@/`).
    - [ ] Install core dependencies: `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`.
- [x] Task: Design System Setup (bb073ae)
    - [ ] Configure Tailwind `globals.css` with CSS variables for the Color Palette (Dark Mode default).
    - [ ] Setup font family (Inter or generic sans-serif optimized for UI).
    - [ ] Initialize Shadcn/ui and add base components (Button, Card, Sheet).
    - [ ] Create a `cn` utility for class merging.
- [x] Task: Conductor - User Manual Verification 'Foundation & Scaffolding' (bed29ca) (Protocol in workflow.md)

## Phase 2: Core Components & Layout
- [x] Task: Layout Architecture (ae4f172)
    - [ ] Create Root Layout with SEO metadata.
    - [ ] Build a responsive Navbar (Logo, Links, Mobile Menu).
    - [ ] Build a minimal Footer.
- [~] Task: Hero Section
    - [ ] Implement Hero component with large typography and CTA.
    - [ ] Add entrance animations using Framer Motion (staggered fade-in).
- [ ] Task: Conductor - User Manual Verification 'Core Components & Layout' (Protocol in workflow.md)

## Phase 3: Advanced Sections (Bento & Pricing)
- [ ] Task: Features Section (Bento Grid)
    - [ ] Create a `BentoGrid` container component.
    - [ ] Implement individual `BentoCard` components for "Slide to Clock-in", "Dashboard", etc.
    - [ ] Add hover effects (scale/glow) to cards.
- [ ] Task: Pricing Section
    - [ ] Build Pricing Cards (Tiers: Free, Pro, Enterprise).
    - [ ] Implement toggle for Monthly/Yearly billing (UI only for now).
- [ ] Task: Conductor - User Manual Verification 'Advanced Sections (Bento & Pricing)' (Protocol in workflow.md)

## Phase 4: Polish & Deploy
- [ ] Task: Visual Polish
    - [ ] Audit all animations for fluidity (Spring physics).
    - [ ] Ensure Mobile responsiveness on all sections.
    - [ ] Verify Contrast Ratios for accessibility.
- [ ] Task: Deployment Prep
    - [ ] Run `npm run build` to verify no errors.
    - [ ] (Optional) Connect to Vercel/Remote Git.
- [ ] Task: Conductor - User Manual Verification 'Polish & Deploy' (Protocol in workflow.md)
