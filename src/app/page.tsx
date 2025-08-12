import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'WetPets — Dog-Friendly Swimming Spots in Austin',
  description:
    'Find creeks, lakes, and splash pads for dogs in Austin. Built by dog people, splash tested in ATX.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Header */}
      <header className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-xl">
          <Image src="/photos/IMG_0396.jpg" alt="WetPets logo" width={28} height={28} className="rounded" priority />
          WetPets
        </Link>
        <nav className="text-sm space-x-6">
          <Link href="#how" className="underline-offset-4 hover:underline">How it works</Link>
          <Link href="#spots" className="underline-offset-4 hover:underline">Spots</Link>
          <Link href="#app" className="underline-offset-4 hover:underline">Get the app</Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 pt-10 pb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Austin’s Dog-Friendly Swimming Spot Locator 🐶🌊
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-neutral-700">
          WetPets helps Austin dog owners find safe, fun places for pups to splash — from hidden creeks to iconic lakes.
        </p>
        <div className="mt-6 flex gap-3 flex-wrap">
          <a id="app" href="#" className="rounded-2xl px-5 py-3 bg-black text-white font-medium shadow-sm hover:opacity-90" aria-disabled="true" title="Coming soon">
            Download (coming soon)
          </a>
          <Link href="#spots" className="rounded-2xl px-5 py-3 border border-neutral-300 hover:bg-neutral-50">
            Browse local spots
          </Link>
        </div>
      </section>

      {/* Why WetPets */}
      <section id="how" className="mx-auto max-w-5xl px-4 py-8">
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-neutral-200 p-4">
            <h3 className="font-semibold">Curated for Austin</h3>
            <p className="text-neutral-700 text-sm mt-1">The best water spots in and around ATX.</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-4">
            <h3 className="font-semibold">Safety & Access</h3>
            <p className="text-neutral-700 text-sm mt-1">Currents, algae advisories, access points, parking.</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-4">
            <h3 className="font-semibold">Built by dog people</h3>
            <p className="text-neutral-700 text-sm mt-1">Splash-tested by locals and their pups.</p>
          </div>
        </div>
      </section>

      {/* Featured Spots */}
      <section id="spots" className="mx-auto max-w-5xl px-4 pb-14">
        <h2 className="text-2xl font-bold mb-4">Featured Austin-area spots</h2>

        <div className="grid gap-5 sm:grid-cols-2">
          {/* Brushy Creek */}
          <article className="rounded-2xl border border-neutral-200 overflow-hidden">
            <Image src="/photos/IMG_0679.jpg" alt="Gracy and Misty at Brushy Creek" width={800} height={400} className="w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">Brushy Creek — Hutto, TX</h3>
              <p className="text-sm text-neutral-700 mt-1">Gracy & Misty enjoying shallow currents and easy rock access.</p>
              <a href="https://www.google.com/maps/search/?api=1&query=Brushy+Creek+Hutto+TX" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Directions</a>
            </div>
          </article>

          {/* Chisholm Trail */}
          <article className="rounded-2xl border border-neutral-200 overflow-hidden">
            <Image src="/photos/IMG_0673.jpg" alt="Gracy and Misty at Chisholm Trail" width={800} height={400} className="w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">Chisholm Trail — Round Rock, TX</h3>
              <p className="text-sm text-neutral-700 mt-1">Favorite rock bars and gentle flow around the islands.</p>
              <a href="https://www.google.com/maps/search/?api=1&query=Chisholm+Trail+Round+Rock+TX" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Directions</a>
            </div>
          </article>

          {/* Lady Bird Lake */}
          <article className="rounded-2xl border border-neutral-200 overflow-hidden sm:col-span-2">
            <Image src="/photos/IMG_7858.jpg" alt="Murphy and Misty at Lady Bird Lake" width={1200} height={500} className="w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">Lady Bird Lake — Austin, TX</h3>
              <p className="text-sm text-neutral-700 mt-1">Murphy & Misty on the water downtown with skyline views.</p>
              <a href="https://www.google.com/maps/search/?api=1&query=Lady+Bird+Lake+Austin+TX" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Directions</a>
            </div>
          </article>

          {/* Buddy Card */}
          <article className="rounded-2xl border border-neutral-200 overflow-hidden">
            <Image src="/photos/IMG_8032.jpg" alt="Buddy the dog" width={800} height={400} className="w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">Meet Buddy</h3>
              <p className="text-sm text-neutral-700 mt-1">Buddy loves making a splash anywhere in Austin.</p>
            </div>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-neutral-600">
          © {new Date().getFullYear()} WetPets. All splash rights reserved.
        </div>
      </footer>
    </main>
  );
}
