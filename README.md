# RideShare SA Website

A standalone, modern marketing website for RideShare SA - South Africa's premier peer-to-peer car rental platform.

## Overview

This is a production-ready marketing website showcasing the RideShare SA platform with:
- **Modern, responsive design** with pill-shaped navigation
- **Enhanced user experience** with animations and micro-interactions
- **Complete branding** as "RideShare SA" (not RideShareX)
- **Multi-page navigation** with comprehensive content sections
- **Mobile-optimized** design with touch-friendly interfaces

## Features

- **Modern, responsive design** matching RideShare SA brand colors and typography
- **Multi-page navigation**: Home, How It Works, For Renters, For Hosts, Safety, FAQ, Contact
- **Configurable platform URL**: All "Go to Platform" CTAs link to `VITE_PLATFORM_URL` (defaults to `https://app.rideshare-sa.co.za`)
- **Mobile-friendly navigation** with hamburger menu
- **Reusable components**: Navbar, Footer, FAQ accordion, CTA banners
- **Glass-morphism design** with subtle backdrop blur effects

## Tech Stack

- **Vite** + **React** + **TypeScript**
- **Tailwind CSS** with custom RideShare SA theme
- **React Router** for navigation
- **Lucide React** for icons

## Development

```bash
npm install
npm run dev
```

The site runs on `http://localhost:5173/` by default.

## Environment Variables

Create a `.env` file in the root:

```env
VITE_PLATFORM_URL=https://app.rideshare-sa.co.za
```

If not set, defaults to `https://app.rideshare-sa.co.za`.

## Build

```bash
npm run build
```

Outputs to `dist/` directory, ready for deployment.

## Deployment

### Vercel (Recommended)

1. Connect the `marketing/` folder to Vercel
2. Set environment variable: `VITE_PLATFORM_URL=https://app.rideshare-sa.co.za`
3. Deploy automatically on git push

### Netlify

1. Connect the `marketing/` folder to Netlify
2. Set environment variable: `VITE_PLATFORM_URL=https://app.rideshare-sa.co.za`
3. Build command: `npm run build`
4. Publish directory: `dist`

### Static Hosting

1. Run `npm run build`
2. Upload the `dist/` folder to your static host
3. Ensure the server supports SPA routing (fallback to `index.html`)

## Brand Colors

- **Primary (SA Green)**: `#00A651`
- **Accent (Heritage Gold)**: `#FFD700`
- **Typography**: Inter (body), Poppins (headings)

## Pages

- **Home** (`/`): Hero, how it works, benefits, testimonials, stats
- **How It Works** (`/how-it-works`): Step-by-step flows for renters and hosts
- **For Renters** (`/for-renters`): Use cases, benefits, getting started
- **For Hosts** (`/for-hosts`): Earnings potential, safety features, FAQs
- **Safety** (`/safety`): Verification process, safety features, emergency info
- **FAQ** (`/faq`): Organized by renters, hosts, and general questions
- **Contact** (`/contact`): Contact form, business inquiries, support info

## Customization

- Update `VITE_PLATFORM_URL` to change the main app link
- Modify `tailwind.config.js` for brand colors
- Edit pages in `src/pages/` for content changes
- Update components in `src/components/` for layout changes
