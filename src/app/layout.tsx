import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { ReactNode } from "react";
import LoginButton from "@/components/LoginButton";
import { FirebaseProvider } from "@/components/FirebaseProvider";

export const metadata = {
  title: "WetPets — Dog-Friendly Swimming Spots in Austin",
  description:
    "Find creeks, lakes, splash pads, and safe access points for dogs in Austin. Built by dog people. Splash tested in ATX.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900">
        <FirebaseProvider>
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
                <Link href="/spots" className="underline-offset-4 hover:underline">Spots</Link>
                <Link href="/#how" className="underline-offset-4 hover:underline">How it works</Link>
              </nav>

              <div className="flex items-center gap-4">
                <Link
                  href="/add-spot"
                  className="hidden rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 md:block"
                >
                  + Add a Spot
                </Link>
                <LoginButton />
              </div>
            </div>
          </header>
          {children}
          <Script
            defer
            data-domain="wetpets.app"
            src="https://plausible.io/js/script.outbound-links.js"
          />
        </FirebaseProvider>
      </body>
    </html>
  );
}
