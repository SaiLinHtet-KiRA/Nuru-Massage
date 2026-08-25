import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.missmollybar.site",
      lastModified: new Date(),
    },
  ];
}
