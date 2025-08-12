import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSpot, spots } from "../data";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  // prebuild all known spot pages
  return spots.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Params) {
  const spot = getSpot(params.slug);
  if (!spot) return { title: "Spot not found — WetPets" };
  return {
    title: `${spot.name} — WetPets`,
    description: spot.caption,
  };
}

export default function SpotPage({ params }: Params) {
  const spot = getSpot(params.slug);
  if (!spot) return notFound();

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <Link href="/" className="text-sm text-blue-700 underline-offset-4 hover:underline">
        ← Back to the homepage
      </Link>

      <h1 className="mt-2 text-3xl font-bold">{spot.name}</h1>
      <p className="text-neutral-600">{spot.city}</p>

      <div className="mt-4 overflow-hidden rounded-xl border border-neutral-200">
        <Image
          src={spot.image}
          alt={spot.alt}
          width={1600}
          height={1200}
          className="h-full w-full object-cover"
          priority
        />
      </div>

      <p className="mt-4 text-neutral-800">{spot.description ?? spot.caption}</p>

      <div className="mt-4 flex gap-4">
        <a
          href={spot.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl bg-black px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
        >
          Directions
        </a>
        <Link
          href="/#spots"
          className="rounded-2xl border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-50"
        >
          Browse more spots
        </Link>
      </div>
    </main>
  );
}
