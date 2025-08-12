import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "WetPets — Dog-Friendly Swimming Spots in Austin",
  description:
    "Discover creeks, lakes, splash pads, and safe access points with notes from real Austin dog people. Built by dog people. Splash tested in ATX.",
};

type Spot = {
  slug: string;
  name: string;
  city: string;
  image: string;
  alt: string;
  caption: string;
  mapUrl: string;
};

const spots: Spot[] = [
  {
    slug: "brushy-creek-hutto",
    name: "Brushy Creek",
    city: "Hutto, TX",
    image: "/photos/brushycreek-gracy-misty.jpg",
    alt: "Gracy and Misty scouting a shallow area at Brushy Creek in Hutto",
    caption:
      "Gracy + Misty scouting safe, shallow water at Brushy Creek (Hutto).",
    mapUrl:
      "https://www.google.com/maps/place/Brushy+Creek+Regional+Trail,+Hutto,+TX",
  },
  {
    slug: "chisholm-trail-round-rock",
    name: "Chisholm Trail",
    city: "Round Rock, TX",
    image: "/photos/chisholmtrail-gracy-misty.jpg",
    alt: "Gracy and Misty at Chisholm Trail with water flowing around a rock",
    caption:
      "Classic limestone ledges and gentle flow—great for cautious swimmers.",
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
      "Kayak days with Misty—watch wakes and heat, bring a dog life jacket.",
    mapUrl:
      "https://www.google.com/maps/place/Lady+Bird+Lake,+Austin,+TX",
  },
  {
    slug: "buddy-mascot",
    name: "Buddy (mascot)",
    city: "Austin, TX",
    image: "/photos/buddy-mascot.jpg",
    alt: "Buddy standing on roots by the water",
    caption: "Buddy loves making a splash anywhere in Austin.",
    mapUrl: "https://www.google.com/maps/place/Austin,+TX",
  },
];

export default function Home() {
  const addSpotUrl = "https://forms.gle/REPLACE_ME"; // <- drop your Google Form link later

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.jpg"
              alt="WetPets logo"
              width={28}
              height={28}
              priority
              className="h-7 w-7 rounded-xl ring-1 ring-black/10 bg-white object-contain"
            />
            <span className="font-semibold tracking-tight">WetPets</span>
          </Link>

          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#spots" className="underline-offset-4 hover:underline">
              Spots
            </a>
            <a href="#how" className="underline-offset-4 hover:underline">
              How it works
            </a>
          </nav>

          <a
            href={addSpotUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-black px-3.5 py-2 text-sm font-medium text-white shadow-sm hover:bg-neutral-800"
          >
            + Add a Spot
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-4 pt-8 pb-6 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Find dog-friendly water near you 🐶🌊
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-neutral-700">
            Discover creeks, lakes, splash pads, and safe access points with
            notes from real Austin dog people. Built by dog people. Splash
            tested in ATX.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="#spots"
              className="rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-medium hover:bg-neutral-50"
            >
              Browse local spots
            </Link>
            <a
              href={addSpotUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-neutral-800"
            >
              + Add a Spot
            </a>
          </div>
        </div>

        <div className="flex items-start justify-end">
          <Image
            src="/photos/ladybird-murphy-misty.jpg"
            alt="Murphy and Misty kayaking on Lady Bird Lake"
            width={900}
            height={675}
            priority
            className="h-auto w-full rounded-xl border object-cover shadow-sm"
          />
        </div>
      </section>

      {/* Spots */}
      <section id="spots" className="mx-auto max-w-5xl px-4 pb-10">
        <h2 className="mb-4 text-2xl font-bold">Featured Austin spots</h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {spots.map((spot) => (
            <article
              key={spot.slug}
              className="overflow-hidden rounded-xl border bg-white shadow-sm"
            >
              <Image
                src={spot.image}
                alt={spot.alt}
                width={900}
                height={675}
                className="h-auto w-full object-cover"
              />
              <div className="space-y-1 p-4">
                <h3 className="font-semibold">{spot.name}</h3>
                <p className="text-sm text-neutral-600">{spot.city}</p>
                <p className="pt-1 text-sm text-neutral-700">{spot.caption}</p>
                <div className="pt-2 text-sm">
                  <a
                    href={spot.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mr-4 underline underline-offset-4 hover:text-neutral-700"
                  >
                    Directions
                  </a>
                  <a
                    href="#"
                    className="underline underline-offset-4 hover:text-neutral-700"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-5xl px-4 pb-14">
        <h2 className="mb-3 text-xl font-semibold">How it works</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700">
          <li>Browse spots and read quick safety notes from locals.</li>
          <li>Tap “Directions” to open maps to the access point.</li>
          <li>Use “+ Add a Spot” to contribute new locations (Google Form).</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 text-center text-xs text-neutral-600">
        Photos are representative. Always check posted signs and current
        conditions. © {new Date().getFullYear()} WetPets. All splash rights
        reserved.
      </footer>
    </main>
  );
}

