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
  // ✅ Chisholm Trail = the famous big rock crossing in Round Rock
  {
    slug: "chisholm-trail",
    name: "Chisholm Trail",
    city: "Round Rock, TX",
    image: "/photos/brushycreek-gracy-misty.jpg", // rock in the middle
    alt: "Gracy and Misty standing on the big rock at the Chisholm Trail crossing",
    caption:
      "Shallow crossing around the big rock—namesake of Round Rock. Great for cautious swimmers.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Chisholm+Trail+Crossing+Round+Rock+TX",
  },

  // ✅ Brushy Creek (Hutto) = limestone ledges & gentle flow
  {
    slug: "brushy-creek",
    name: "Brushy Creek",
    city: "Hutto, TX",
    image: "/photos/chisholmtrail-gracy-misty.jpg", // limestone ledges
    alt: "Gracy and Misty on limestone ledges with gentle flow at Brushy Creek",
    caption:
      "Classic limestone ledges and gentle flow—great for cautious swimmers (Hutto).",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Brushy+Creek+Hutto+TX",
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

  {
    slug: "buddy-mascot",
    name: "Buddy (mascot)",
    city: "Austin, TX",
    image: "/photos/buddy-mascot.jpg",
    alt: "Buddy standing on roots by the water",
    caption: "Buddy loves making a splash anywhere in Austin.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Austin+TX+dog+friendly+water",
  },

  {
    slug: "bull-creek",
    name: "Bull Creek",
    city: "Austin, TX",
    image: "/photos/cc/bullcreek-commons.jpg",
    alt: "Two dogs splashing near a limestone cascade at a creek",
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
    alt: "Australian Cattle Dog mid-splash in a shaded creek",
    caption:
      "Shaded crossings and off-leash trails. After storms water can run fast.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Walnut+Creek+Metro+Park+Austin+TX",
  },
];
