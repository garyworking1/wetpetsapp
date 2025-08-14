import Link from "next/link";

export default function NewPostPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">New Post</h1>
        <Link href="/feed" className="text-sm text-neutral-500 hover:underline">
          Cancel
        </Link>
      </div>

      {/* This form would be functional in the future */}
      <form className="mt-6 space-y-6">
        {/* Photo Upload Area */}
        <div>
          <label htmlFor="photo-upload" className="mb-2 block text-sm font-medium text-neutral-700">
            Add a photo
          </label>
          <div className="flex h-48 w-full items-center justify-center rounded-xl border-2 border-dashed border-neutral-300 bg-neutral-50 text-neutral-400">
            {/* This would be a real file input */}
            <div className="text-center">
              <p>Click or drag to upload</p>
              <p className="text-xs">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>

        {/* Caption */}
        <div>
          <label htmlFor="caption" className="mb-2 block text-sm font-medium text-neutral-700">
            Caption
          </label>
          <textarea
            id="caption"
            rows={5}
            className="w-full rounded-xl border-neutral-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Write a caption for your post..."
          />
        </div>

        {/* Spot Tagging (Future feature) */}
        <div>
          <label htmlFor="spot" className="mb-2 block text-sm font-medium text-neutral-700">
            Tag a spot (optional)
          </label>
          <input
            type="text"
            id="spot"
            className="w-full rounded-xl border-neutral-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Search for a spot..."
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="rounded-xl border bg-neutral-100 px-5 py-3 font-medium hover:bg-neutral-200/60"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-500"
          >
            Create Post
          </button>
        </div>
      </form>
    </main>
  );
}
