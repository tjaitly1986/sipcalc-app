import type { MetadataRoute } from "next";

const BASE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://sipcalcapp.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog/sip-calculator-guide`,
      lastModified: new Date("2026-04-08"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/step-up-sip-benefits`,
      lastModified: new Date("2026-04-08"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/sip-vs-lumpsum`,
      lastModified: new Date("2026-04-08"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog/financial-goal-planning`,
      lastModified: new Date("2026-04-08"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
