# RideShare SA Website - Deployment Guide

## Quick Start

### Prerequisites
- Node.js 18+ installed
- Git for version control

### Local Development
```bash
# Clone or download the project
cd rideshare-sa-website

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5174 in your browser
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
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Set environment variable: `VITE_PLATFORM_URL=https://app.rideshare-sa.co.za`
4. Deploy automatically on git push

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
rideshare-sa-website/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   ├── pages/             # Page components
│   ├── config/            # Configuration files
│   └── styles/            # CSS and styling
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.ts         # Vite build configuration
└── README.md              # Project documentation
```

## Features

- ✅ **Modern Design**: Pill-shaped navigation, glass morphism effects
- ✅ **Responsive**: Mobile-first design approach
- ✅ **Fast**: Optimized build with Vite
- ✅ **SEO**: Proper meta tags and structured content
- ✅ **Accessible**: WCAG compliant components
- ✅ **Branded**: Complete RideShare SA branding

## Support

For technical issues or questions:
- Check the [README.md](./README.md) for detailed documentation
- Review the component structure in `src/components/`
- Verify environment variables are set correctly

## License

This project is proprietary to RideShare SA.
