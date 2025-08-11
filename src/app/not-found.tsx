import Link from 'next/link';

export default function NotFound() {
  return (
    <main style={{ padding: '4rem 1rem', maxWidth: 800, margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>404 — This page can’t be found</h1>
      <p style={{ marginBottom: '1rem' }}>
        Looks like the water’s dried up here. 🐶🌊
      </p>
      <p>
        <Link href="/" style={{ textDecoration: 'underline' }}>
          Go back to the homepage
        </Link>
      </p>
    </main>
  );
}
