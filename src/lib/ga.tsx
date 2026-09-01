export function logGAEvent(name: string, params: Record<string, any>) {
  // GA4 event logging - use type assertion for window.dataLayer
  const dataLayer = (typeof window !== 'undefined' ? (window as any).dataLayer : undefined)
  if (dataLayer) {
    dataLayer.push({
      event: name,
      ...params,
    })
  }
}
