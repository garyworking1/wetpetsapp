import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata = {
  title: "WetPets — Dog-Friendly Swimming in Austin",
  description:
    "Find creeks, lakes, splash pads, and safe access points for dogs in Austin.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const addSpotUrl = "#"; // replace with your Google Form when ready

  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-neutral-900">
        {/* Sticky header with YOUR logo */}
        <header className="sticky top-0 z-40 border-b border-neutral-200/70 bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.jpg"
                alt="WetPets logo"
                width={28}
                height={28}
                className="rounded-md"
                priority
              />
              <span className="font-semibold">WetPets</span>
            </Link>

            <nav className="hidden gap-6 text-sm md:flex">
              <Link href="/#spots" className="underline-offset-4 hover:underline">
                Spots
              </Link>
              <Link href="/#how" className="underline-offset-4 hover:underline">
                How it works
              </Link>
            </nav>

            {/* External (or hash) link is fine to keep as <a> */}
            <a
              href={addSpotUrl} target="_blank" rel="noopener noreferrer" 
              className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
            >
              + Add a Spot
            </a>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
