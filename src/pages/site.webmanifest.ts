import type { APIContext } from 'astro'
import { getWebsiteUrl } from '../siteConfig'

export async function GET(_context: APIContext) {
    let siteWebmanifest = {
        name: 'Min Årsredovisning',
        short_name: 'Min Årsredovisning',
        icons: [
            {
                src: `${getWebsiteUrl(process.env.TARGET_ENV!)}/android-chrome-192x192.png`,
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: `${getWebsiteUrl(process.env.TARGET_ENV!)}/android-chrome-512x512.png`,
                sizes: '512x512',
                type: 'image/png',
            },
        ],
        start_url: getWebsiteUrl(process.env.TARGET_ENV!),
        display: 'standalone',
        theme_color: '#000000',
        background_color: '#ffffff',
    }

    return new Response(JSON.stringify(siteWebmanifest, null, 4), {
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
    })
}
