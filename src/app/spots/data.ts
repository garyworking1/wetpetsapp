// src/app/spots/data.ts
export type Spot = {
  slug: string;
  name: string;
  city: string;
  image: string;
  alt: string;
  caption: string;
  mapUrl: string;
};

export const spots: Spot[] = [
  {
    slug: "brushy-creek",
    name: "Brushy Creek",
    city: "Hutto, TX",
    image: "/photos/brushycreek-gracy-misty.jpg",
    alt: "Gracy and Misty scouting on a limestone ledge at Brushy Creek",
    caption:
      "Gracy + Misty scouting safe, shallow water at Brushy Creek (Hutto).",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Brushy+Creek+Hutto+TX",
  },
  {
    slug: "chisholm-trail",
    name: "Chisholm Trail",
    city: "Round Rock, TX",
    image: "/photos/chisholmtrail-gracy-misty.jpg",
    alt: "Gracy and Misty on limestone ledges with gentle flow",
    caption:
      "Classic limestone ledges and gentle flow—great for cautious swimmers.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Chisholm+Trail+Crossing+Round+Rock+TX",
  },
  {
    slug: "lady-bird-lake",
    name: "Lady Bird Lake",
    city: "Austin, TX",
    image: "/photos/ladybird-murphy-misty.jpg",
    alt: "Murphy and Misty in a kayak on Lady Bird Lake",
    caption:
      "Kayak days with Misty—watch wakes and heat, bring a dog life jacket.",
    mapUrl: "https://www.google.com/maps/place/Lady+Bird+Lake,+Austin,+TX",
  },

  // Buddy photo is actually Red Bud Isle Trail — make it an actual spot
  {
    slug: "red-bud-isle",
    name: "Red Bud Isle Trail",
    city: "Austin, TX",
    image: "/photos/buddy-mascot.jpg",
    alt: "Buddy on cypress roots at Red Bud Isle Trail in Austin",
    caption:
      "Off-leash island with easy water access. Watch currents and bring water.",
    mapUrl:
      "https://www.google.com/maps/place/Red+Bud+Isle+Trail,+Austin,+TX+78746",
  },

  {
    slug: "bull-creek",
    name: "Bull Creek",
    city: "Austin, TX",
    image: "/photos/cc/bullcreek-commons.jpg",
    alt: "Bull Creek limestone shelves and clear water",
    caption:
      "Clear water, limestone shelves, and little cascades—watch for spring flow.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Bull+Creek+Austin+TX",
  },
  {
    slug: "walnut-creek",
    name: "Walnut Creek Metro Park",
    city: "Austin, TX",
    image: "/photos/cc/walnutcreek-commons.jpg",
    alt: "Walnut Creek shaded crossing under trees",
    caption:
      "Shaded crossings and off-leash trails. After storms water can run fast.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Walnut+Creek+Metro+Park+Austin+TX",
  },
];

export const getSpotBySlug = (slug: string) =>
  spots.find((s) => s.slug === slug);
