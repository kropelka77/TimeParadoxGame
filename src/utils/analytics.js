import ReactGA from 'react-ga'

const isServer = typeof window !== 'undefined'
const GA_TRACKING_ID = 'G-QBFPM9C92Q'

export const initAnalytics = () => {
  if (isServer) {
    window.ANALYTICS_INITIALIZED = true
    ReactGA.initialize(GA_TRACKING_ID)
  }
}

export const trackPage = (url) => {
  if (isServer && window.ANALYTICS_INITIALIZED) {
    const pageUrl =
      url || `${window.location.pathname}${window.location.search}`
    ReactGA.set({ page: pageUrl })
    ReactGA.pageview(pageUrl)
  }
}

export const trackEvent = (event) => {
  if (isServer && window.ANALYTICS_INITIALIZED) {
    ReactGA.event(event)
  }
}
