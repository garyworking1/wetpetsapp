import type { ReactNode } from 'react';
import Script from 'next/script';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Plausible Analytics with outbound links + 404 tracking */}
        <Script
          defer
          data-domain="wetpets.app"
          data-api="/api/event"
          src="https://plausible.io/js/script.outbound-links.404.js"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
