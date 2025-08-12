import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "WetPets — Dog-Friendly Swimming Spots in Austin",
  description:
    "Find creeks, lakes, splash pads, and safe access points for dogs in Austin. Built by dog people. Splash tested in ATX.",
};

const spots = [
  {
    slug: "brushy-creek",
    name: "Brushy Creek",
    city: "Hutto, TX",
    image: "/photos/brushycreek-gracy-misty.jpg",
    alt: "Gracy and Misty scouting on a limestone ledge at Brushy Creek",
    caption:
      "Gracy + Misty scouting safe, shallow water at Brushy Creek (Hutto).",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Brushy+Creek+Hutto+TX",
  },
  {
    slug: "chisholm-trail",
    name: "Chisholm Trail",
    city: "Round Rock, TX",
    image: "/photos/chisholmtrail-gracy-misty.jpg",
    alt: "Gracy and Misty on limestone ledges with gentle flow",
    caption:
      "Classic limestone ledges and gentle flow—great for cautious swimmers.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Chisholm+Trail+Crossing+Round+Rock+TX",
  },
  {
    slug: "lady-bird-lake",
    name: "Lady Bird Lake",
    city: "Austin, TX",
    image: "/photos/ladybird-murphy-misty.jpg",
    alt: "Murphy and Misty in a kayak on Lady Bird Lake",
    caption:
      "Kayak days with Misty—watch wakes and heat, bring a dog life jacket.",
    mapUrl: "https://www.google.com/maps/place/Lady+Bird+Lake,+Austin,+TX",
  },
  {
    slug: "buddy-mascot",
    name: "Buddy (mascot)",
    city: "Austin, TX",
    image: "/photos/buddy-mascot.jpg",
    alt: "Buddy standing on roots by the water",
    caption: "Buddy loves making a splash anywhere in Austin.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Austin+TX+dog+friendly+water",
  },
  {
    slug: "bull-creek",
    name: "Bull Creek",
    city: "Austin, TX",
    image: "/photos/ai-bullcreek.png",
    alt: "Two dogs splashing near a limestone cascade at a creek",
    caption:
      "Clear water, limestone shelves, and little cascades—watch for spring flow.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Bull+Creek+Austin+TX",
  },
  {
    slug: "walnut-creek",
    name: "Walnut Creek Metro Park",
    city: "Austin, TX",
    image: "/photos/ai-walnutcreek.png",
    alt: "Australian Cattle Dog mid-splash in a shaded creek",
    caption:
      "Shaded crossings and off-leash trails. After storms water can run fast.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Walnut+Creek+Metro+Park+Austin+TX",
  },
];

export default function Home() {
  const addSpotUrl = "#"; // replace with your Google Form link when ready

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Sticky header */}
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
            <a href="#spots" className="underline-offset-4 hover:underline">
              Spots
            </a>
            <a href="#how" className="underline-offset-4 hover:underline">
              How it works
            </a>
          </nav>

          <a
            href={addSpotUrl}
            className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
          >
            + Add a Spot
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 pb-4 pt-8 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Find dog-friendly water near you 🐶🌊
          </h1>
          <p className="mt-3 max-w-prose text-lg text-neutral-700">
            Discover creeks, lakes, splash pads, and safe access points with
            notes from real Austin dog people. Built by dog people. Splash
            tested in ATX.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#spots"
              className="rounded-2xl border border-neutral-300 px-5 py-3 hover:bg-neutral-50"
            >
              Browse local spots
            </a>
            <a
              href={addSpotUrl}
              className="rounded-2xl bg-black px-5 py-3 font-medium text-white hover:bg-neutral-800"
            >
              + Add a Spot
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-neutral-200">
          <Image
            src="/photos/ladybird-murphy-misty.jpg"
            alt="Murphy and Misty kayaking on Lady Bird Lake"
            width={1200}
            height={900}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </section>

      {/* Spots grid */}
      <section id="spots" className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="mb-4 text-xl font-semibold">Featured Austin spots</h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {spots.map((s) => (
            <article
              key={s.slug}
              className="overflow-hidden rounded-xl border border-neutral-200 shadow-sm"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                <Image
                  src={s.image}
                  alt={s.alt}
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="space-y-1 p-4">
                <h3 className="font-semibold">{s.name}</h3>
                <p className="text-sm text-neutral-500">{s.city}</p>
                <p className="text-sm text-neutral-700">{s.caption}</p>

                <div className="mt-2 flex gap-4 text-sm">
                  <a
                    href={s.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 underline-offset-4 hover:underline"
                  >
                    Directions
                  </a>
                  <a
                    href={'/spots/' + s.slug}
                    className="text-blue-700 underline-offset-4 hover:underline"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-4 pb-10 text-sm text-neutral-600">
        <p className="mb-1">
          Photos are representative. Always check posted signs and current
          conditions.
        </p>
        <p>© {new Date().getFullYear()} WetPets. All splash rights reserved.</p>
      </footer>
    </main>
  );
}
