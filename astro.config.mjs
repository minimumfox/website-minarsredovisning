import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

import { getWebsiteUrl } from './src/siteConfig.ts'

// https://astro.build/config
export default defineConfig({
    site: getWebsiteUrl(process.env.TARGET_ENV),
    integrations: [
        mdx(),
        sitemap({
            lastmod: new Date(),
        }),
    ],
})
