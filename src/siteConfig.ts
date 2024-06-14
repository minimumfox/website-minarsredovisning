export const getWebsiteUrl = (targetEnv: string) => {
    if (targetEnv === 'production') {
        return 'https://www.minarsredovisning.se'
    } else if (targetEnv === 'development') {
        return 'http://localhost:4321'
    } else if (targetEnv === 'staging') {
        return 'https://webstaging.minarsredovisning.se'
    } else {
        throw Error(`unknown TARGET_ENV "${targetEnv}"`)
    }
}

/* Note: this is the URL to the app, config for the URL to the marketing website is in astro.config.mjs */
export const getAppUrl = () => {
    const targetEnv = process.env.TARGET_ENV
    if (targetEnv === 'production') {
        return 'https://app.minarsredovisning.se'
    } else if (targetEnv === 'development') {
        return 'http://localhost:4000'
    } else if (targetEnv === 'staging') {
        return 'https://staging.minarsredovisning.se'
    } else {
        throw Error(`unknown TARGET_ENV "${targetEnv}"`)
    }
}

export const SITE_TITLE = 'Min Årsredovisning'
export const PRICE_EXCL_VAT = 640
export const SITE_DESCRIPTION = `Skapa årsredovisning/deklaration för mindre aktiebolag (K2), ${PRICE_EXCL_VAT} kr ex moms`
export const SITE_EMAIL = 'info@minarsredovisning.se'
export const LOGIN_URL = `${getAppUrl()}/start-email-login`
export const SOCIAL_FACEBOOK_URL = 'https://www.facebook.com/people/Min-%C3%85rsredovisning/100091410733509/'
export const SOCIAL_LINKEDIN_URL = 'https://www.linkedin.com/company/min-arsredovisning/'

export const getPriceExclVat = () => PRICE_EXCL_VAT
export const getPriceVat = () => Number((PRICE_EXCL_VAT * 0.25).toFixed(2))

export const getPriceInclVat = () => {
    return Number((getPriceExclVat() + getPriceVat()).toFixed(2))
}
