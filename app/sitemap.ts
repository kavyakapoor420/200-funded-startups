import { startups } from '../data/data'

export default function sitemap() {
  const baseUrl = "http://localhost:3000";

  const startupUrls = startups.map((startup) => ({
    url: `${baseUrl}/startups/${startup.id}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  return [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/startups`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/startups/fintech`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/startups/edtech`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/startups/bengaluru`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/startups/high-funded`, lastModified: new Date(), priority: 0.7 },
    ...startupUrls,
  ];
}