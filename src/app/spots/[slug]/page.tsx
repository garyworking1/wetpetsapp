import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { spots } from "../data";

// Prebuild all spot pages at build time
export async function generateStaticParams() {
  return spots.map((s) => ({ slug: s.slug }));
}

// Proper typing for Next 15: params is a Promise
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const spot = spots.find((s) => s.slug === slug);
  if (!spot) return { title: "Spot not found — WetPets" };
  return {
    title: `${spot.name} — WetPets`,
    description: spot.caption,
  };
}

export default async function SpotPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const spot = spots.find((s) => s.slug === slug);
  if (!spot) notFound();

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <Link
        href="/"
        className="text-sm text-blue-700 underline-offset-4 hover:underline"
      >
        ← Back to all spots
      </Link>

      <div className="mt-4 overflow-hidden rounded-xl border border-neutral-200">
        <Image
          src={spot.image}
          alt={spot.alt}
          width={1600}
          height={1200}
          className="h-auto w-full object-cover"
          priority
        />
      </div>

      <h1 className="mt-6 text-3xl font-bold">{spot.name}</h1>
      <p className="text-neutral-600">{spot.city}</p>
      <p className="mt-3 text-neutral-800">{spot.caption}</p>

      <div className="mt-5">
        <a
          href={spot.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline-offset-4 hover:underline"
        >
          Open in Google Maps
        </a>
      </div>
    </main>
  );
}
