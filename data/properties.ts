import type { Property } from "@/types/property";

export const properties = [
  {
    id: "property-001",
    slug: "casa-llum-sitges",
    title: "Casa Llum",
    location: {
      city: "Sitges",
      area: "Terramar",
    },
    price: 1250000,
    currency: "EUR",
    bedrooms: 4,
    bathrooms: 3,
    areaM2: 248,
    propertyType: "villa",
    description:
      "A light-filled Mediterranean villa where limewashed walls, natural timber and generous outdoor spaces create an effortless connection between the house and its garden.",
    features: [
      "Private swimming pool",
      "Landscaped Mediterranean garden",
      "Shaded outdoor dining terrace",
      "Ten-minute walk to the coast",
    ],
    image: {
      src: "/images/properties/casa-llum.webp",
      alt: "White Mediterranean villa with a shaded terrace and swimming pool",
    },
  },
  {
    id: "property-002",
    slug: "eixample-corner-residence",
    title: "Eixample Corner Residence",
    location: {
      city: "Barcelona",
      area: "Eixample",
    },
    price: 875000,
    currency: "EUR",
    bedrooms: 3,
    bathrooms: 2,
    areaM2: 142,
    propertyType: "apartment",
    description:
      "A carefully restored corner apartment combining original Barcelona character with calm, contemporary interiors and abundant natural light.",
    features: [
      "Original hydraulic tile floors",
      "Three private balconies",
      "Restored period detailing",
      "Lift access",
    ],
    image: {
      src: "/images/properties/eixample-residence.webp",
      alt: "Bright Barcelona apartment with tall windows and original tiled floors",
    },
  },
  {
    id: "property-003",
    slug: "stone-house-begur",
    title: "Stone House Above Begur",
    location: {
      city: "Begur",
      area: "Sa Riera",
    },
    price: 1650000,
    currency: "EUR",
    bedrooms: 5,
    bathrooms: 4,
    areaM2: 320,
    propertyType: "house",
    description:
      "Set naturally into the hillside above Sa Riera, this stone residence pairs quiet contemporary architecture with expansive views towards the Mediterranean.",
    features: [
      "Mediterranean sea views",
      "Native landscaped gardens",
      "Multiple shaded terraces",
      "Direct access to coastal trails",
    ],
    image: {
      src: "/images/properties/begur-stone-house.webp",
      alt: "Contemporary stone house overlooking the Mediterranean coast",
    },
  },
  {
    id: "property-004",
    slug: "montjuïc-garden-apartment",
    title: "Montjuïc Garden Apartment",
    location: {
      city: "Poble-sec",
      area: "Barcelona",
    },
    price: 695000,
    currency: "EUR",
    bedrooms: 2,
    bathrooms: 2,
    areaM2: 108,
    propertyType: "apartment",
    description:
      "A serene ground-floor apartment near Montjuïc, combining warm natural materials, generous living spaces and a secluded garden terrace made for slow Barcelona mornings.",
    features: [
      "Private planted terrace",
      "Open-plan living and dining area",
      "Floor-to-ceiling garden doors",
      "Walking distance to Montjuïc",
    ],
    image: {
      src: "/images/properties/montjuic-garden-apartment.webp",
      alt: "Bright Barcelona apartment opening onto a planted private terrace",
    },
  },
  {
    id: "property-005",
    slug: "courtyard-house-alella",
    title: "Courtyard House in Alella",
    location: {
      city: "Alella",
      area: "Alella Parc",
    },
    price: 980000,
    currency: "EUR",
    bedrooms: 3,
    bathrooms: 2,
    areaM2: 190,
    propertyType: "house",
    description:
      "A contemporary courtyard house set among Alella’s vineyards, with tactile stone, pale timber and sheltered outdoor spaces designed for relaxed year-round living.",
    features: [
      "Sheltered central courtyard",
      "Views across the vineyards",
      "Natural stone and timber finishes",
      "Twenty minutes from Barcelona",
    ],
    image: {
      src: "/images/properties/alella-courtyard-house.webp",
      alt: "Mediterranean courtyard house surrounded by olive trees",
    },
  },
  {
    id: "property-006",
    slug: "portlligat-view-villa",
    title: "Portlligat View Villa",
    location: {
      city: "Cadaqués",
      area: "Portlligat",
    },
    price: 2250000,
    currency: "EUR",
    bedrooms: 4,
    bathrooms: 4,
    areaM2: 285,
    propertyType: "villa",
    description:
      "Perched above the rocky shoreline of Portlligat, this sculptural white villa frames uninterrupted sea views through expansive windows and quiet outdoor terraces.",
    features: [
      "Panoramic Mediterranean views",
      "Infinity swimming pool",
      "Multiple sea-facing terraces",
      "Direct access to a secluded cove",
    ],
    image: {
      src: "/images/properties/portlligat-view-villa.webp",
      alt: "White coastal villa overlooking the rocky bay at Portlligat",
    },
  },
] satisfies Property[];

export function getPropertyBySlug(slug: string) {
  return properties.find((property) => property.slug === slug);
}
