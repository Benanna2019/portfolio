import type { CLSReportCallback } from 'web-vitals'

const reportWebVitals = (onPerfEntry: CLSReportCallback) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    //@ts-ignore
    import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
      onCLS(onPerfEntry)
      onFID(onPerfEntry)
      onFCP(onPerfEntry)
      onLCP(onPerfEntry)
      onTTFB(onPerfEntry)
    })
  }
}

export default reportWebVitals
