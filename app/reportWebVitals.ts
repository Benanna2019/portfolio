import type { CLSReportCallback } from 'web-vitals'
import { onCLS, onFCP, onFID, onLCP, onTTFB } from 'web-vitals'

const reportWebVitals = (onPerfEntry: CLSReportCallback) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    onCLS(onPerfEntry)
    onFID(onPerfEntry)
    onFCP(onPerfEntry)
    onLCP(onPerfEntry)
    onTTFB(onPerfEntry)
  }
}

export default reportWebVitals
