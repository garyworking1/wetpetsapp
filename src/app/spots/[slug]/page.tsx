import Image from "next/image";
import Link from "next/link";
import spots from "../data";

export async function generateStaticParams() {
  return spots.map((s) => ({ slug: s.slug }));
}

export default function SpotPage({ params }: { params: { slug: string } }) {
  const spot = spots.find((s) => s.slug === params.slug);

  if (!spot) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="mb-2 text-2xl font-bold">Spot not found</h1>
        <p className="mb-4">Looks like the water’s dried up here. 🐶🌊</p>
        <Link href="/" className="text-blue-700 underline">
          Go back to the homepage
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <Link href="/" className="text-blue-700 underline">
        ← Back
      </Link>

      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="overflow-hidden rounded-xl border border-neutral-200">
          <Image
            src={spot.image}
            alt={spot.alt}
            width={1600}
            height={1200}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <h1 className="text-3xl font-extrabold">{spot.name}</h1>
          <p className="text-neutral-500">{spot.city}</p>
          <p className="mt-3">{spot.caption}</p>

          <div className="mt-4 flex gap-4">
            <a
              href={spot.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-black px-4 py-2 text-white hover:bg-neutral-800"
            >
              Directions
            </a>
            <Link
              href="/"
              className="rounded-md border px-4 py-2 hover:bg-neutral-50"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
