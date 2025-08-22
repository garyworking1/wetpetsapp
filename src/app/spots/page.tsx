import Image from "next/image";
import Link from "next/link";
import { spots } from "./data";

export const metadata = {
  title: "WetPets Spots — All dog-friendly water in Austin",
  description: "Browse our full, growing list of Austin-area swim spots for dogs.",
};

export default function SpotsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">All Spots</h1>
          <p className="mt-2 text-neutral-700">
            Our full, growing list of local spots.
          </p>
        </div>
        <Link href="/" className="text-sm underline underline-offset-4 hover:opacity-80">
          ← Back to home
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                className={`h-full w-full object-cover ${s.objectPosition || ""}`}
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

      <p className="mt-6 text-sm text-neutral-500">
        Have a spot to add?{" "}
        <Link href="/add-spot" className="underline underline-offset-4">
          Share it with the community.
        </Link>
      </p>

      {/* Footer */}
      <footer className="mx-auto mt-10 max-w-6xl border-t border-neutral-200 pt-6 text-sm text-neutral-600">
        <p className="mb-1">
          Photos are representative. Always check posted signs and current
          conditions.
        </p>
        <div className="flex items-center gap-4">
          <p>© {new Date().getFullYear()} WetPets. All splash rights reserved.</p>
          <Link href="/safety-tips" className="underline-offset-4 hover:underline">Safety Tips</Link>
        </div>
      </footer>
    </main>
  );
}
