# FlipFlop Landing Page

Modern, responsive landing page built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
landing-next/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Main landing page
│   └── globals.css          # Global Tailwind styles
├── components/
│   ├── common/
│   │   ├── Header.tsx       # Navigation header
│   │   └── Footer.tsx       # Footer links
│   └── landing/
│       ├── Hero.tsx         # Hero section with CTAs
│       ├── Features.tsx     # Features grid
│       ├── Pricing.tsx      # Pricing cards
│       └── FAQ.tsx          # FAQ accordion
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── next.config.js           # Next.js configuration
```

## ✨ Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for utility-first styling
- ✅ Framer Motion animations
- ✅ Sticky navigation header
- ✅ Interactive FAQ accordion
- ✅ SEO optimized with metadata
- ✅ Accessible (ARIA labels, keyboard navigation)

## 🎨 Customization

### Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#6366F1',
    hover: '#4F46E5',
  },
  secondary: '#8B5CF6',
  accent: '#10B981',
}
```

### Content

Edit the sections directly in:
- `app/page.tsx` - Problem, Solution, How It Works sections
- `components/landing/Hero.tsx` - Hero content
- `components/landing/Features.tsx` - Feature cards
- `components/landing/Pricing.tsx` - Pricing tiers
- `components/landing/FAQ.tsx` - FAQ items

## 🚢 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

Build the static export:

```bash
npm run build
```

Deploy the `.next` folder to any hosting service.

## 📊 Analytics

Add your analytics provider in `app/layout.tsx`:

```typescript
// Google Analytics
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_ID" />

// PostHog
<Script src="https://cdn.posthog.com/array.js" />
```

## 📝 License

MIT License - Team FlipFlop

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.
