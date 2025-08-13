import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { spots } from "../data";

export const dynamicParams = false;

export async function generateStaticParams() {
  return spots.map((s) => ({ slug: s.slug }));
}

type Params = { slug: string };

export default async function SpotPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const spot = spots.find((s) => s.slug === slug);
  if (!spot) notFound();

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <article className="overflow-hidden rounded-2xl bg-white shadow">
        <Image
          src={spot.image}
          alt={spot.alt}
          width={1600}
          height={1066}
          className="h-auto w-full"
          priority
        />
        <div className="p-6">
          <h1 className="text-2xl font-semibold">{spot.name}</h1>
          <p className="text-neutral-600">{spot.city}</p>
          <p className="mt-3">{spot.caption}</p>
          <div className="mt-4 flex gap-3">
            <a
              href={spot.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-neutral-900 px-4 py-2 text-white"
            >
              Directions
            </a>
            <Link href="/" className="rounded-lg border px-4 py-2">
              Back
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
