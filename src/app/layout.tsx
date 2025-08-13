import "./globals.css";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata = {
  title: "WetPets",
  description: "Dog-friendly swimming spots in Austin",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-neutral-50 text-neutral-900">
        <header className="border-b bg-white">
          <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.svg" alt="WetPets logo" className="h-8 w-8" />
              <span className="text-lg font-semibold">WetPets</span>
            </Link>
            <div className="flex items-center gap-5">
              <Link href="/spots" className="text-sm font-medium">
                Spots
              </Link>
              <a href="#how-it-works" className="text-sm font-medium">
                How it works
              </a>
              <a
                href="#"
                className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white"
                aria-disabled="true"
                title="Add-a-Spot form coming soon"
              >
                + Add a Spot
              </a>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
