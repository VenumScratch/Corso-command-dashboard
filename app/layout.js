import { Analytics } from '@vercel/analytics/react';
import './globals.css';

export const metadata = {
  title: 'Corso Command Dashboard',
  description: 'A command dashboard for managing Corso operations',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
