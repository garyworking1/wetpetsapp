import Link from 'next/link';
import Image from 'next/image';

// 🔗 Replace this with your real Google Form URL
const ADD_SPOT_FORM = 'https://forms.gle/your-form-id';

export const metadata = {
  title: 'WetPets — Dog-Friendly Swimming Spots in Austin',
  description:
    'Find creeks, lakes, and splash pads for dogs in Austin. Built by dog people, splash tested in ATX.',
};

function Card({
  title,
  subtitle,
  imgSrc,
  imgAlt,
  href,
  wide = false,
}: {
  title: string;
  subtitle: string;
  imgSrc: string;
  imgAlt: string;
  href: string;
  wide?: boolean;
}) {
  return (
    <article className={`rounded-2xl border border-neutral-200 overflow-hidden ${wide ? 'sm:col-span-2' : ''}`}>
      <div className={wide ? 'relative w-full h-80' : 'relative w-full h-60'}>
        <Image
          src={imgSrc}
          alt={imgAlt}
          fill
          sizes={wide ? '100vw' : '(max-width: 640px) 100vw, 50vw'}
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-neutral-700 mt-1">{subtitle}</p>
        <div className="mt-3">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline underline-offset-4"
          >
            Directions
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Sticky Header with crisp logo + form button */}
      <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/75 backdrop-blur supports-[backdrop-filter]:bg-white/55">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold text-xl">
            {/* Crisp logo treatment: white chip, subtle ring, drop shadow */}
            <span className="inline-flex items-center justify-center size-8 rounded-md bg-white ring-1 ring-black/5 shadow-sm overflow-hidden">
              <Image
                src="/photos/IMG_0396.jpg"
                alt="WetPets logo"
                width={28}
                height={28}
                className="object-cover"
                priority
              />
            </span>
            <span className="tracking-tight">WetPets</span>
          </Link>

          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <Link href="#how" className="underline-offset-4 hover:underline">How it works</Link>
            <Link href="#spots" className="underline-offset-4 hover:underline">Spots</Link>
            <Link href="/connections" className="underline-offset-4 hover:underline">Connections</Link>
            {/* Add a Spot → Google Form */}
            <a
              href={ADD_SPOT_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-3.5 py-1.5 text-sm font-medium bg-black text-white hover:opacity-90"
              title="Suggest a new swim spot"
            >
              + Add a Spot
            </a>
          </nav>

          {/* Mobile: just show the Add button for now */}
          <a
            href={ADD_SPOT_FORM}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden rounded-full px-3 py-1.5 text-sm font-medium bg-black text-white hover:opacity-90"
            title="Suggest a new swim spot"
          >
            + Add
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-10 pb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Austin’s Dog‑Friendly Swimming Spot Locator 🐶🌊
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-neutral-700">
          Find safe, fun places for pups to splash — shallow creeks, lake coves, launch spots, shade, parking, rules,
          and live‑ish safety cues coming soon.
        </p>
        <div className="mt-6 flex gap-3 flex-wrap">
          <a
            id="app"
            href="#"
            className="rounded-2xl px-5 py-3 bg-black text-white font-medium shadow-sm hover:opacity-90"
            aria-disabled="true"
            title="Coming soon"
          >
            Download (coming soon)
          </a>
          <Link href="#spots" className="rounded-2xl px-5 py-3 border border-neutral-300 hover:bg-neutral-50">
            Browse local spots
          </Link>
        </div>
      </section>

      {/* Why WetPets */}
      <section id="how" className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-neutral-200 p-4">
            <h3 className="font-semibold">Curated for ATX</h3>
            <p className="text-neutral-700 text-sm mt-1">Verified spots around Austin, Hutto, Round Rock, and beyond.</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-4">
            <h3 className="font-semibold">Safety & Access</h3>
            <p className="text-neutral-700 text-sm mt-1">Currents, algae advisories, access points, parking, shade.</p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-4">
            <h3 className="font-semibold">Built by Dog People</h3>
            <p className="text-neutral-700 text-sm mt-1">Real photos, real pups (Misty, Buddy, and friends).</p>
          </div>
        </div>
      </section>

      {/* Featured Spots */}
      <section id="spots" className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="text-2xl font-bold mb-4">Featured Austin‑area spots</h2>

        <div className="grid gap-5 sm:grid-cols-2">
          <Card
            title="Brushy Creek — Hutto, TX"
            subtitle="Gracy & Misty enjoying shallow currents and easy rock access. Great for wading and fetch."
            imgSrc="/photos/IMG_0679.jpg"
            imgAlt="Gracy and Misty at Brushy Creek in Hutto, Texas"
            href="https://www.google.com/maps/search/?api=1&query=Brushy+Creek+Hutto+TX"
          />

          <Card
            title="Chisholm Trail — Round Rock, TX"
            subtitle="Rock bars with gentle flow around the islands. Watch water levels after rain."
            imgSrc="/photos/IMG_0673.jpg"
            imgAlt="Gracy and Misty at Chisholm Trail in Round Rock, Texas"
            href="https://www.google.com/maps/search/?api=1&query=Chisholm+Trail+Round+Rock+TX"
          />

          <Card
            title="Lady Bird Lake — Austin, TX"
            subtitle="Murphy & Misty on the water downtown. Calm paddles and skyline views; watch for boat traffic."
            imgSrc="/photos/IMG_7858.jpg"
            imgAlt="Murphy and Misty kayaking on Lady Bird Lake in Austin, Texas"
            href="https://www.google.com/maps/search/?api=1&query=Lady+Bird+Lake+Austin+TX"
            wide
          />

          <Card
            title="Red Bud Isle — Austin, TX"
            subtitle="Off‑leash island with gentle water access. Popular swim entry points around the shore."
            imgSrc="https://images.unsplash.com/photo-1556228578-5f785ae44d54?q=80&w=1600&auto=format&fit=crop"
            imgAlt="Water access similar to Red Bud Isle"
            href="https://www.google.com/maps/search/?api=1&query=Red+Bud+Isle+Austin+TX"
          />

          <Card
            title="Auditorium Shores — Austin, TX"
            subtitle="Downtown access with skyline views. Busy on weekends; limited shade at midday."
            imgSrc="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
            imgAlt="Lake access similar to Auditorium Shores"
            href="https://www.google.com/maps/search/?api=1&query=Auditorium+Shores+Austin+TX"
          />

          {/* Buddy mascot */}
          <article className="rounded-2xl border border-neutral-200 overflow-hidden">
            <div className="relative w-full h-60">
              <Image
                src="/photos/IMG_8032.jpg"
                alt="Buddy the dog"
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold">Meet Buddy</h3>
              <p className="text-sm text-neutral-700 mt-1">Buddy loves a good splash anywhere around Austin.</p>
            </div>
          </article>
        </div>

        <p className="text-sm text-neutral-600 mt-4">
          Photos are representative. Always check posted signs and current conditions.
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-neutral-600">
          © {new Date().getFullYear()} WetPets. All splash rights reserved.
        </div>
      </footer>
    </main>
  );
}

Save & exit nano: CTRL+O, Enter, CTRL+X.
2) Add the “Connections” page (stub now, upgradable to Premium later)

Terminal

mkdir -p src/app/connections
nano src/app/connections/page.tsx

Paste:

export const metadata = {
  title: 'WetPets Connections — Meet other dog people',
  description: 'Group meetups, playdates, and paddles. Start here — dating comes later as a premium add-on.',
};

export default function ConnectionsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold tracking-tight">WetPets Connections</h1>
      <p className="mt-3 text-neutral-700">
        Start with community: group swims, breed meetups, and paddle meetups. Opt in with first name and dog’s name.
        We’ll expand to a premium “Connections+” dating option once the community features are humming.
      </p>

      <div className="mt-6 space-y-4">
        <a
          href="https://forms.gle/your-connections-interest-form" // replace with your form
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-xl px-4 py-3 bg-black text-white font-medium hover:opacity-90"
        >
          Join the Connections waitlist
        </a>

        <div className="rounded-2xl border border-neutral-200 p-4">
          <h2 className="font-semibold">What’s next</h2>
          <ul className="mt-2 list-disc pl-5 text-sm text-neutral-700">
            <li>Public meetups calendar</li>
            <li>Opt‑in mini profiles (you + your dog)</li>
            <li>Group chats via links (IG/Threads) before in‑app chat</li>
            <li>Safety/report tools baked in</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
