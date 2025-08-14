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
      {/* Breadcrumbs */}
      <nav className="mb-4 text-sm text-neutral-500">
        <Link href="/" className="underline-offset-4 hover:underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/spots" className="underline-offset-4 hover:underline">
          Spots
        </Link>
        <span className="mx-2">/</span>
        <span className="font-semibold text-neutral-700">{spot.name}</span>
      </nav>

      <article className="overflow-hidden rounded-2xl bg-white shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="md:aspect-square">
            <Image
              src={spot.image}
              alt={spot.alt}
              width={1200}
              height={1200}
              className={`h-full w-full object-cover ${spot.objectPosition || "object-center"}`}
              priority
            />
          </div>

          {/* Content */}
          <div className="flex flex-col p-6 md:p-8">
            <div className="flex-grow">
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{spot.name}</h1>
              <p className="mt-1 text-base text-neutral-500">{spot.city}</p>
              <p className="mt-4 text-base leading-relaxed text-neutral-700">
                {spot.caption}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={spot.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block flex-grow rounded-xl bg-blue-600 px-5 py-3 text-center font-medium text-white hover:bg-blue-500"
              >
                Get Directions
              </a>
              <Link
                href="/spots"
                className="inline-block flex-grow rounded-xl border bg-neutral-100 px-5 py-3 text-center font-medium hover:bg-neutral-200/60"
              >
                Back to Spots
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
