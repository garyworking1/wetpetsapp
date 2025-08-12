export const metadata = {
  title: 'WetPets — Dog-Friendly Swimming Spots in Austin',
  description:
    'Discover the best creeks, lakes, and splash pads for dogs in Austin. Built by dog people, splash tested in ATX.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Header */}
      <header className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
        <a href="/" className="font-semibold text-xl">WetPets</a>
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
          WetPets helps Austin dog owners find the safest and most fun swim spots —
          from hidden creeks to popular lakes — all reviewed and splash-tested by locals.
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
              Only the best spots in and around Austin, TX — updated regularly.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-4">
            <h3 className="font-semibold">Safety & Fun</h3>
            <p className="text-neutral-700 text-sm mt-1">
              Get info on currents, water quality, shade, and dog rules before you go.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-4">
            <h3 className="font-semibold">Built by Dog People</h3>
            <p className="text-neutral-700 text-sm mt-1">
              Created for Austin’s dog-loving community, tested by our own pups.
            </p>
          </div>
        </div>
      </section>

      {/* Placeholder Spots */}
      <section id="spots" className="mx-auto max-w-5xl px-4 pb-14">
        <div className="rounded-2xl border border-dashed border-neutral-300 p-6 text-neutral-600">
          Map & list of nearby spots coming soon. Want early access? Check back shortly!
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
