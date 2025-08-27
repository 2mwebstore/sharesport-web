/// <reference types="astro/client" />


interface ImportMetaEnv {
readonly PUBLIC_SITE_URL: string;
readonly API_ORIGIN: string;
}


interface ImportMeta {
readonly env: ImportMetaEnv;
}