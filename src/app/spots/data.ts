export type Spot = {
  slug: string;
  name: string;
  city: string;
  image: string;
  alt: string;
  caption: string;
  mapUrl: string;
};

// NOTE: File names here are chosen to make the displayed photos correct,
// even if the original filenames were misleading.
const spotList: Spot[] = [
  {
    slug: "brushy-creek",
    name: "Brushy Creek",
    city: "Hutto, TX",
    // ← Brushy should show the gentle creek scene
    image: "/photos/brushycreek-gracy-misty.jpg",
    alt: "Gracy & Misty scouting safe, shallow water at Brushy Creek (Hutto).",
    caption: "Gracy + Misty scouting safe, shallow water at Brushy Creek (Hutto).",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Brushy+Creek+Hutto+TX",
  },
  {
    slug: "chisholm-trail",
    name: "Chisholm Trail",
    city: "Round Rock, TX",
    // ← Chisholm should show the famous Round Rock with water flowing around it
    image: "/photos/chisholmtrail-gracy-misty.jpg",
    alt: "Misty by the big limestone 'Round Rock' with water flowing around it.",
    caption: "Classic limestone ledges and the namesake Round Rock—great for cautious swimmers.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Chisholm+Trail+Crossing+Round+Rock+TX",
  },
  {
    slug: "lady-bird-lake",
    name: "Lady Bird Lake",
    city: "Austin, TX",
    // Card uses your original kayaking photo so it always loads
    image: "/photos/ladybird-murphy-misty.jpg",
    alt: "Murphy and Misty kayaking on Lady Bird Lake",
    caption: "Kayak days with Misty—watch wakes and heat, bring a dog life jacket.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Lady+Bird+Lake+Austin+TX",
  },
  {
    slug: "buddy",
    name: "Buddy (mascot)",
    city: "Austin, TX",
    image: "/photos/buddy-redbud.jpg",
    alt: "Buddy on tree roots above the water at Red Bud Isle Trail",
    caption: "Buddy loves making a splash anywhere in Austin.",
    mapUrl: "https://www.google.com/maps/place/Red+Bud+Isle/",
  },
  {
    slug: "bull-creek",
    name: "Bull Creek",
    city: "Austin, TX",
    image: "/photos/cc/bullcreek-commons.jpg",
    alt: "Limestone shelves and clear water at Bull Creek",
    caption: "Clear water, limestone shelves, and little cascades—watch for spring flow.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Bull+Creek+Austin+TX",
  },
  {
    slug: "walnut-creek",
    name: "Walnut Creek Metro Park",
    city: "Austin, TX",
    image: "/photos/cc/walnutcreek-commons.jpg",
    alt: "Shaded trail and shallow crossings at Walnut Creek",
    caption: "Shaded crossings and off-leash trails. After storms water can run fast.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Walnut+Creek+Metro+Park+Austin+TX",
  },
];

export const spots = spotList;
export default spotList;
