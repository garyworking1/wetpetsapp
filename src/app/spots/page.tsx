import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'WetPets Spots — Austin-area dog-friendly water',
  description: 'Browse a growing list of Austin-area swim spots for dogs.',
};

type Spot = {title:string; subtitle:string; img:string; alt:string; maps:string;};
const spots: Spot[] = [
  { title:'Brushy Creek — Hutto, TX', subtitle:'Shallow current, easy rock access (Gracy & Misty).',
    img:'/photos/IMG_0679.jpg', alt:'Gracy & Misty at Brushy Creek', maps:'Brushy+Creek+Hutto+TX' },
  { title:'Chisholm Trail — Round Rock, TX', subtitle:'Rock bars with gentle flow.',
    img:'/photos/IMG_0673.jpg', alt:'Gracy & Misty at Chisholm Trail', maps:'Chisholm+Trail+Round+Rock+TX' },
  { title:'Lady Bird Lake — Austin, TX', subtitle:'Kayak & SUP access; skyline views.',
    img:'/photos/IMG_7858.jpg', alt:'Murphy & Misty at Lady Bird Lake', maps:'Lady+Bird+Lake+Austin+TX' },
  { title:'Creekside (sample)', subtitle:'Shaded banks, shallow wading.',
    img:'/photos/IMG_0204.jpg', alt:'Creekside sample', maps:'Austin+TX+creek' },
  { title:'Trail crossing (sample)', subtitle:'Wide limestone shelves.',
    img:'/photos/IMG_0268.jpg', alt:'Trail crossing sample', maps:'Round+Rock+TX+trail' },
  { title:'Open water cove (sample)', subtitle:'Calm entry; watch boat traffic.',
    img:'/photos/IMG_7582.jpg', alt:'Cove sample', maps:'Lake+Austin+cove' },
  { title:'Shaded bend (sample)', subtitle:'Afternoon shade, easy exit.',
    img:'/photos/IMG_7863.jpg', alt:'Shaded bend sample', maps:'Austin+TX+river+bend' },
  { title:'Park access (sample)', subtitle:'Parking near water; weekend crowds.',
    img:'/photos/IMG_1306.jpg', alt:'Park access sample', maps:'Austin+TX+park+water' },
  { title:'Bank entry (sample)', subtitle:'Gentle bank; puppy-friendly.',
    img:'/photos/IMG_1457.jpg', alt:'Bank entry sample', maps:'Austin+TX+bank+entry' },
  { title:'Riverside rocks (sample)', subtitle:'Flat rocks; watch slick algae.',
    img:'/photos/IMG_1534.jpg', alt:'Riverside rocks sample', maps:'Austin+TX+river+rocks' },
  { title:'Bridge outlook (sample)', subtitle:'Photo spot; limited shade.',
    img:'/photos/IMG_4682.JPG', alt:'Bridge outlook sample', maps:'Austin+TX+bridge' },
];

function SpotCard({ s }: { s: Spot }) {
  return (
    <article className="rounded-2xl border border-neutral-200 overflow-hidden bg-white">
      <div className="relative w-full h-64">
        <Image src={s.img} alt={s.alt} fill className="object-cover object-center"/>
      </div>
      <div className="p-4">
        <h3 className="font-semibold">{s.title}</h3>
        <p className="text-sm text-neutral-700 mt-1">{s.subtitle}</p>
        <a className="mt-3 inline-block text-blue-700 underline underline-offset-4"
           target="_blank" rel="noopener noreferrer"
           href={`https://www.google.com/maps/search/?api=1&query=${s.maps}`}>
          Directions
        </a>
      </div>
    </article>
  );
}

export default function SpotsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex items-end justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Spots</h1>
        <Link href="/" className="text-sm underline underline-offset-4 hover:opacity-80">← Back to home</Link>
      </div>
      <p className="mt-2 text-neutral-700">A starter list using your photos. We’ll keep adding and let people suggest new spots.</p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {spots.map((s) => <SpotCard key={s.title} s={s}/>)}
      </div>

      <p className="text-xs text-neutral-500 mt-6">Note: Some entries are placeholders using your photos; we’ll replace with exact locations during polish.</p>
    </main>
  );
}
