"use client";

import Link from "next/link";
import { useEffect } from "react";

// Let TypeScript know that the Plausible script may be available on the window
declare global {
  interface Window {
    plausible?: (event: "404", props?: { props: { path: string } }) => void;
  }
}

export default function NotFound() {
  useEffect(() => {
    window.plausible?.("404", { props: { path: document.location.pathname } });
  }, []);

  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold">404 — This page can’t be found</h1>
      <p className="mt-2 text-neutral-700">
        Looks like the water’s dried up here. 🐶🌊
      </p>
      <Link href="/" className="mt-6 inline-block text-blue-700 underline-offset-4 hover:underline">
        Go back to the homepage
      </Link>
    </main>
  );
}
