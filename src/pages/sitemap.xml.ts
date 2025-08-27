import type { APIRoute } from 'astro';

// Khmer-friendly slug generator
function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\u1780-\u17FF]+/g, '-') // keep Khmer
    .replace(/^-+|-+$/g, '');
}

// Escape XML special characters
function escapeXML(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

interface SitemapItem {
  loc: string;
  lastmod: string;
}

export const GET: APIRoute = async ({ site }) => {
  const base = site?.toString() ?? 'http://localhost:4321/';

  // Fetch news data
  const res = await fetch('https://wwb99-golang-production.up.railway.app/api/news_home');
  const data: { id: number; title: string; created_at: string }[] = await res.json();

  const urls: SitemapItem[] = data.map(item => {
    const slug = slugify(item.title);
    return {
      loc: `${base}news/${item.id}/${slug}`, // keep Khmer in slug
      lastmod: item.created_at.split('T')[0],
    };
  });

  // Build XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    u =>
      `<url><loc>${escapeXML(u.loc)}</loc><lastmod>${u.lastmod}</lastmod></url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'content-type': 'application/xml' },
  });
};
