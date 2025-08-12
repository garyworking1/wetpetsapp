import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

export const metadata = {
  title: "WetPets — Dog-Friendly Swimming Spots in Austin",
  description:
    "Find creeks, lakes, splash pads, and safe access points for dogs in Austin. Built by dog people. Splash tested in ATX.",
};

// Spot cards (corrected places for Gracy + Misty)
const spots = [
  {
    slug: "brushy-creek-hutto",
    name: "Brushy Creek",
    city: "Hutto, TX",
    image: "/photos/brushycreek-gracy-misty.jpg",
    alt: "Gracy and Misty on a rock at Brushy Creek in Hutto, Texas",
    caption:
      "Gracy + Misty scouting safe, shallow water at Brushy Creek (Hutto).",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Brushy+Creek+Hutto+TX",
  },
  {
    slug: "chisholm-trail-round-rock",
    name: "Chisholm Trail",
    city: "Round Rock, TX",
    image: "/photos/chisholmtrail-gracy-misty.jpg",
    alt: "Gracy with Misty along Chisholm Trail in Round Rock, Texas",
    caption:
      "Classic limestone ledges and gentle flow—great for cautious swimmers.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Chisholm+Trail+Round+Rock+TX",
  },
  {
    slug: "lady-bird-lake",
    name: "Lady Bird Lake",
    city: "Austin, TX",
    image: "/photos/ladybird-murphy-misty.jpg",
    alt: "Murphy and Misty in a kayak on Lady Bird Lake, Austin, Texas",
    caption:
      "Kayak days with Misty—watch wakes and heat, bring a dog life jacket.",
    mapUrl: "https://www.google.com/maps/place/Lady+Bird+Lake,+Austin,+TX",
  },
  {
    slug: "buddy",
    name: "Buddy (mascot)",
    city: "Austin, TX",
    image: "/photos/buddy.jpg",
    alt: "Buddy the pup relaxing on the grass",
    caption: "Buddy loves making a splash anywhere in Austin.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=dog+friendly+water+Austin+TX",
  },
];

export default function Home() {
  const addSpotUrl = "https://forms.gle/REPLACE_ME"; // paste your Google Form later

  // simple inline styles so layout is stable even without Tailwind
  const wrap: CSSProperties = { maxWidth: 1100, margin: "0 auto", padding: "0 16px" };
  const hstack: CSSProperties = { display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 };
  const sticky: CSSProperties = { position: "sticky", top: 0, background: "#fff", borderBottom: "1px solid #eee", zIndex: 50 };
  const heroGrid: CSSProperties = { display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 24, alignItems: "center", margin: "28px 0 16px" };
  const grid: CSSProperties = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 };
  const card: CSSProperties = { border: "1px solid #e6e6e6", borderRadius: 16, overflow: "hidden", background: "#fff" };
  const imgBox: CSSProperties = { position: "relative", width: "100%", aspectRatio: "4 / 3", background: "#f6f6f6" };
  const body: CSSProperties = { padding: 14, lineHeight: 1.35 };

  return (
    <main style={{ background: "#ffffff", color: "#171717" }}>
      {/* Header */}
      <header style={sticky}>
        <div style={wrap}>
          <div style={hstack}>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: "#fff",
                  boxShadow: "0 0 0 1px rgba(0,0,0,0.06) inset",
                }}
              >
                <Image src="/logo.png" alt="WetPets logo" width={28} height={28} priority />
              </span>
              <strong style={{ fontSize: 18, color: "#111" }}>WetPets</strong>
            </Link>

            <nav style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <a href="#spots" style={{ color: "#111" }}>Spots</a>
              <a
                href={addSpotUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", background: "#111", color: "#fff", padding: "8px 12px", borderRadius: 12, fontWeight: 600 }}
              >
                + Add a Spot
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section style={wrap}>
        <div style={heroGrid}>
          <div>
            <h1 style={{ fontSize: 34, lineHeight: 1.15, margin: 0 }}>Find dog-friendly water near you 🐶🌊</h1>
            <p style={{ marginTop: 10, fontSize: 18, color: "#404040", maxWidth: 640 }}>
              Discover creeks, lakes, splash pads, and safe access points with notes from real Austin dog people.
              Built by dog people. Splash tested in ATX.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 16, flexWrap: "wrap" }}>
              <a href="#spots" style={{ textDecoration: "none", background: "#111", color: "#fff", padding: "10px 16px", borderRadius: 12, fontWeight: 600 }}>
                Browse local spots
              </a>
              <a href={addSpotUrl} target="_blank" rel="noopener noreferrer"
                 style={{ textDecoration: "none", background: "#fff", color: "#111", padding: "10px 16px", borderRadius: 12, border: "1px solid #e6e6e6", fontWeight: 600 }}>
                + Add a Spot
              </a>
            </div>
          </div>

          <div style={{ ...imgBox, borderRadius: 16, overflow: "hidden" }}>
            <Image
              src="/photos/ladybird-murphy-misty.jpg"
              alt="Murphy and Misty kayaking on Lady Bird Lake"
              fill
              sizes="(max-width: 900px) 100vw, 520px"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Spots grid */}
      <section id="spots" style={{ ...wrap, paddingBottom: 28 }}>
        <h2 style={{ fontSize: 22, margin: "10px 0 14px" }}>Featured Austin spots</h2>
        <div style={grid}>
          {spots.map((s) => (
            <article key={s.slug} style={card}>
              <div style={imgBox}>
                <Image src={s.image} alt={s.alt} fill sizes="(max-width: 700px) 100vw, 400px" style={{ objectFit: "cover" }} />
              </div>
              <div style={body}>
                <div style={{ fontWeight: 700 }}>{s.name}</div>
                <div style={{ color: "#555", fontSize: 14, marginTop: 2 }}>{s.city}</div>
                <p style={{ marginTop: 8, fontSize: 14, color: "#303030" }}>{s.caption}</p>
                <div style={{ display: "flex", gap: 12, marginTop: 10 }}>
                  <a href={s.mapUrl} target="_blank" rel="noopener noreferrer">Directions</a>
                  <a href="#">Learn more</a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p style={{ marginTop: 14, fontSize: 12, color: "#666" }}>
          Photos are representative. Always check posted signs and current conditions.
        </p>
      </section>

      <footer style={{ borderTop: "1px solid #eee", marginTop: 18 }}>
        <div style={{ ...wrap, padding: "14px 16px", fontSize: 12, color: "#666" }}>
          © {new Date().getFullYear()} WetPets. All splash rights reserved.
        </div>
      </footer>
    </main>
  );
}
