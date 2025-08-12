import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Walnut Creek Metro Park — WetPets",
  description: "Shaded crossings, off-leash trails, and dog-friendly creek access in Austin.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <header className="border-b border-neutral-200/70 bg-white/90">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.jpg" alt="WetPets logo" width={24} height={24} className="rounded-md" />
            <span className="font-semibold">WetPets</span>
          </Link>
          <Link href="/#spots" className="text-sm underline-offset-4 hover:underline">All spots</Link>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-4 py-6">
        <h1 className="text-3xl font-bold">Walnut Creek Metro Park</h1>
        <p className="mt-1 text-neutral-600">Austin, TX</p>

        <div className="mt-4 overflow-hidden rounded-xl border border-neutral-200">
          <Image
            src="/photos/ai-walnutcreek.png"
            alt="Australian Cattle Dog mid-splash in a shaded creek"
            width={1600}
            height={1200}
            className="w-full object-cover"
            priority
          />
        </div>

        <div className="prose mt-6 max-w-none">
          <p>
            Shaded creek crossings with plenty of trail. Off-leash areas exist,
            but always follow posted rules. After storms, water can run fast.
          </p>
          <ul>
            <li>Best for: cooling off on hot days under tree cover</li>
            <li>Notes: avoid high flow; check for trail closures</li>
          </ul>
        </div>

        <div className="mt-6 flex gap-3">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Walnut+Creek+Metro+Park+Austin+TX"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
          >
            Open in Maps
          </a>
          <Link
            href="/"
            className="rounded-lg border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-50"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
