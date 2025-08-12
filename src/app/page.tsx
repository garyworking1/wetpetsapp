import Image from "next/image";
import Link from "next/link";
import { spots } from "./spots/data";

export const metadata = {
  title: "WetPets — Dog-Friendly Swimming Spots in Austin",
  description:
    "Find creeks, lakes, splash pads, and safe access points for dogs in Austin. Built by dog people. Splash tested in ATX.",
};

export default function Home() {
  const addSpotUrl = "#"; // drop your Google Form link when ready

  return (
    <main className="min-h-screen bg-white text-neutral-900">
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

      {/* Spots */}
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
                  <Link
                    href={`/spots/${s.slug}`}
                    className="text-blue-700 underline-offset-4 hover:underline"
                  >
                    Learn more
                  </Link>
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
