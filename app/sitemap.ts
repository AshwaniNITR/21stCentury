import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://21stcenturyadvertising.in';
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/infrastructure`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/credentials`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/projects`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
  ];
}
