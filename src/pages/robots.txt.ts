import type { APIContext } from 'astro'
import dedent from 'dedent'

export async function GET(_context: APIContext) {
    let robotsTxt = ''
    if (import.meta.env.TARGET_ENV !== 'production') {
        robotsTxt += dedent`
            User-agent: *
            Disallow: /
            \n`
    }
    robotsTxt += `Sitemap: ${new URL('sitemap-index.xml', import.meta.env.SITE).href}\n`
    return new Response(robotsTxt, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
        },
    })
}
