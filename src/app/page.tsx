export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-sky-50 text-slate-900">
      {/* NAV */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="text-xl font-extrabold tracking-tight">
          <span className="text-emerald-600">Wet</span>Pets
        </span>
        <nav className="hidden gap-6 text-sm md:flex">
          <a href="#how" className="hover:text-emerald-700">How it works</a>
          <a href="#spots" className="hover:text-emerald-700">Spots</a>
          <a href="#download" className="hover:text-emerald-700">App</a>
        </nav>
        <a
          href="#download"
          className="rounded-xl bg-emerald-600 px-4 py-2 text-white shadow hover:bg-emerald-700"
        >
          Get the app
        </a>
      </header>

      {/* HERO */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 pb-20 pt-6 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
            Find dog-friendly water <span className="text-emerald-600">near you</span>
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            <strong>WetPets</strong> — <em>Pet’s Swimming Spot Locator</em>. 
            Discover creeks, lakes, splash pads, and safe access points with an earthy,
            playful Austin vibe.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#download"
              className="rounded-xl bg-emerald-600 px-5 py-3 text-white shadow hover:bg-emerald-700"
            >
              Download (coming soon)
            </a>
            <a
              href="#spots"
              className="rounded-xl border border-slate-300 px-5 py-3 hover:border-slate-400"
            >
              Browse local spots
            </a>
          </div>
          <p className="mt-3 text-sm text-slate-500">
            Built by dog people. Splash tested in ATX. 🌊🐶
          </p>
        </div>

        {/* Hero image */}
        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <img
              src="/me-and-misty-skyline.jpg"
              alt="You and Misty with the skyline"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5" />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mx-auto max-w-6xl px-6 pb-10 text-sm text-slate-500">
        © {new Date().getFullYear()} WetPets • Made in Austin
      </footer>
    </main>
  );
}
