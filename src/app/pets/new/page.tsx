"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { collection, addDoc } from "firebase/firestore";
import Link from "next/link";
import { useFirebase } from "@/components/FirebaseProvider";

export default function NewPetPage() {
  const { auth, db, isReady } = useFirebase();
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isReady || !auth || !db) {
      setError("Firebase is not ready. Please try again in a moment.");
      return;
    }

    const user = auth.currentUser;
    if (!user) {
      setError("You must be logged in to add a pet.");
      return;
    }

    if (!name.trim()) {
      setError("Pet name cannot be empty.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const petsCollectionRef = collection(db, "pets");
      await addDoc(petsCollectionRef, {
        ownerId: user.uid,
        name: name,
        bio: bio,
        createdAt: new Date(),
      });
      // Redirect to a success page or the main pets list
      router.push("/");
    } catch (err) {
      console.error("Error adding document: ", err);
      setError("Failed to add pet. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Add a New Pet</h1>
        <Link href="/" className="text-sm text-neutral-500 hover:underline">
          Cancel
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-6">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-neutral-700">
            Pet&apos;s Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border-neutral-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="e.g., Buddy"
            required
          />
        </div>

        <div>
          <label htmlFor="bio" className="mb-2 block text-sm font-medium text-neutral-700">
            Short Bio (optional)
          </label>
          <textarea
            id="bio"
            rows={4}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full rounded-xl border-neutral-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="e.g., Loves swimming and chasing squirrels."
          />
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <div className="flex justify-end gap-4">
          <Link href="/" className="rounded-xl border bg-neutral-100 px-5 py-3 font-medium hover:bg-neutral-200/60">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-500 disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save Pet"}
          </button>
        </div>
      </form>
    </main>
  );
}
