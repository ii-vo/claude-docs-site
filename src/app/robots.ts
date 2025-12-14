import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [],
    },
    sitemap: "https://claude-docs.com/sitemap.xml",
    host: "https://claude-docs.com",
  };
}
