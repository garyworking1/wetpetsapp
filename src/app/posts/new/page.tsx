"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useFirebase } from "@/components/FirebaseProvider";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function NewPostPage() {
  const { auth, db, storage, isReady } = useFirebase();
  const router = useRouter();

  const [caption, setCaption] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      // Basic file type validation
      if (!["image/jpeg", "image/png", "image/gif"].includes(selectedFile.type)) {
        setError("Invalid file type. Please select a JPG, PNG, or GIF.");
        return;
      }
      // Basic file size validation (e.g., 5MB)
      if (selectedFile.size > 5 * 1024 * 1024) {
        setError("File is too large. Maximum size is 5MB.");
        return;
      }
      setFile(selectedFile);
      setError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isReady || !auth || !db || !storage) {
      setError("Services not ready. Please wait a moment.");
      return;
    }
    const user = auth.currentUser;
    if (!user) {
      setError("You must be logged in to create a post.");
      return;
    }
    if (!file) {
      setError("Please select a photo to upload.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // 1. Upload image to Firebase Storage
      const filePath = `posts/${user.uid}/${Date.now()}_${file.name}`;
      const storageRef = ref(storage, filePath);
      const uploadResult = await uploadBytes(storageRef, file);
      const imageUrl = await getDownloadURL(uploadResult.ref);

      // 2. Save post to Firestore
      const postsCollectionRef = collection(db, "posts");
      await addDoc(postsCollectionRef, {
        authorId: user.uid,
        authorName: user.displayName || "Anonymous",
        imageUrl: imageUrl,
        caption: caption,
        createdAt: serverTimestamp(),
        likes: 0,
      });

      // 3. Redirect to the feed
      router.push("/feed");

    } catch (err) {
      console.error("Error creating post:", err);
      setError("Failed to create post. Please try again.");
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">New Post</h1>
        <Link href="/feed" className="text-sm text-neutral-500 hover:underline">
          Cancel
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-6">
        <div>
          <label htmlFor="photo-upload" className="mb-2 block text-sm font-medium text-neutral-700">
            Add a photo
          </label>
          <div className="flex h-48 w-full items-center justify-center rounded-xl border-2 border-dashed border-neutral-300 bg-neutral-50 text-neutral-400">
            <input
              type="file"
              id="photo-upload"
              onChange={handleFileChange}
              className="sr-only" // Hide the default input but keep it functional
            />
            <label htmlFor="photo-upload" className="cursor-pointer text-center">
              {file ? `Selected: ${file.name}` : "Click or drag to upload"}
              <p className="text-xs">{file ? "" : "PNG, JPG, GIF up to 5MB"}</p>
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="caption" className="mb-2 block text-sm font-medium text-neutral-700">
            Caption
          </label>
          <textarea
            id="caption"
            rows={5}
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="w-full rounded-xl border-neutral-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Write a caption for your post..."
          />
        </div>

        {error && <p className="rounded-md bg-red-100 p-3 text-sm text-red-700">{error}</p>}

        <div className="flex justify-end gap-4">
          <Link href="/feed" className="rounded-xl border bg-neutral-100 px-5 py-3 font-medium hover:bg-neutral-200/60">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={loading || !isReady}
            className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-500 disabled:opacity-50"
          >
            {loading ? "Posting..." : "Create Post"}
          </button>
        </div>
      </form>
    </main>
  );
}
