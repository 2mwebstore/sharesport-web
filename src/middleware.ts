import type { MiddlewareHandler } from 'astro';


export const onRequest: MiddlewareHandler = async (context, next) => {
const response = await next();
response.headers.set('Cache-Control', 'no-store');
return response;
};