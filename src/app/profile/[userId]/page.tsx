import Image from "next/image";

// --- DUMMY DATA ---
// This is placeholder data. In the future, this will come from our database.
const dummyUser = {
  name: "Murphy",
  image: "/photos/buddy-mascot.jpg",
  pets: [{ name: "Misty", image: "/photos/hero-misty.jpg" }, { name: "Gracy", image: "/photos/IMG_0679.jpg" }],
};

const dummyPosts = [
  { id: 1, imageUrl: "/photos/ladybird-murphy-misty.jpg" },
  { id: 2, imageUrl: "/photos/brushycreek-gracy-misty.jpg" },
  { id: 3, imageUrl: "/photos/chisholmtrail-gracy-misty.jpg" },
  { id: 4, imageUrl: "/photos/cc/bullcreek-commons.jpg" },
  { id: 5, imageUrl: "/photos/cc/walnutcreek-commons.jpg" },
  { id: 6, imageUrl: "/photos/buddy-redbud.jpg" },
];
// --- END DUMMY DATA ---

type Params = { userId: string };

export default async function ProfilePage({
  params,
}: {
  params: Promise<Params>;
}) {
  // In the future, we will use params.userId to fetch user data from the database.
  const { userId } = await params;
  const { name, image, pets } = dummyUser;

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      {/* Profile Header */}
      <header className="flex items-center gap-4 md:gap-6">
        <div className="relative h-20 w-20 md:h-28 md:w-28">
          <Image
            src={image}
            alt={name}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex-grow">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold md:text-3xl">{name}</h1>
            <button className="rounded-lg bg-blue-600 px-4 py-1 text-sm font-medium text-white hover:bg-blue-500">
              Follow
            </button>
          </div>
          <p className="mt-1 text-neutral-500">Austin, TX</p>
          {/* In the future, we could show a follower count or other stats here */}
        </div>
      </header>

      {/* Pet Profiles */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold">The Pack</h2>
        <div className="mt-3 flex gap-4">
          {pets.map(p => (
            <div key={p.name} className="text-center">
              <div className="relative h-16 w-16">
                <Image src={p.image} alt={p.name} fill className="rounded-full object-cover" />
              </div>
              <p className="mt-1 text-sm font-medium">{p.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Posts Gallery */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold">Posts</h2>
        <div className="mt-4 grid grid-cols-3 gap-2 md:gap-4">
          {dummyPosts.map((post) => (
            <div key={post.id} className="aspect-square w-full overflow-hidden rounded-md bg-neutral-100">
              <div className="relative h-full w-full">
                <Image
                  src={post.imageUrl}
                  alt="A post image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
