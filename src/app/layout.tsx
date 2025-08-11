import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          defer
          data-domain="wetpets.app"
          src="https://plausible.io/js/script.js"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
