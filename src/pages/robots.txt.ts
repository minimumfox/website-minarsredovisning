import type { APIContext } from 'astro'
import dedent from 'dedent'

export async function GET(_context: APIContext) {
    const BLOCK_ROBOTS =
        dedent`
    User-agent: *
    Disallow: /
  ` + '\n'
    return new Response(import.meta.env.TARGET_ENV === 'staging' ? BLOCK_ROBOTS : '')
}
