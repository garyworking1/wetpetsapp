import Image from "next/image";
import Link from "next/link";
import { spots } from "./spots/data";

export const metadata = {
  title: "WetPets — Dog-Friendly Swimming Spots in Austin",
  description:
    "Discover creeks, lakes, splash pads, and safe access points with notes from real Austin dog people.",
};

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* Hero */}
      <section className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Find dog-friendly water near you 🐶
          </h1>
          <p className="mt-4 text-lg text-neutral-700">
            Discover creeks, lakes, splash pads, and safe access points with
            notes from real Austin dog people. Built by dog people. Splash
            tested in ATX.
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              href="/spots"
              className="rounded-lg border px-4 py-2 font-medium"
            >
              Browse local spots
            </Link>
            <a
              href="#"
              className="rounded-lg bg-neutral-900 px-4 py-2 font-medium text-white"
              aria-disabled="true"
              title="Add-a-Spot form coming soon"
            >
              + Add a Spot
            </a>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl bg-neutral-100 shadow">
          <Image
            src="/photos/ladybird-misty-solo.jpg"
            alt="Misty with Austin skyline on Lady Bird Lake."
            width={1600}
            height={1066}
            priority
          />
        </div>
      </section>

      {/* Featured */}
      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold">Featured Austin spots</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {spots.map((s) => (
            <article key={s.slug} className="overflow-hidden rounded-2xl bg-white shadow">
              <Image
                src={s.image}
                alt={s.alt}
                width={1200}
                height={800}
                className="h-auto w-full"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold">{s.name}</h3>
                <p className="text-sm text-neutral-600">{s.city}</p>
                <p className="mt-2 text-sm">{s.caption}</p>
                <div className="mt-3 flex gap-3">
                  <a
                    className="text-sm font-medium text-neutral-900 underline"
                    href={s.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Directions
                  </a>
                  <Link
                    className="text-sm font-medium text-neutral-900 underline"
                    href={`/spots/${s.slug}`}
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
