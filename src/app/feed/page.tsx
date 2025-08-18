"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useFirebase } from "@/components/FirebaseProvider";
import { collection, query, onSnapshot, orderBy, DocumentData, Timestamp } from "firebase/firestore";

interface Post {
  id: string;
  authorId: string;
  authorName: string;
  imageUrl: string;
  caption: string;
  createdAt: Timestamp;
  likes: number;
}

// A single Post component
function PostCard({ post }: { post: Post }) {
  // A simple profile picture placeholder logic
  const authorImagePlaceholder = "/photos/buddy-mascot.jpg";

  return (
    <article className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
      {/* Post Header */}
      <div className="flex items-center gap-3 p-4">
        <div className="relative h-10 w-10">
          <Image src={authorImagePlaceholder} alt={post.authorName} fill className="rounded-full object-cover" />
        </div>
        <div>
          {/* In the future, this could link to a profile page */}
          <p className="font-semibold">{post.authorName}</p>
          <p className="text-xs text-neutral-500">
            {post.createdAt?.toDate().toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Post Image */}
      <div className="aspect-square w-full bg-neutral-100">
        <div className="relative h-full w-full">
          <Image src={post.imageUrl} alt={post.caption || "Post image"} fill className="object-cover" />
        </div>
      </div>

      {/* Post Actions & Caption */}
      <div className="p-4">
        <div className="flex gap-4 text-neutral-600">
          {/* These buttons would be functional in the future */}
          <button className="hover:text-neutral-900">❤️ {post.likes} Likes</button>
          <button className="hover:text-neutral-900">💬 Comments</button>
        </div>
        <p className="mt-3 text-sm">
          <span className="font-semibold">{post.authorName}</span> {post.caption}
        </p>
      </div>
    </article>
  );
}

export default function FeedPage() {
  const { db, isReady } = useFirebase();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isReady || !db) return;

    const postsCollectionRef = collection(db, "posts");
    const q = query(postsCollectionRef, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const postsData: Post[] = [];
      querySnapshot.forEach((doc: DocumentData) => {
        postsData.push({ id: doc.id, ...doc.data() } as Post);
      });
      setPosts(postsData);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [isReady, db]);

  return (
    <main className="mx-auto max-w-lg px-4 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Feed</h1>
        <Link href="/posts/new" className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500">
          + New Post
        </Link>
      </div>
      <p className="mt-1 text-neutral-500">See what other pups have been up to.</p>

      <div className="mt-6 space-y-6">
        {loading && <p>Loading feed...</p>}
        {!loading && posts.length === 0 && <p>No posts yet. Be the first!</p>}
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
