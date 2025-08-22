import Link from "next/link";

export const metadata = {
  title: "Water Safety Tips — WetPets",
  description: "Learn how to keep your dog safe in and around the water.",
};

export default function SafetyTipsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Water Safety Tips</h1>
        <Link href="/" className="text-sm text-neutral-500 hover:underline">
          ← Back to home
        </Link>
      </div>

      <div className="prose mt-6 max-w-none">
        <p>Keeping your dog safe is the number one priority for a fun day at the water. Here are some tips to keep in mind before you head out.</p>

        <ul>
          <li><strong>Check for Algae:</strong> Before letting your dog swim, check the water for blue-green algae, which can be toxic. Avoid water that looks like pea soup, has a strange smell, or has scum on the surface.</li>
          <li><strong>Know the Current:</strong> Be aware of the water&apos;s current. Even calm-looking water can have a strong undercurrent. If you&apos;re unsure, keep your dog on a long leash.</li>
          <li><strong>Provide Fresh Water:</strong> Bring plenty of fresh drinking water for your dog. Drinking lake, river, or ocean water can cause illness.</li>
          <li><strong>Use a Life Vest:</strong> Not all dogs are natural swimmers. A well-fitting doggy life vest provides extra safety and confidence, especially in deep water or on boats.</li>
          <li><strong>Watch for Hidden Dangers:</strong> Be mindful of submerged rocks, sharp objects, or sudden drop-offs. Scout the entry and exit points before letting your dog loose.</li>
          <li><strong>Rinse After Swimming:</strong> Always rinse your dog with fresh water after a swim to remove bacteria, salt, or chlorine from their coat and paws.</li>
          <li><strong>Don&apos;t Force It:</strong> If your dog is hesitant or scared of the water, don&apos;t force them in. Keep it a positive experience with toys and praise.</li>
          <li><strong>Check for Hot Pavement:</strong> Remember that pavement and sand can get extremely hot. Protect your dog&apos;s paws on the way to and from the water.</li>
        </ul>
      </div>
    </main>
  );
}
