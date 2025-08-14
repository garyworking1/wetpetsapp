import Image from "next/image";
import Link from "next/link";

// --- DUMMY DATA ---
const dummyFeedPosts = [
  {
    id: 1,
    author: { name: "Murphy", image: "/photos/buddy-mascot.jpg" },
    spot: { name: "Bull Creek", slug: "bull-creek" },
    image: "/photos/cc/bullcreek-commons.jpg",
    caption: "Loved the clear water at Bull Creek today! Perfect for a dip.",
    likes: 12,
    comments: 3,
  },
  {
    id: 2,
    author: { name: "Misty", image: "/photos/hero-misty.jpg" },
    spot: { name: "Chisholm Trail", slug: "chisholm-trail" },
    image: "/photos/chisholmtrail-gracy-misty.jpg",
    caption: "Hanging out at the famous Round Rock!",
    likes: 25,
    comments: 5,
  },
  {
    id: 3,
    author: { name: "Gracy", image: "/photos/IMG_0679.jpg" },
    spot: { name: "Walnut Creek Metro Park", slug: "walnut-creek" },
    image: "/photos/cc/walnutcreek-commons.jpg",
    caption: "So much fun on the trails today. And the water was so refreshing.",
    likes: 18,
    comments: 2,
  },
];
// --- END DUMMY DATA ---

// A single Post component - can be extracted to its own file later
function PostCard({ post }: { post: (typeof dummyFeedPosts)[0] }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
      {/* Post Header */}
      <div className="flex items-center gap-3 p-4">
        <div className="relative h-10 w-10">
          <Image src={post.author.image} alt={post.author.name} fill className="rounded-full object-cover" />
        </div>
        <div>
          <p className="font-semibold">{post.author.name}</p>
          <Link href={`/spots/${post.spot.slug}`} className="text-xs text-neutral-500 hover:underline">
            at {post.spot.name}
          </Link>
        </div>
      </div>

      {/* Post Image */}
      <div className="aspect-square w-full bg-neutral-100">
        <div className="relative h-full w-full">
          <Image src={post.image} alt="Post image" fill className="object-cover" />
        </div>
      </div>

      {/* Post Actions & Caption */}
      <div className="p-4">
        <div className="flex gap-4 text-neutral-600">
          {/* These buttons would be functional in the future */}
          <button className="hover:text-neutral-900">❤️ {post.likes} Likes</button>
          <button className="hover:text-neutral-900">💬 {post.comments} Comments</button>
        </div>
        <p className="mt-3 text-sm">
          <span className="font-semibold">{post.author.name}</span> {post.caption}
        </p>
      </div>
    </article>
  );
}

export default function FeedPage() {
  return (
    <main className="mx-auto max-w-lg px-4 py-8">
      <h1 className="text-3xl font-bold tracking-tight">Feed</h1>
      <p className="mt-1 text-neutral-500">See what other pups have been up to.</p>

      <div className="mt-6 space-y-6">
        {dummyFeedPosts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
