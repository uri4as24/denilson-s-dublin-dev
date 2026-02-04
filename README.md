# Denilson Lopez - Portfolio

A modern, mobile-first portfolio website built with React, Vite, TypeScript, and TailwindCSS.

## Features

- 🎨 Dark mode by default with light mode toggle
- 📱 Mobile-first responsive design
- ⚡ Fast loading with Vite
- 🎭 Subtle animations and micro-interactions
- 🔍 SEO optimized with meta tags
- ♿ Accessible with proper ARIA labels
- 📊 Project filtering by category
- 📝 Contact form with validation

## Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Routing:** React Router DOM

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/uri4as24/portfolio.git
cd portfolio

# Install dependencies
npm install
# or
bun install
```

### Development

```bash
# Start development server
npm run dev
# or
bun dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
# Build for production
npm run build
# or
bun run build
```

### Preview Production Build

```bash
npm run preview
# or
bun preview
```

## Project Structure

```
src/
├── components/
│   ├── home/           # Home page sections
│   ├── layout/         # Header, Footer, Layout
│   └── ui/             # shadcn/ui components
├── data/
│   └── portfolio.ts    # Centralized data (projects, experience, etc.)
├── pages/              # Route pages
├── hooks/              # Custom React hooks
└── lib/                # Utilities
```

## Customization

### Updating Content

All portfolio content is centralized in `src/data/portfolio.ts`. Update this file to change:

- Personal information
- Projects
- Work experience
- Education
- Certifications
- Skills

### Styling

The design system is defined in:
- `src/index.css` - CSS variables and custom utilities
- `tailwind.config.ts` - Tailwind configuration

## Deployment

### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Manual

Build the project and upload the `dist` folder to any static hosting provider.

## Adding Your CV

Place your CV file at `public/Denilson-Lopez-CV.pdf` to enable the download button.

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

- **Email:** urias4141@gmail.com
- **LinkedIn:** [denilson-l](https://www.linkedin.com/in/denilson-l/)
- **GitHub:** [uri4as24](https://github.com/uri4as24)
