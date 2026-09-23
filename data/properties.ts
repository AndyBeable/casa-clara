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
      src: "/images/properties/casa-llum.png",
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
      src: "/images/properties/eixample-residence.png",
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
      src: "/images/properties/begur-stone-house.png",
      alt: "Contemporary stone house overlooking the Mediterranean coast",
    },
  },
] satisfies Property[];

export function getPropertyBySlug(slug: string) {
  return properties.find((property) => property.slug === slug);
}
