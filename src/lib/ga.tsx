export function logGAEvent(name: string, params: Record<string, string | number>) {
  // GA4 event logging - use type assertion for window.dataLayer
  if (typeof window !== 'undefined') {
    interface WindowWithDataLayer {
      dataLayer: Array<Record<string, string | number | { event: string }>>
    }
    const win = window as unknown as WindowWithDataLayer
    if (win.dataLayer && Array.isArray(win.dataLayer)) {
      win.dataLayer.push({
        event: name,
        ...params,
      })
    }
  }
}
