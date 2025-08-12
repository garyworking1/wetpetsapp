import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "WetPets — Dog-Friendly Swimming Spots in Austin",
  description:
    "Find creeks, lakes, splash pads, and safe access points for dogs in Austin. Built by dog people. Splash tested in ATX.",
};

type Spot = {
  slug: string;
  name: string;
  city: string;
  image: string; // path in /public/photos
  alt: string;
  caption: string;
  mapUrl: string; // external Google Maps link
};

const spots: Spot[] = [
  {
    slug: "red-bud-isle",
    name: "Red Bud Isle",
    city: "Austin, TX",
    image: "/photos/buddy.jpg",
    alt: "Buddy relaxing on the grass",
    caption: "Buddy loves making a splash anywhere in Austin.",
    mapUrl:
      "https://www.google.com/maps/place/Red+Bud+Isle/@30.2908494,-97.7894721,15z",
  },
  {
    slug: "brushy-creek-hutto",
    name: "Brushy Creek",
    city: "Hutto, TX",
    image: "/photos/brushycreek-gracy-misty.jpg",
    alt: "Gracy and Misty at Brushy Creek (Hutto)",
    caption:
      "Gracy & Misty cooling off at Brushy Creek. Watch water flow after rains.",
    mapUrl:
      "https://www.google.com/maps/search/Brushy+Creek+Hutto+TX",
  },
  {
    slug: "chisholm-trail-round-rock",
    name: "Chisholm Trail",
    city: "Round Rock, TX",
    image: "/photos/chisholmtrail-gracy-misty.jpg",
    alt: "Gracy and Misty at Chisholm Trail in Round Rock",
    caption:
      "Shallow ledges and gentle current. Great for cautious swimmers.",
    mapUrl:
      "https://www.google.com/maps/place/Chisholm+Trail+Crossing+Park,+Round+Rock,+TX",
  },
  {
    slug: "lady-bird-lake",
    name: "Lady Bird Lake",
    city: "Austin, TX",
    image: "/photos/ladybird-murphy-misty.jpg",
    alt: "Murphy and Misty in a kayak on Lady Bird Lake",
    caption:
      "Kayak days with Misty. Launch from quiet coves and avoid busy bridges.",
    mapUrl:       "https://www.google.com/maps/search/Lady+Bird+Lake+launch",
  },
];

export default function Home(): Home() {
  const addSpotUrl = "https://forms.gle/REPLACE_ME"; // <- drop your Google Form link here later

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Sticky header */}
      <header className="sticky top-0 z-40 w-full border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            {/* Small logo kept crisp on any background */}
            <Image
              src="/logo.jpg"
              alt="WetPets logo"
              width={28}
              height={28}
              priority
              className="rounded-md"
            />
            <span className="font-semibold tracking-tight">WetPets</span>
          </Link>

          <nav className="flex items-center gap-4 text-sm">
            <Link href="#spots" className="hover:underline">
              Spots
            </Link>
            <Link href="#how" className="hover:underline">
              How it works
            </Link>
            <Link href="/connections" className="hover:underline">
              Connections
            </Link>

            {/* Add a Spot (external form) */}
            <a
              href={addSpotUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-neutral-300 px-3 py-1.5 text-sm font-medium hover:bg-neutral-50"
              title="Suggest a new dog-friendly water spot"
            >
              Add a Spot
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-10 pb-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Find dog-friendly water near you in Austin 🐶🌊
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-neutral-700">
          Discover creeks, lakes, and splash pads with safety notes and local
          tips. Built by dog people. Splash tested in ATX.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#spots"
            className="rounded-2xl bg-black px-5 py-3 font-medium text-white shadow-sm hover:bg-neutral-800"
          >
            Browse local spots
          </a>
          <span className="rounded-2xl border border-neutral-300 px-5 py-3 text-neutral-700">
            Download (coming soon)
          </span>
        </div>
      </section>

      {/* Featured Spots */}
      <section id="spots" className="mx-auto max-w-6xl px-4 pb-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {spots.map((s) => (
            <article
              key={s.slug}
              className="overflow-hidden rounded-2xl border bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  priority={s.slug === "lady-bird-lake"}
                />
              </div>

              <div className="space-y-2 p-4">
                <h3 className="text-lg font-semibold leading-tight">
                  {s.name} <span className="font-normal text-neutral-500">— {s.city}</span>
                </h3>
                <p className="text-sm text-neutral-700">{s.caption}</p>

                <div className="pt-2">
                  <a
                    href={s.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-700 underline underline-offset-2 hover:text-blue-800"
                  >
                    Directions
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-2xl font-bold">How WetPets works</h2>
        <ul className="mt-3 list-disc space-y-1 pl-6 text-neutral-700">
          <li>Curated, dog-friendly water access points around Austin.</li>
          <li>Safety notes (depth, current, hazards) and best times to visit.</li>
          <li>Community tips and photos (Add a Spot button above).</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white/70">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-neutral-600">
          Photos are representative. Always check posted signs and current conditions.
          <br />
          © {new Date().getFullYear()} WetPets. All splash rights reserved.
        </div>
      </footer>
    </main>
  );
}
