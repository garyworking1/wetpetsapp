export default function Home() {
  return (
    <main style={{ padding: '4rem 1rem', maxWidth: 800, margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Welcome to WetPets 🐶🌊</h1>
      <p style={{ marginBottom: '1rem' }}>
        The place to find the best swimming spots for your furry friends!
      </p>
      <p>
        <a
          href="https://plausible.io"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'blue', textDecoration: 'underline' }}
        >
          Test outbound link
        </a>
      </p>
    </main>
  );
}
