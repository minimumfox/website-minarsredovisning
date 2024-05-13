export const SITE_TITLE = 'Min Årsredovisning'
export const SITE_DESCRIPTION = 'Welcome to my website!'
export const SITE_EMAIL = 'info@minarsredovisning.se'
export const LOGIN_URL = 'https://app.minarsredovisning.se/start-email-login'
export const SOCIAL_FACEBOOK_URL = 'https://www.facebook.com/people/Min-%C3%85rsredovisning/100091410733509/'
export const SOCIAL_LINKEDIN_URL = 'https://www.linkedin.com/company/min-arsredovisning/'
export const PRICE_EXCL_VAT = '640'

export const getAppUrl = () => {
    if (import.meta.env.TARGET_ENV === 'production') {
        return 'https://app.minarsredovisning.se'
    } else if (import.meta.env.TARGET_ENV === 'development') {
        return 'http://localhost:4000'
    } else if (import.meta.env.TARGET_ENV === 'staging') {
        return 'https://staging.minarsredovisning.se'
    } else {
        throw Error(`unknown TARGET_ENV "${import.meta.env.TARGET_ENV}"`)
    }
}
