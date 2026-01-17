---
name: Implement Primordial Website with Dual Language Support
overview: Implement the complete Primordial website from Figma with dual language support (Vietnamese and English). This includes creating all pages (Home, Introduction, Ecosystem, Stouffer Hotels, Hoteliers Without Borders, Lumora, Partnerships, Contact) using route groups, extracting images from Figma, and building reusable components that accept localized text as props.
todos:
  - id: phase-1-foundation
    content: "Phase 1: Foundation Setup - Install dependencies and set up project structure with route groups"
    status: pending
  - id: phase-2-design-system
    content: "Phase 2: The Design System (The Foundation) - Extract color palette from Figma, update Tailwind config, set up typography with next/font/google, and create Container component"
    status: pending
  - id: phase-3-atomic-components
    content: "Phase 3: Atomic Components - Create core components using Shadcn UI base (PrimaryButton, Navbar with glassmorphism) based on Figma design"
    status: pending
  - id: phase-4-home-page
    content: "Phase 4: Home Page Implementation - Build home page with hero, sections, and responsive design for both en and vi"
    status: pending
  - id: phase-5-introduction-page
    content: "Phase 5: Introduction Page - Build introduction page with hero, story, vision, key functions, and team sections for both languages"
    status: pending
  - id: phase-6-ecosystem-page
    content: "Phase 6: Ecosystem Page - Build ecosystem page with strategic pillars, timeline, and project cards for both languages"
    status: pending
  - id: phase-7-stouffer-hotels-page
    content: "Phase 7: Stouffer Hotels Page - Build Stouffer Hotels page with introduction, cards, marketing, and carousel sections for both languages"
    status: pending
  - id: phase-8-hoteliers-without-borders-page
    content: "Phase 8: Hoteliers Without Borders Page - Build page with hero, what is HWB, value sections, and images for both languages"
    status: pending
  - id: phase-9-lumora-page
    content: "Phase 9: Lumora Page - Build Lumora page with hero, what is Lumora, timeline, and target audience sections for both languages"
    status: pending
  - id: phase-10-partnerships-page
    content: "Phase 10: Partnerships Page - Build partnerships page with hero, logos, TPO model, implementation, value, and contact form for both languages"
    status: pending
  - id: phase-11-contact-page
    content: "Phase 11: Contact Page - Build contact page with hero, contact info, form, offices, and success dialog for both languages"
    status: pending
  - id: phase-12-functionality
    content: "Phase 12: Functionality - Implement interactive features, form validation, language switcher, SEO metadata, use Shadcn UI to create base components if needed, and implement text and image fade in on scroll animations"
    status: pending
---

# Implement Primordial Website with Dual Language Support

## Overview

Implement the complete Primordial hospitality website from Figma: 
https://www.figma.com/design/qgT174PzzZHOMcjA0XVasm/Primordial-Website?node-id=834-5994&p=f&t=xRqByBq0tuWGjOx1-0
with Vietnamese and English language support. The site includes multiple pages with complex layouts, hero sections, content blocks, and interactive elements. Each page group uses route groups with separate `en` and `vi` folders, and components receive localized text as props.

## Architecture

### 1. Project Structure

Pages are organized using Next.js route groups. Each route group contains:

- `en/` folder for English pages
- `vi/` folder for Vietnamese pages  
- `components/` folder for page-specific reusable components
```
src/
├── app/
│   ├── (home)/
│   │   ├── en/
│   │   │   └── page.tsx
│   │   ├── vi/
│   │   │   └── page.tsx
│   │   └── components/
│   │       ├── Hero.tsx
│   │       ├── StoufferSection.tsx
│   │       └── ...
│   ├── (introduction)/
│   │   ├── en/
│   │   │   └── page.tsx
│   │   ├── vi/
│   │   │   └── page.tsx
│   │   └── components/
│   │       ├── StorySection.tsx
│   │       └── ...
│   ├── (ecosystem)/
│   │   ├── en/
│   │   │   └── page.tsx
│   │   ├── vi/
│   │   │   └── page.tsx
│   │   └── components/
│   ├── (stouffer-hotels)/
│   │   ├── en/
│   │   │   └── page.tsx
│   │   ├── vi/
│   │   │   └── page.tsx
│   │   └── components/
│   ├── (hoteliers-without-borders)/
│   │   ├── en/
│   │   │   └── page.tsx
│   │   ├── vi/
│   │   │   └── page.tsx
│   │   └── components/
│   ├── (lumora)/
│   │   ├── en/
│   │   │   └── page.tsx
│   │   ├── vi/
│   │   │   └── page.tsx
│   │   └── components/
│   ├── (partnerships)/
│   │   ├── en/
│   │   │   └── page.tsx
│   │   ├── vi/
│   │   │   └── page.tsx
│   │   └── components/
│   └── (contact)/
│       ├── en/
│       │   └── page.tsx
│       ├── vi/
│       │   └── page.tsx
│       └── components/
├── components/
│   └── ui/ (global reusable UI components)
│       ├── Button.tsx
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       ├── Input.tsx
│       ├── Container.tsx
│       └── Dialog.tsx
└── lib/
    └── constants.ts (shared constants and data)
```


### 2. Localization Approach

- **No i18n library**: Components receive localized text as props
- **Separate pages**: Each language has its own page file (`en/page.tsx`, `vi/page.tsx`)
- **Shared components**: Components in route group `components/` folder accept text content as props
- **Global components**: UI components in `src/components/ui/` are language-agnostic

## Implementation Steps

### Phase 1: Foundation Setup

1. **Install dependencies**

   - Install Shadcn UI

2. **Set up project structure**

   - Create route groups for each page: `(home)`, `(introduction)`, `(ecosystem)`, `(stouffer-hotels)`, `(hoteliers-without-borders)`, `(lumora)`, `(partnerships)`, `(contact)`
   - Create `en/` and `vi/` folders within each route group
   - Create `components/` folder within each route group for page-specific components
   - Set up global `src/components/ui/` folder for shared UI components

### Phase 2: The Design System (The Foundation)

Before building sections, you need your global styles set up so the AI doesn't hallucinate random hex codes.

**Prompt:**

"I am starting a new Next.js 15 project from a Figma design. First, look at the provided Figma design: https://www.figma.com/design/qgT174PzzZHOMcjA0XVasm/Primordial-Website?node-id=834-6879&m=dev. Extract the color palette and update tailwind.config.ts with these specific theme names (primary, secondary, accent). Set up the typography in app/layout.tsx using next/font/google to match the design. Create a components/ui/container.tsx that handles the max-width and horizontal padding for all sections based on the design's grid."

4. **Extract and configure design tokens**

   - Extract color palette from Figma design
   - Update `tailwind.config.ts` with theme colors (primary, secondary, accent)
   - Set up typography in `app/layout.tsx` using `next/font/google` to match design
   - Create `components/ui/container.tsx` for max-width and horizontal padding based on design grid

### Phase 4: Home Page Implementation

5. **Home page** (`src/app/(home)/en/page.tsx` and `src/app/(home)/vi/page.tsx`)

   - Use Figma API to download all images needed for this page
   - Create page-specific components in `src/app/(home)/components/`:
     - `Hero.tsx` - Hero section with banner slides (4 images), accepts text content as props
     - `StoufferSection.tsx` - Stouffer Hotels section with image gallery
     - `HWBSection.tsx` - Hoteliers Without Borders section
     - `LumoraSection.tsx` - Lumora IX.IX Agenda section with 3 images
     - `PartnershipSection.tsx` - Partnership section (Primordial Hospitium)
   - Each language page imports components and passes localized text as props
   - All sections with proper spacing and responsive design
   - Use Shadcn UI to create base components if needed
   - Implement text and image fade in on scroll animations

### Phase 5: Introduction Page

6. **Introduction page** (`src/app/(introduction)/en/page.tsx` and `src/app/(introduction)/vi/page.tsx`)

   - Use Figma API to download all images needed for this page
   - Create page-specific components in `src/app/(introduction)/components/`:
     - `Hero.tsx` - Hero section
     - `StorySection.tsx` - Our Story section with image and text
     - `VisionSection.tsx` - Vision section
     - `KeyFunctionsSection.tsx` - Key Functions section
     - `TeamSection.tsx` - Our Team section with team cards
   - Each language page passes localized content to components
   - Use Shadcn UI to create base components if needed
   - Implement text and image fade in on scroll animations

### Phase 6: Ecosystem Page

7. **Ecosystem page** (`src/app/(ecosystem)/en/page.tsx` and `src/app/(ecosystem)/vi/page.tsx`)

   - Use Figma API to download all images needed for this page
   - Create page-specific components in `src/app/(ecosystem)/components/`:
     - `Hero.tsx` - Hero section
     - `PillarsSection.tsx` - Three Strategic Pillars section with cards
     - `TimelineSection.tsx` - Ecosystem Applied in Stages timeline
     - `ProjectsSection.tsx` - Designed for Projects section with cards
   - Each language page passes localized content to components
   - Use Shadcn UI to create base components if needed
   - Implement text and image fade in on scroll animations

### Phase 7: Stouffer Hotels Page

8. **Stouffer Hotels page** (`src/app/(stouffer-hotels)/en/page.tsx` and `src/app/(stouffer-hotels)/vi/page.tsx`)

   - Use Figma API to download all images needed for this page
   - Create page-specific components in `src/app/(stouffer-hotels)/components/`:
     - `Hero.tsx` - Hero section
     - `IntroductionSection.tsx` - Introduction section
     - `WhatIsStoufferSection.tsx` - What is Stouffer section with cards (is/is not)
     - `MarketingSection.tsx` - Marketing & Partnership section
     - `IdentitySection.tsx` - Independent Identity section with image carousel
     - `ContactSection.tsx` - Contact section
   - Each language page passes localized content to components
   - Use Shadcn UI to create base components if needed
   - Implement text and image fade in on scroll animations

### Phase 8: Hoteliers Without Borders Page

9. **Hoteliers Without Borders page** (`src/app/(hoteliers-without-borders)/en/page.tsx` and `src/app/(hoteliers-without-borders)/vi/page.tsx`)

   - Use Figma API to download all images needed for this page
   - Create page-specific components in `src/app/(hoteliers-without-borders)/components/`:
     - `Hero.tsx` - Hero section
     - `WhatIsHWBSection.tsx` - What is Hotels Without Borders section
     - `ValueSection.tsx` - For Who & Value section with content blocks
     - `ImageSection.tsx` - Image section
   - Each language page passes localized content to components
   - Use Shadcn UI to create base components if needed
   - Implement text and image fade in on scroll animations

### Phase 9: Lumora Page

10. **Lumora page** (`src/app/(lumora)/en/page.tsx` and `src/app/(lumora)/vi/page.tsx`)

    - Use Figma API to download all images needed for this page
    - Create page-specific components in `src/app/(lumora)/components/`:
      - `Hero.tsx` - Hero section
      - `WhatIsLumoraSection.tsx` - What is Lumora section with images
      - `TimelineSection.tsx` - When Lumora is Activated timeline (3 phases)
      - `AudienceSection.tsx` - Target Audience section with content blocks
    - Each language page passes localized content to components
    - Use Shadcn UI to create base components if needed
    - Implement text and image fade in on scroll animations

### Phase 10: Partnerships Page

11. **Partnerships page** (`src/app/(partnerships)/en/page.tsx` and `src/app/(partnerships)/vi/page.tsx`)

    - Use Figma API to download all images needed for this page
    - Create page-specific components in `src/app/(partnerships)/components/`:
      - `Hero.tsx` - Hero section
      - `LogosSection.tsx` - Partner logos section
      - `TPOModelSection.tsx` - What is TPO Model section
      - `ImplementationSection.tsx` - How Primordial Implements TPO section
      - `ValueSection.tsx` - Partnership Value section
      - `ContactFormSection.tsx` - Contact form section
    - Each language page passes localized content to components
    - Use Shadcn UI to create base components if needed
    - Implement text and image fade in on scroll animations

### Phase 11: Contact Page

12. **Contact page** (`src/app/(contact)/en/page.tsx` and `src/app/(contact)/vi/page.tsx`)

    - Use Figma API to download all images needed for this page
    - Create page-specific components in `src/app/(contact)/components/`:
      - `Hero.tsx` - Hero section
      - `ContactInfoSection.tsx` - Contact information section
      - `ContactFormSection.tsx` - Contact form (name, email, phone, message)
      - `OfficesSection.tsx` - Offices section (Adelaide, Phu Quoc)
      - Success dialog (using global Dialog component)
    - Each language page passes localized content to components
    - Use Shadcn UI to create base components if needed
    - Implement text and image fade in on scroll animations

### Phase 12: Functionality

13. **Functionality implementation**

    - Implement interactive features across all pages
    - Add form validation for all contact forms
    - Create language switcher component that links between `/en/` and `/vi/` routes
    - Add SEO metadata for all pages (title, description, Open Graph tags)
    - Use Shadcn UI to create base components if needed
    - Implement text and image fade in on scroll animations across all pages


## Key Files to Create/Modify

### Configuration Files

- `package.json` - Add required dependencies (Shadcn UI, carousel libraries, etc.)
- `next.config.ts` - Standard Next.js configuration
- `tailwind.config.ts` - Tailwind configuration with design tokens

### Layout Files

- `src/app/layout.tsx` - Root layout
- `src/app/(home)/layout.tsx` - Optional layout for home route group
- (Similar layouts for other route groups if needed)

### Global Component Files

- `src/components/ui/PrimaryButton.tsx`
- `src/components/ui/Navbar.tsx` (accepts nav items as props)
- `src/components/ui/Container.tsx`
- `src/components/ui/Footer.tsx` (accepts footer content as props)
- `src/components/ui/Input.tsx`
- `src/components/ui/PhoneInput.tsx`
- `src/components/ui/Textarea.tsx`
- `src/components/ui/Dialog.tsx` (accepts title, message as props)

### Page-Specific Component Files

Each route group has its own `components/` folder with page-specific components:

**Home (`src/app/(home)/components/`):**

- `Hero.tsx`
- `StoufferSection.tsx`
- `HWBSection.tsx`
- `LumoraSection.tsx`
- `PartnershipSection.tsx`

**Introduction (`src/app/(introduction)/components/`):**

- `Hero.tsx`
- `StorySection.tsx`
- `VisionSection.tsx`
- `KeyFunctionsSection.tsx`
- `TeamSection.tsx`

**Ecosystem (`src/app/(ecosystem)/components/`):**

- `Hero.tsx`
- `PillarsSection.tsx`
- `TimelineSection.tsx`
- `ProjectsSection.tsx`

**Stouffer Hotels (`src/app/(stouffer-hotels)/components/`):**

- `Hero.tsx`
- `IntroductionSection.tsx`
- `WhatIsStoufferSection.tsx`
- `MarketingSection.tsx`
- `IdentitySection.tsx`
- `ContactSection.tsx`

**Hoteliers Without Borders (`src/app/(hoteliers-without-borders)/components/`):**

- `Hero.tsx`
- `WhatIsHWBSection.tsx`
- `ValueSection.tsx`
- `ImageSection.tsx`

**Lumora (`src/app/(lumora)/components/`):**

- `Hero.tsx`
- `WhatIsLumoraSection.tsx`
- `TimelineSection.tsx`
- `AudienceSection.tsx`

**Partnerships (`src/app/(partnerships)/components/`):**

- `Hero.tsx`
- `LogosSection.tsx`
- `TPOModelSection.tsx`
- `ImplementationSection.tsx`
- `ValueSection.tsx`
- `ContactFormSection.tsx`

**Contact (`src/app/(contact)/components/`):**

- `Hero.tsx`
- `ContactInfoSection.tsx`
- `ContactFormSection.tsx`
- `OfficesSection.tsx`

### Page Files

Each route group contains separate pages for each language:

**Home:**

- `src/app/(home)/en/page.tsx`
- `src/app/(home)/vi/page.tsx`

**Introduction:**

- `src/app/(introduction)/en/page.tsx`
- `src/app/(introduction)/vi/page.tsx`

**Ecosystem:**

- `src/app/(ecosystem)/en/page.tsx`
- `src/app/(ecosystem)/vi/page.tsx`

**Stouffer Hotels:**

- `src/app/(stouffer-hotels)/en/page.tsx`
- `src/app/(stouffer-hotels)/vi/page.tsx`

**Hoteliers Without Borders:**

- `src/app/(hoteliers-without-borders)/en/page.tsx`
- `src/app/(hoteliers-without-borders)/vi/page.tsx`

**Lumora:**

- `src/app/(lumora)/en/page.tsx`
- `src/app/(lumora)/vi/page.tsx`

**Partnerships:**

- `src/app/(partnerships)/en/page.tsx`
- `src/app/(partnerships)/vi/page.tsx`

**Contact:**

- `src/app/(contact)/en/page.tsx`
- `src/app/(contact)/vi/page.tsx`

## Design Considerations

1. **Typography**: Match font sizes, weights, and line heights from Figma
2. **Spacing**: Use consistent spacing system (matching Figma's 8px/4px grid)
3. **Colors**: Extract color palette from Figma and add to Tailwind config
4. **Images**: All images should be responsive and optimized
5. **Breakpoints**: Support mobile (375px), tablet, and desktop (1440px) layouts
6. **Animations**: Add subtle transitions for better UX

## Notes

- **Localization Approach**: No i18n library - components receive localized text as props
- **Route Structure**: Pages are organized using Next.js route groups `(home)`, `(introduction)`, etc.
- **Language Routes**: Each page has separate routes: `/en/` and `/vi/` (e.g., `/en/`, `/vi/`, `/en/introduction`, `/vi/introduction`)
- **Component Props**: All components accept text content as props, making them reusable across both language versions
- **Default Language**: Vietnamese (vi) can be set as the default route (e.g., redirect `/` to `/vi/`)
- **Language Switcher**: Implement a language switcher component that links between `/en/` and `/vi/` routes
- **Images**: May need to be extracted from Figma or provided separately
- **Form Submissions**: Will need backend integration (can be added later)
- **Banner Slides**: Should auto-play with manual navigation controls
- **Shared Components**: Page-specific components live in each route group's `components/` folder, while global UI components are in `src/components/ui/`