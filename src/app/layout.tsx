// src/app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "WetPets — Dog-Friendly Swimming Spots in Austin",
  description:
    "Find creeks, lakes, splash pads, and access points for dogs in Austin. Built by dog people. Splash tested in ATX.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-neutral-900">{children}</body>
    </html>
  );
}
