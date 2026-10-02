import "server-only";
import { createClient } from "contentful";

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN;
const environment = process.env.CONTENTFUL_ENVIRONMENT ?? "master";

if (!space) {
  throw new Error("CONTENTFUL_SPACE_ID is not configured.");
}

if (!accessToken) {
  throw new Error("CONTENTFUL_DELIVERY_ACCESS_TOKEN is not configured.");
}

export const contentfulClient = createClient({
  space,
  accessToken,
  environment,
});
