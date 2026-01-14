---
name: Implement Primordial Website with i18n
overview: Implement the complete Primordial website from Figma with dual language support (Vietnamese as default, English). This includes setting up next-intl for internationalization, creating all pages (Home, Introduction, Ecosystem, Stouffer Hotels, Hoteliers Without Borders, Lumora, Partnerships, Contact), extracting images from Figma, and building reusable components.
todos: []
---

# Implement Primordial Website with i18n

## Overview

Implement the complete Primordial hospitality website from Figma with Vietnamese (default) and English language support. The site includes multiple pages with complex layouts, hero sections, content blocks, and interactive elements.

## Architecture

### 1. Internationalization Setup

- Install `next-intl` package for Next.js 16 App Router
- Configure `[locale]` dynamic routing structure
- Set up middleware for locale detection and routing
- Create translation files structure in `src/messages/` for `vi` and `en`
- Configure default locale as `vi` in Next.js config

### 2. Project Structure

```
src/
├── app/
│   └── [locale]/
│       ├── layout.tsx (root layout with locale)
│       ├── page.tsx (home page)
│       ├── introduction/
│       ├── ecosystem/
│       ├── stouffer-hotels/
│       ├── hoteliers-without-borders/
│       ├── lumora/
│       ├── partnerships/
│       └── contact/
├── components/
│   ├── ui/ (reusable UI components)
│   │   ├── Button.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Input.tsx
│   │   └── Dialog.tsx
│   └── sections/ (page sections)
│       ├── Hero.tsx
│       ├── ContentSection.tsx
│       └── ...
├── messages/
│   ├── vi.json
│   └── en.json
└── i18n/
    └── request.ts (i18n configuration)
```

## Implementation Steps

### Phase 1: Foundation & i18n Setup

1. **Install dependencies**

   - Add `next-intl` package
   - Install any additional UI libraries if needed

2. **Configure i18n**

   - Create `src/i18n/request.ts` for next-intl configuration
   - Update `next.config.ts` with i18n settings
   - Create middleware for locale handling
   - Set up `src/messages/vi.json` and `src/messages/en.json` with all translations

3. **Restructure app directory**

   - Move existing `src/app/page.tsx` to `src/app/[locale]/page.tsx`
   - Update `src/app/layout.tsx` to work with locale routing
   - Create new root layout in `src/app/[locale]/layout.tsx`

### Phase 2: Core Components

4. **Create reusable UI components** (`src/components/ui/`)

   - `Button.tsx` - Primary button component with variants
   - `Header.tsx` - Navigation header with language switcher
   - `Footer.tsx` - Footer component
   - `Input.tsx` - Form input component
   - `PhoneInput.tsx` - Phone number input with country selector
   - `Textarea.tsx` - Message textarea component
   - `Dialog.tsx` - Success dialog modal

5. **Create section components** (`src/components/sections/`)

   - `Hero.tsx` - Hero section with banner slides
   - `ContentSection.tsx` - Reusable content section
   - `ImageGallery.tsx` - Image gallery component
   - `Timeline.tsx` - Timeline component for phases
   - `Card.tsx` - Card component for services/features

### Phase 3: Home Page Implementation

6. **Home page** (`src/app/[locale]/page.tsx`)

   - Hero section with banner slides (4 images)
   - Stouffer Hotels section with image gallery
   - Hoteliers Without Borders section
   - Lumora IX.IX Agenda section with 3 images
   - Partnership section (Primordial Hospitium)
   - All sections with proper spacing and responsive design

### Phase 4: Additional Pages

7. **Introduction page** (`src/app/[locale]/introduction/page.tsx`)

   - Hero section
   - Our Story section with image and text
   - Vision section
   - Key Functions section
   - Our Team section with team cards

8. **Ecosystem page** (`src/app/[locale]/ecosystem/page.tsx`)

   - Hero section
   - Three Strategic Pillars section with cards
   - Ecosystem Applied in Stages timeline
   - Designed for Projects section with cards

9. **Stouffer Hotels page** (`src/app/[locale]/stouffer-hotels/page.tsx`)

   - Hero section
   - Introduction section
   - What is Stouffer section with cards (is/is not)
   - Marketing & Partnership section
   - Independent Identity section with image carousel
   - Contact section

10. **Hoteliers Without Borders page** (`src/app/[locale]/hoteliers-without-borders/page.tsx`)

    - Hero section
    - What is Hotels Without Borders section
    - For Who & Value section with content blocks
    - Image section

11. **Lumora page** (`src/app/[locale]/lumora/page.tsx`)

    - Hero section
    - What is Lumora section with images
    - When Lumora is Activated timeline (3 phases)
    - Target Audience section with content blocks

12. **Partnerships page** (`src/app/[locale]/partnerships/page.tsx`)

    - Hero section
    - Partner logos section
    - What is TPO Model section
    - How Primordial Implements TPO section
    - Partnership Value section
    - Contact form section

13. **Contact page** (`src/app/[locale]/contact/page.tsx`)

    - Hero section
    - Contact information section
    - Contact form (name, email, phone, message)
    - Offices section (Adelaide, Phu Quoc)
    - Success dialog

### Phase 5: Assets & Styling

14. **Extract images from Figma**

    - Use Figma API to download all images
    - Organize images in `public/images/` directory
    - Optimize images for web (WebP format where possible)
    - Create image mapping for easy reference

15. **Styling & Responsive Design**

    - Implement Tailwind CSS classes matching Figma design
    - Ensure responsive breakpoints (mobile, tablet, desktop)
    - Match typography, spacing, and colors from design
    - Add animations/transitions where appropriate

### Phase 6: Functionality

16. **Interactive Features**

    - Banner slider/carousel for hero sections
    - Image carousel for galleries
    - Form validation and submission
    - Language switcher functionality
    - Smooth scrolling and navigation

17. **SEO & Metadata**

    - Add proper metadata for each page
    - Implement Open Graph tags
    - Add structured data where appropriate

## Key Files to Create/Modify

### Configuration Files

- `package.json` - Add next-intl dependency
- `next.config.ts` - Configure i18n
- `src/middleware.ts` - Locale detection and routing
- `src/i18n/request.ts` - next-intl configuration

### Translation Files

- `src/messages/vi.json` - Vietnamese translations
- `src/messages/en.json` - English translations

### Layout Files

- `src/app/[locale]/layout.tsx` - Root layout with locale
- `src/app/layout.tsx` - Update for locale routing

### Component Files

- `src/components/ui/Button.tsx`
- `src/components/ui/Header.tsx`
- `src/components/ui/Footer.tsx`
- `src/components/ui/Input.tsx`
- `src/components/ui/PhoneInput.tsx`
- `src/components/ui/Textarea.tsx`
- `src/components/ui/Dialog.tsx`
- `src/components/sections/Hero.tsx`
- `src/components/sections/ContentSection.tsx`
- `src/components/sections/ImageGallery.tsx`
- `src/components/sections/Timeline.tsx`
- `src/components/sections/Card.tsx`

### Page Files

- `src/app/[locale]/page.tsx` - Home page
- `src/app/[locale]/introduction/page.tsx`
- `src/app/[locale]/ecosystem/page.tsx`
- `src/app/[locale]/stouffer-hotels/page.tsx`
- `src/app/[locale]/hoteliers-without-borders/page.tsx`
- `src/app/[locale]/lumora/page.tsx`
- `src/app/[locale]/partnerships/page.tsx`
- `src/app/[locale]/contact/page.tsx`

## Design Considerations

1. **Typography**: Match font sizes, weights, and line heights from Figma
2. **Spacing**: Use consistent spacing system (matching Figma's 8px/4px grid)
3. **Colors**: Extract color palette from Figma and add to Tailwind config
4. **Images**: All images should be responsive and optimized
5. **Breakpoints**: Support mobile (375px), tablet, and desktop (1440px) layouts
6. **Animations**: Add subtle transitions for better UX

## Notes

- Default language is Vietnamese (vi)
- All text content should be translatable
- Images may need to be extracted from Figma or provided separately
- Form submissions will need backend integration (can be added later)
- Banner slides should auto-play with manual navigation controls