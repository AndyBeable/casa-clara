export type PropertyType = "apartment" | "house" | "villa";

export type Property = {
  id: string;
  slug: string;
  title: string;
  location: {
    city: string;
    area: string;
  };
  price: number;
  currency: "EUR";
  bedrooms: number;
  bathrooms: number;
  areaM2: number;
  propertyType: PropertyType;
  description: string;
  features: string[];
  image: {
    src: string;
    alt: string;
  };
};
