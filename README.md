# IntegraMind-AI Landing Page

A modern, responsive single-page landing page for IntegraMind-AI - an AI-powered business automation platform. Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🚀 Features

- **Single-Page Design**: Smooth scroll navigation between sections
- **Responsive Layout**: Mobile-first design with hamburger menu
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS v4
- **Type-Safe**: Full TypeScript support
- **Performance Optimized**: Next.js App Router with optimized fonts and images

## 📋 Sections

1. **Hero Section** - Main headline, CTAs, and key statistics
2. **Services** - 6 AI automation service offerings
3. **Products** - 4 product showcases with metrics and pricing
4. **About** - Company information and team
5. **Process** - 5-step implementation process
6. **Case Studies** - Client success stories
7. **Contact** - Contact form and information
8. **Footer** - Company links and details

## 🛠️ Tech Stack

- **Framework**: [Next.js 16] (App Router)
- **Language**: [TypeScript]
- **Styling**: [Tailwind CSS v4]
- **UI Components**: [shadcn/ui]
- **Icons**: [Lucide React]
- **Fonts**: [Geist] (via Next.js)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd IntegraMind-AI
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
IntegraMind-AI/
├── app/
│   ├── globals.css          # Global styles and theme variables
│   ├── layout.tsx            # Root layout with Navigation & Footer
│   └── page.tsx              # Main landing page
├── components/
│   ├── ui/                   # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── input.tsx
│   ├── navigation.tsx        # Sticky header with smooth scroll
│   ├── hero.tsx              # Hero section
│   ├── services.tsx          # Services section
│   ├── products.tsx          # Products section
│   ├── about.tsx             # About section
│   ├── process.tsx           # Process section
│   ├── case-studies.tsx      # Case studies section
│   ├── contact.tsx           # Contact section
│   └── footer.tsx           # Footer component
├── lib/
│   └── utils.ts              # Utility functions (cn helper)
└── components.json           # shadcn/ui configuration
```

## 🎨 Customization

### Theme Colors

Theme colors are defined in `app/globals.css` using CSS variables:

```css
:root {
  --background: oklch(1 0 0);        /* White background */
  --foreground: oklch(0.145 0 0);   /* Dark text */
  --card: oklch(1 0 0);              /* White cards */
  --card-foreground: oklch(0.145 0 0); /* Dark text on cards */
}
```

### Adding shadcn/ui Components

To add new shadcn/ui components:

```bash
npx shadcn@latest add [component-name]
```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint


### Other Platforms



## 🔧 Configuration

### Tailwind CSS

Tailwind CSS v4 is configured via `postcss.config.mjs`. The theme uses CSS variables defined in `app/globals.css`.

### shadcn/ui

Configuration is in `components.json`. To modify the setup:

```json
{
  "style": "default",
  "rsc": true,
  "tailwind": {
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  }
}
```

## 📝 Development Notes

- All components are TypeScript and follow React best practices
- Navigation uses smooth scroll with active section highlighting
- Mobile menu is implemented for responsive design
- All sections use semantic HTML for accessibility

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 👥 Team

Built for IntegraMind-AI - Transforming businesses through intelligent AI automation solutions.

---

For more information, visit IntegraMind-AI or contact us at contact@integramind-ai.com
