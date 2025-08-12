import Link from 'next/link';
import Image from 'next/image';

const ADD_SPOT_FORM = 'https://forms.gle/your-form-id'; // ← replace when ready

export const metadata = {
  title: 'WetPets — Dog-Friendly Swimming Spots in Austin',
  description: 'Find creeks, lakes, and splash pads for dogs in Austin. Built by dog people, splash tested in ATX.',
};

function Card({
  title, subtitle, imgSrc, imgAlt, href, wide = false,
}: {
  title: string; subtitle: string; imgSrc: string; imgAlt: string; href: string; wide?: boolean;
}) {
  return (
    <article className={`rounded-2xl border border-neutral-200 overflow-hidden bg-white ${wide ? 'sm:col-span-2' : ''}`}>
      <div className={wide ? 'relative w-full h-80' : 'relative w-full h-64'}>
        <Image src={imgSrc} alt={imgAlt} fill sizes={wide ? '100vw' : '(max-width: 640px) 100vw, 50vw'} className="object-cover object-center" priority={false}/>
      </div>
      <div className="p-4">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-neutral-700 mt-1">{subtitle}</p>
        <a href={href} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-blue-700 underline underline-offset-4">
          Directions
        </a>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Sticky header */}
      <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/55">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold text-xl">
            <span className="inline-flex items-center justify-center size-8 rounded-md bg-white ring-1 ring-black/5 shadow-sm overflow-hidden">
              <Image src="/photos/IMG_0396.jpg" alt="WetPets logo" width={28} height={28} className="object-cover"/>
            </span>
            <span className="tracking-tight">WetPets</span>
          </Link>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <Link href="#how" className="underline-offset-4 hover:underline">How it works</Link>
            <Link href="/spots" className="underline-offset-4 hover:underline">Spots</Link>
            <Link href="/connections" className="underline-offset-4 hover:underline">Connections</Link>
            <a href={ADD_SPOT_FORM} target="_blank" rel="noopener noreferrer" className="rounded-full px-3.5 py-1.5 text-sm font-medium bg-black text-white hover:opacity-90">
              + Add a Spot
            </a>
          </nav>
          <a href={ADD_SPOT_FORM} target="_blank" rel="noopener noreferrer" className="sm:hidden rounded-full px-3 py-1.5 text-sm font-medium bg-black text-white hover:opacity-90">
            + Add
          </a>
        </div>
      </header>

      {/* Hero with soft gradient */}
      <section className="bg-gradient-to-b from-sky-50 to-white">
        <div className="mx-auto max-w-6xl px-4 pt-10 pb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Austin’s Dog‑Friendly Swimming Spot Locator 🐶🌊</h1>
          <p className="mt-3 max-w-2xl text-lg text-neutral-700">
            Find safe, fun places for pups to splash — shallow creeks, lake coves, launch spots, shade, parking, rules, and safety cues (coming soon).
          </p>
          <div className="mt-6 flex gap-3 flex-wrap">
            <a id="app" href="#" className="rounded-2xl px-5 py-3 bg-black text-white font-medium shadow-sm hover:opacity-90" aria-disabled="true" title="Coming soon">
              Download (coming soon)
            </a>
            <Link href="/spots" className="rounded-2xl px-5 py-3 border border-neutral-300 hover:bg-neutral-50">
              Browse local spots
            </Link>
          </div>
        </div>
      </section>

      {/* Why WetPets */}
      <section id="how" className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-neutral-200 p-4 bg-white">
            <h3 className="font-semibold">Curated for ATX</h3>
            <p className="text-neutral-700 text-sm mt-1">Verified spots around Austin, Hutto, Round Rock, and beyond.</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-4 bg-white">
            <h3 className="font-semibold">Safety & Access</h3>
            <p className="text-neutral-700 text-sm mt-1">Currents, algae advisories, access points, parking, shade.</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-4 bg-white">
            <h3 className="font-semibold">Built by Dog People</h3>
            <p className="text-neutral-700 text-sm mt-1">Real photos, real pups (Misty, Buddy, and friends).</p>
          </div>
        </div>
      </section>

      {/* Featured Spots (tight, consistent crop) */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="text-2xl font-bold mb-4">Featured Austin‑area spots</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          <Card title="Brushy Creek — Hutto, TX" subtitle="Gracy & Misty enjoying shallow currents and easy rock access." imgSrc="/photos/IMG_0679.jpg" imgAlt="Gracy and Misty at Brushy Creek, Hutto" href="https://www.google.com/maps/search/?api=1&query=Brushy+Creek+Hutto+TX"/>
          <Card title="Chisholm Trail — Round Rock, TX" subtitle="Rock bars with gentle flow around islands. Watch levels after rain." imgSrc="/photos/IMG_0673.jpg" imgAlt="Gracy and Misty at Chisholm Trail, Round Rock" href="https://www.google.com/maps/search/?api=1&query=Chisholm+Trail+Round+Rock+TX"/>
          <Card title="Lady Bird Lake — Austin, TX" subtitle="Murphy & Misty on the water downtown. Calm paddles, skyline views." imgSrc="/photos/IMG_7858.jpg" imgAlt="Murphy and Misty kayaking on Lady Bird Lake" href="https://www.google.com/maps/search/?api=1&query=Lady+Bird+Lake+Austin+TX" wide/>
          <Card title="Buddy — Mascot" subtitle="Buddy loves making a splash anywhere in Austin." imgSrc="/photos/IMG_8032.jpg" imgAlt="Buddy the dog portrait" href="https://www.google.com/maps/search/?api=1&query=Austin+TX"/>
        </div>
        <p className="text-sm text-neutral-600 mt-4">Photos are representative. Always check posted signs and current conditions.</p>
      </section>

      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-neutral-600">
          © {new Date().getFullYear()} WetPets. All splash rights reserved.
        </div>
      </footer>
    </main>
  );
}
