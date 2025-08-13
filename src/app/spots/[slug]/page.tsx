import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import spots from "../data";

// Pre-render all spot pages
export function generateStaticParams() {
  return spots.map((s) => ({ slug: s.slug }));
}

type Props = {
  params: { slug: string };
};

export default function SpotPage({ params }: Props) {
  const spot = spots.find((s) => s.slug === params.slug);
  if (!spot) return notFound();

  const addSpotUrl = "#"; // swap in your Google Form later

  return (
    <main className="min-h-screen bg-white text-neutral-900">
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
            <Link href="/#spots" className="underline-offset-4 hover:underline">
              Spots
            </Link>
            <Link href="/#how" className="underline-offset-4 hover:underline">
              How it works
            </Link>
          </nav>

          <a
            href={addSpotUrl}
            className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
          >
            + Add a Spot
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 pb-16 pt-6 md:grid-cols-[1.2fr,0.8fr]">
        <div className="overflow-hidden rounded-xl border border-neutral-200">
          <Image
            src={spot.image}
            alt={spot.alt}
            width={1600}
            height={1200}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        <aside className="space-y-3">
          <h1 className="text-2xl font-bold">{spot.name}</h1>
          <p className="text-neutral-600">{spot.city}</p>
          <p className="text-neutral-800">{spot.caption}</p>

          <div className="mt-2 flex gap-4 text-sm">
            <a
              href={spot.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline-offset-4 hover:underline"
            >
              Directions
            </a>
            <Link
              href="/#spots"
              className="text-blue-700 underline-offset-4 hover:underline"
            >
              Back to spots
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}
