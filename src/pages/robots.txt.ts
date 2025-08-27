import type { APIRoute } from 'astro';


export const GET: APIRoute = ({ site }) => {
const body = `User-agent: *\nAllow: /\nSitemap: ${new URL('/sitemap.xml', site ?? 'http://localhost:4321')}`;
return new Response(body, { headers: { 'content-type': 'text/plain' } });
};