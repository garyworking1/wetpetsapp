import Link from "next/link";

export const metadata = {
  title: "Add a Spot — WetPets",
  description: "Share a dog-friendly creek, lake, or splash pad with the WetPets community.",
};

// Paste your Google Form *embed* URL here when you have it, e.g.:
// "https://docs.google.com/forms/d/e/FORM_ID/viewform?embedded=true"
const FORM_EMBED_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeRs4TiUA5fxCvaYLBSRml-rQjVxfZCh7jn6HMeepsj0Fx78w/viewform?embedded=true";

export default function AddSpotPage() {
  const hasEmbed = FORM_EMBED_URL.length > 0;

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="mb-2 text-3xl font-bold">Add a Spot</h1>
      <p className="mb-6 text-neutral-700">
        Tell us about a safe splash spot. Photos and access notes help others a ton.
      </p>

      {hasEmbed ? (
        <div className="overflow-hidden rounded-xl border border-neutral-200">
          <iframe src={FORM_EMBED_URL} className="h-[1600px] w-full" loading="lazy" />
        </div>
      ) : (
        <div className="space-y-4 rounded-xl border border-dashed border-neutral-300 p-6">
          <p className="text-neutral-700">
            Form not connected yet. Use one of these for now:
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:wetpets@app.example?subject=New%20Spot%20for%20WetPets&body=Name%3A%0ALocation%20(city)%3A%0ADescription%2Faccess%20notes%3A%0AMap%20link%20(Google%20Maps)%3A%0APhoto%20link(s)%3A%0A"
              className="rounded-full bg-black px-5 py-3 text-white hover:bg-neutral-800"
            >
              Email us the details
            </a>
            <Link href="/spots" className="rounded-full border border-neutral-300 px-5 py-3 hover:bg-neutral-50">
              Back to spots
            </Link>
          </div>
          <p className="text-sm text-neutral-500">
            When ready, edit <code>src/app/add-spot/page.tsx</code> and set <code>FORM_EMBED_URL</code>.
          </p>
        </div>
      )}
    </main>
  );
}
