# Corso Command Dashboard

A Next.js-based command dashboard with integrated Vercel Web Analytics for monitoring and insights.

## Features

- Built with Next.js 14
- Integrated Vercel Web Analytics for real-time performance monitoring
- Responsive design with modern styling
- API routes for command processing

## Vercel Web Analytics Integration

This project includes Vercel Web Analytics to track user interactions and performance metrics.

### How Analytics is Configured

1. **React Component Integration**: The `Analytics` component from `@vercel/analytics/react` is imported and used in the root layout (`app/layout.js`)
2. **Client-Side Only**: The Analytics component runs only on the client side, collecting user interaction data
3. **Automatic Tracking**: Once integrated, analytics data is automatically sent to Vercel's servers

### Installation

The `@vercel/analytics` package is already included in `package.json`. To install dependencies:

```bash
npm install
# or
pnpm install
# or
yarn install
# or
bun install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:3000` to see the application. Analytics data will be collected when running on Vercel or in production.

### Production

```bash
npm run build
npm run start
```

## Project Structure

```
corso-command-dashboard/
├── app/
│   ├── layout.js           # Root layout with Analytics integration
│   ├── page.js             # Home page component
│   ├── globals.css         # Global styles
│   └── page.module.css     # Page-specific styles
├── pages/                  # Legacy pages (optional)
├── public/                 # Static assets
├── package.json            # Project dependencies
├── next.config.js          # Next.js configuration
└── README.md              # This file
```

## Dependencies

- **next**: ^14.0.0 - React framework
- **react**: ^18.0.0 - UI library
- **react-dom**: ^18.0.0 - React DOM bindings
- **@vercel/analytics**: ^1.0.0 - Vercel Web Analytics

## Notes

- Analytics data is only sent to Vercel when the site is deployed to Vercel or when in production mode
- The Analytics component does not track route-level data, only core web vitals and user interactions
- For more information about Vercel Analytics, visit [Vercel's documentation](https://vercel.com/docs/analytics)
