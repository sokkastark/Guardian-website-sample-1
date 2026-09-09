# Guardian — Healthcare Intelligence Platform

> Healthcare data, turned into action. Guardian connects healthcare data, clinical intelligence, technology, and healthcare expertise to help organizations make better decisions and take meaningful action.

![Guardian Preview](/docs/guardian-logo.png)

## Overview

This repository contains the interactive corporate website for **Guardian Healthcare**. It features state-of-the-art interactive healthcare intelligence visualizations, dynamic multi-plane 3D parallax hero interactions, interactive patient/journey consoles, and smooth scroll-triggered entrance animations across all sections.

### Key Highlights
- **Multi-Plane 3D Parallax Hero**: Cinematic hospital skyline background with dynamic mouse tracking, static clinician anchor, 5 frosted holographic data stream pills (EHR, Claims, Labs, ADT, HIE), and 3D floating patient HUD cards (Eleanor Vance master record + Care Opportunity alert).
- **Interactive Guardian Journey Console**: 4-stage value-based care cycle (Aggregate, Translate, Coordinate, Realize) with live clinical case switcher and real-time metric projections.
- **Platform Architecture Deep-Dive**: 6-layer capability inspector spanning Connect, Normalize, Intelligence Engine, Clinical Workflows, Analytics, and Extensibility.
- **Dual Perspective Audience Console**: Interactive toggle between **Providers & Clinicians** and **Payers & Risk-Bearing Entities**.
- **People + Technology Operational Grid**: Interactive role inspector highlighting Nurse Case Managers, VBC Directors, Primary Care Providers, and Quality Officers.
- **Scroll Entrance Animations**: Buttery smooth Framer Motion entrance reveals across all sections.

---

## Tech Stack
- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) + custom rAF 3D Parallax hooks
- **Icons**: [Lucide React](https://lucide.dev/)

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` or `pnpm`

### Installation

```bash
# Clone repository
git clone https://github.com/sokkastark/Guardian-website-sample-1.git

# Navigate to project directory
cd Guardian-website-sample-1

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
```

To preview the built production site locally:
```bash
npm run preview
```

---

## Project Structure

```
Guardian-website-sample-1/
├── docs/                      # Original creative notes, branding, and docx source copy
│   ├── Agents.md
│   ├── Guardian_Homepage_Content_V1.docx
│   └── ...
├── public/                    # Static assets (images, cutouts, icons)
│   └── images/
├── src/
│   ├── components/
│   │   ├── hero/              # Hero, 3D Parallax visual cards & data pills
│   │   ├── journey/           # 4-stage Guardian Journey interactive canvas
│   │   ├── layout/            # Sticky Header & Footer
│   │   └── sections/          # All interactive homepage sections
│   ├── hooks/                 # Custom animation hooks (useMouseParallax)
│   ├── App.jsx                # Main single-page application layout
│   ├── main.jsx               # React entry point
│   └── index.css              # Tailwind CSS imports & global styles
├── index.html                 # HTML template with metadata & SEO tags
├── package.json
└── vite.config.js
```

---

## License
Private & Confidential. All rights reserved.
