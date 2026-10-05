import { revalidateTag } from "next/cache";
import type { NextRequest } from "next/server";

import { CONTENTFUL_PROPERTIES_CACHE_TAG } from "@/lib/contentful/properties";

export async function POST(request: NextRequest) {
  const expectedSecret = process.env.CONTENTFUL_REVALIDATION_SECRET;
  const providedSecret = request.headers.get(
    "x-contentful-revalidation-secret",
  );

  if (!expectedSecret || providedSecret !== expectedSecret) {
    return Response.json(
      {
        revalidated: false,
        message: "Unauthorized",
      },
      {
        status: 401,
      },
    );
  }

  revalidateTag(CONTENTFUL_PROPERTIES_CACHE_TAG, {
    expire: 0,
  });

  return Response.json({
    revalidated: true,
  });
}
