export type Spot = {
  slug: string;
  name: string;
  city: string;
  image: string;
  alt: string;
  caption: string;
  mapUrl: string;
};

const spotList: Spot[] = [
  {
    slug: "brushy-creek",
    name: "Brushy Creek",
    city: "Hutto, TX",
    image: "/photos/brushycreek-gracy-misty.jpg",
    alt: "Gracy and Misty wading in safe, shallow water at Brushy Creek (Hutto).",
    caption: "Gracy + Misty scouting safe, shallow water at Brushy Creek (Hutto).",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Brushy+Creek+Hutto+TX",
  },
  {
    slug: "chisholm-trail",
    name: "Chisholm Trail",
    city: "Round Rock, TX",
    image: "/photos/chisholmtrail-gracy-misty.jpg",
    alt: "Misty by the big limestone 'Round Rock' with water flowing around it.",
    caption: "Classic limestone ledges and the namesake Round Rock—great for cautious swimmers.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Chisholm+Trail+Crossing+Round+Rock+TX",
  },
  {
    slug: "lady-bird-lake",
    name: "Lady Bird Lake",
    city: "Austin, TX",
    image: "/photos/ladybird-misty-solo.jpg",
    alt: "Misty with the Austin skyline from Lady Bird Lake.",
    caption: "Kayak days with Misty—watch wakes and heat, bring a dog life jacket.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Lady+Bird+Lake+Austin+TX",
  },
  {
    slug: "buddy",
    name: "Buddy (mascot)",
    city: "Austin, TX",
    image: "/photos/buddy-redbud.jpg",
    alt: "Buddy on a tree root by the water.",
    caption: "Buddy loves making a splash anywhere in Austin.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Red+Bud+Isle+Trail+Austin+TX",
  },
  {
    slug: "bull-creek",
    name: "Bull Creek",
    city: "Austin, TX",
    image: "/photos/cc/bullcreek-commons.jpg",
    alt: "Bull Creek District Park—clear water and limestone shelves.",
    caption: "Clear water, limestone shelves, and little cascades—watch for spring flow.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Bull+Creek+District+Park+Austin+TX",
  },
  {
    slug: "walnut-creek",
    name: "Walnut Creek Metro Park",
    city: "Austin, TX",
    image: "/photos/cc/walnutcreek-commons.jpg",
    alt: "Shallow crossing at Walnut Creek Metro Park.",
    caption: "Shaded crossings and off-leash trails. After storms water can run fast.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Walnut+Creek+Metro+Park+Austin+TX",
  },
];

// Export both ways so imports can't break again.
export const spots: Spot[] = spotList;
export default spots;
