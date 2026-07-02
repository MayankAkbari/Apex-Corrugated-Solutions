import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://apexcorrugated.in';

  const routes = [
    '',
    '/about',
    '/products',
    '/industries',
    '/infrastructure',
    '/quality',
    '/gallery',
    '/reviews',
    '/blog',
    '/faq',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const productSlugs = [
    'precision-corrugated-boxes',
    '7-ply-heavy-duty-boxes',
    'high-graphic-printed-cartons',
    'duplex-die-cut-boxes',
    'master-shipping-cartons',
    'seaworthy-export-packaging',
    'industrial-machinery-boxes',
    'custom-honeycomb-partitions'
  ].map((slug) => ({
    url: `${baseUrl}/products/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...routes, ...productSlugs];
}
