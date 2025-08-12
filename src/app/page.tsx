import Link from 'next/link';

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
        <Link href="/" className="font-semibold text-xl">WetPets</Link>
        <nav className="text-sm space-x-6">
          <a href="#how" className="underline-offset-4 hover:underline">How it works</a>
          <a href="#spots" className="underline-offset-4 hover:underline">Spots</a>
          <a href="#app" className="underline-offset-4 hover:underline">Get the app</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 pt-10 pb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Austin’s Dog-Friendly Swimming Spot Locator 🐶🌊
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-neutral-700">
          WetPets helps Austin dog owners find safe, fun places for pups to splash —
          from hidden creeks to iconic lakes — with safety notes and local tips.
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
          <a
            href="#spots"
            className="rounded-2xl px-5 py-3 border border-neutral-300 hover:bg-neutral-50"
          >
            Browse local spots
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="how" className="mx-auto max-w-5xl px-4 py-8">
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-neutral-200 p-4">
            <h3 className="font-semibold">Curated for Austin</h3>
            <p className="text-neutral-700 text-sm mt-1">
              Only the best spots in and around ATX — updated with community input.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-4">
            <h3 className="font-semibold">Safety & Access</h3>
            <p className="text-neutral-700 text-sm mt-1">
              Notes on currents, algae, access points, parking, shade, and dog rules.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-4">
            <h3 className="font-semibold">Built by Dog People</h3>
            <p className="text-neutral-700 text-sm mt-1">
              Splash‑tested by locals. We go where our pups go.
            </p>
          </div>
        </div>
      </section>

      {/* Spots (2 real examples for now) */}
      <section id="spots" className="mx-auto max-w-5xl px-4 pb-14">
        <h2 className="text-2xl font-bold mb-4">Featured Austin spots</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Red Bud Isle */}
          <article className="rounded-2xl border border-neutral-200 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1556228578-5f785ae44d54?q=80&w=1200&auto=format&fit=crop"
              alt="Red Bud Isle water access"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold">Red Bud Isle</h3>
              <p className="text-sm text-neutral-700 mt-1">
                Off‑leash island on Lady Bird Lake with gentle water access. Popular for swimming dogs.
              </p>
              <ul className="text-sm text-neutral-600 mt-2 list-disc pl-5">
                <li>Parking lot fills on weekends</li>
                <li>Watch for algae advisories in hot months</li>
              </ul>
              <div className="mt-3 flex gap-3">
                <a
                  href="https://maps.google.com/?q=Red+Bud+Isle,+Austin+TX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline underline-offset-4"
                >
                  Directions
                </a>
                <a
                  href="#"
                  className="text-neutral-700 underline underline-offset-4"
                  aria-disabled="true"
                  title="Coming soon"
                >
                  See more details
                </a>
              </div>
            </div>
          </article>

          {/* Auditorium Shores */}
          <article className="rounded-2xl border border-neutral-200 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
              alt="Auditorium Shores lake access"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold">Auditorium Shores</h3>
              <p className="text-sm text-neutral-700 mt-1">
                Downtown green space with lake access and skyline views. Busy; keep an eye on currents.
              </p>
              <ul className="text-sm text-neutral-600 mt-2 list-disc pl-5">
                <li>Leash rules vary by area</li>
                <li>Limited shade at midday</li>
              </ul>
              <div className="mt-3 flex gap-3">
                <a
                  href="https://maps.google.com/?q=Auditorium+Shores,+Austin+TX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline underline-offset-4"
                >
                  Directions
                </a>
                <a
                  href="#"
                  className="text-neutral-700 underline underline-offset-4"
                  aria-disabled="true"
                  title="Coming soon"
                >
                  See more details
                </a>
              </div>
            </div>
          </article>
        </div>

        <p className="text-sm text-neutral-600 mt-4">
          Photos are representative. Always check posted signs and current conditions.
        </p>
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
