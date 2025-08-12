export type Spot = {
  slug: string;
  name: string;
  city: string;
  image: string;
  alt: string;
  caption: string;
  mapUrl: string;
  description?: string;
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
    description:
      "Shallow shelves and gentle current when levels are normal. Check posted signs and recent rainfall.",
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
    description:
      "Historic crossing with easy water entry. Avoid high-flow days after storms.",
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
    description:
      "Stick to coves/shoreline. Dogs must stay leashed on most trails; life jackets recommended for paddling.",
  },
  {
    slug: "buddy-mascot",
    name: "Buddy (mascot)",
    city: "Austin, TX",
    image: "/photos/buddy-mascot.jpg",
    alt: "Buddy standing on roots by the water",
    caption: "Buddy loves making a splash anywhere in Austin.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Austin+TX+dog+friendly+water",
    description: "Resident water dog and official good boy of WetPets.",
  },
  {
    slug: "bull-creek",
    name: "Bull Creek",
    city: "Austin, TX",
    image: "/photos/ai-bullcreek.png",
    alt: "Two dogs splashing near a limestone cascade at a creek",
    caption:
      "Clear water, limestone shelves, and little cascades—watch for spring flow.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Bull+Creek+Austin+TX",
    description:
      "Popular creek with multiple access points. Water clarity varies seasonally.",
  },
  {
    slug: "walnut-creek",
    name: "Walnut Creek Metro Park",
    city: "Austin, TX",
    image: "/photos/ai-walnutcreek.png",
    alt: "Australian Cattle Dog mid-splash in a shaded creek",
    caption:
      "Shaded crossings and off-leash trails. After storms water can run fast.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Walnut+Creek+Metro+Park+Austin+TX",
    description:
      "Great tree cover and trails. Avoid after heavy rain; current can pick up quickly.",
  },
];

export function getSpot(slug: string): Spot | undefined {
  return spots.find((s) => s.slug === slug);
}
