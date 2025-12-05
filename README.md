# CorsoCommand Dashboard

A Next.js dashboard application for managing AI Actions, Affiliate Links, and Campaign Status with integrated Vercel Web Analytics.

## Features

- **Live AI Actions**: Track real-time AI-powered actions
- **Campaign Status**: Monitor affiliate campaigns and their status
- **KPI Metrics**: Display key performance indicators (ROI, Earnings)
- **Vercel Web Analytics**: Automatic web vitals tracking and analytics

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Analytics**: Vercel Web Analytics
- **Styling**: CSS
- **Package Manager**: npm

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

### Linting

```bash
npm run lint
```

### Testing

```bash
npm test
```

## Analytics Integration

This project includes Vercel Web Analytics for tracking:
- Page views
- Core Web Vitals (LCP, FID, CLS)
- Performance metrics

The analytics are automatically injected on the client side through the Analytics component in `app/analytics.tsx`.

## Project Structure

```
├── app/
│   ├── analytics.tsx       # Client-side analytics component
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main dashboard page
│   └── globals.css         # Global styles
├── public/                 # Static assets
├── package.json
├── next.config.js
├── tsconfig.json
└── README.md
```

## License

Private project
