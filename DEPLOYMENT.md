# RideShare SA Website - Deployment Guide

## Quick Start

### Prerequisites
- Node.js 18+ installed
- Git for version control

### Local Development
```bash
# Clone or download the project
cd rideshare-web

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

### Production Build
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment Options

### 1. Vercel (Recommended)
1. Push code to a GitHub repository
2. In Vercel: **Add New Project** → import the repo
3. Framework preset: **Vite** (or leave as auto-detected)
4. Build command: `npm run build`
5. Output directory: `dist`
6. (Optional) Environment variable: `VITE_PLATFORM_URL=https://app.rideshare-sa.co.za`
7. Deploy (Vercel will auto-deploy on every git push)

#### React Router (SPA) routing
This project uses React Router. For deep links/refresh to work on Vercel, add a rewrite to serve `index.html`.

- This repo includes a `vercel.json` rewrite config (recommended).

### 2. Netlify
1. Push code to GitHub repository
2. Connect repository to Netlify
3. Set environment variable: `VITE_PLATFORM_URL=https://app.rideshare-sa.co.za`
4. Build command: `npm run build`
5. Publish directory: `dist`

### 3. Static Hosting
1. Run `npm run build`
2. Upload the `dist/` folder to your static host
3. Ensure the server supports SPA routing (fallback to `index.html`)

## Environment Variables

Create a `.env` file in the root:
```env
VITE_PLATFORM_URL=https://app.rideshare-sa.co.za
```

## Project Structure

```
rideshare-web/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   ├── pages/             # Page components
│   ├── config/            # Configuration files
│   └── assets/            # Images and media used by the UI
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.ts         # Vite build configuration
└── README.md              # Project documentation
```

## Features

- ✅ **Modern Design**: Pill-shaped navigation, glass morphism effects
- ✅ **Responsive**: Mobile-first design approach
- ✅ **Fast**: Optimized build with Vite
- ✅ **SEO-friendly**: Single-page app shell with sensible metadata
- ✅ **Branded**: Complete RideShare SA branding

## Support

For technical issues or questions:
- Check the [README.md](./README.md) for detailed documentation
- Review the component structure in `src/components/`
- Verify environment variables are set correctly

## License

This project is proprietary to RideShare SA.
