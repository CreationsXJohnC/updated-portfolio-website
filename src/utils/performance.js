/**
 * Performance monitoring utilities for the portfolio application
 */

// Performance metrics collection
export class PerformanceMonitor {
  constructor() {
    this.metrics = new Map();
    this.observers = new Map();
    this.isSupported = 'performance' in window;
  }

  // Start timing a specific operation
  startTiming(label) {
    if (!this.isSupported) return;
    
    const startTime = performance.now();
    this.metrics.set(label, { startTime, endTime: null, duration: null });
    
    // Also use Performance API mark if available
    if (performance.mark) {
      performance.mark(`${label}-start`);
    }
  }

  // End timing and calculate duration
  endTiming(label) {
    if (!this.isSupported || !this.metrics.has(label)) return null;
    
    const endTime = performance.now();
    const metric = this.metrics.get(label);
    const duration = endTime - metric.startTime;
    
    metric.endTime = endTime;
    metric.duration = duration;
    
    // Use Performance API measure if available
    if (performance.mark && performance.measure) {
      performance.mark(`${label}-end`);
      performance.measure(label, `${label}-start`, `${label}-end`);
    }
    
    return duration;
  }

  // Get timing for a specific label
  getTiming(label) {
    return this.metrics.get(label);
  }

  // Get all collected metrics
  getAllMetrics() {
    return Object.fromEntries(this.metrics);
  }

  // Clear all metrics
  clearMetrics() {
    this.metrics.clear();
    if (performance.clearMarks) {
      performance.clearMarks();
    }
    if (performance.clearMeasures) {
      performance.clearMeasures();
    }
  }

  // Monitor Largest Contentful Paint (LCP)
  observeLCP(callback) {
    if (!('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      callback(lastEntry.startTime);
    });

    observer.observe({ entryTypes: ['largest-contentful-paint'] });
    this.observers.set('lcp', observer);
  }

  // Monitor First Input Delay (FID)
  observeFID(callback) {
    if (!('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        callback(entry.processingStart - entry.startTime);
      });
    });

    observer.observe({ entryTypes: ['first-input'] });
    this.observers.set('fid', observer);
  }

  // Monitor Cumulative Layout Shift (CLS)
  observeCLS(callback) {
    if (!('PerformanceObserver' in window)) return;

    let clsValue = 0;
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      callback(clsValue);
    });

    observer.observe({ entryTypes: ['layout-shift'] });
    this.observers.set('cls', observer);
  }

  // Monitor resource loading performance
  observeResources(callback) {
    if (!('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        const resourceData = {
          name: entry.name,
          type: entry.initiatorType,
          duration: entry.duration,
          size: entry.transferSize || 0,
          startTime: entry.startTime,
          endTime: entry.responseEnd
        };
        callback(resourceData);
      });
    });

    observer.observe({ entryTypes: ['resource'] });
    this.observers.set('resources', observer);
  }

  // Disconnect all observers
  disconnect() {
    this.observers.forEach((observer) => {
      observer.disconnect();
    });
    this.observers.clear();
  }
}

// Singleton instance
export const performanceMonitor = new PerformanceMonitor();

// Utility functions for common performance tasks

// Debounce function for performance optimization
export function debounce(func, wait, immediate = false) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(...args);
  };
}

// Throttle function for performance optimization
export function throttle(func, limit) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Lazy loading utility for components
export function createLazyComponent(importFunc, fallback = null) {
  return {
    component: importFunc,
    loading: fallback,
    error: fallback,
    delay: 200,
    timeout: 10000
  };
}

// Image preloader for better perceived performance
export function preloadImages(imageUrls) {
  return Promise.all(
    imageUrls.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(url);
        img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
        img.src = url;
      });
    })
  );
}

// Memory usage monitoring
export function getMemoryUsage() {
  if ('memory' in performance) {
    return {
      used: Math.round(performance.memory.usedJSHeapSize / 1048576), // MB
      total: Math.round(performance.memory.totalJSHeapSize / 1048576), // MB
      limit: Math.round(performance.memory.jsHeapSizeLimit / 1048576) // MB
    };
  }
  return null;
}

// Network information (if available)
export function getNetworkInfo() {
  if ('connection' in navigator) {
    const connection = navigator.connection;
    return {
      effectiveType: connection.effectiveType,
      downlink: connection.downlink,
      rtt: connection.rtt,
      saveData: connection.saveData
    };
  }
  return null;
}

// Bundle analyzer helper
export function logBundleInfo() {
  if (process.env.NODE_ENV === 'development') {
    console.group('📦 Bundle Information');
    console.log('Memory Usage:', getMemoryUsage());
    console.log('Network Info:', getNetworkInfo());
    console.log('Performance Metrics:', performanceMonitor.getAllMetrics());
    console.groupEnd();
  }
}

// Performance budget checker
export function checkPerformanceBudget(budgets = {}) {
  const defaultBudgets = {
    lcp: 2500, // 2.5s
    fid: 100,  // 100ms
    cls: 0.1,  // 0.1
    resourceSize: 1000000, // 1MB
    ...budgets
  };

  const results = {
    passed: true,
    violations: []
  };

  // Check LCP
  performanceMonitor.observeLCP((lcp) => {
    if (lcp > defaultBudgets.lcp) {
      results.passed = false;
      results.violations.push(`LCP: ${lcp}ms exceeds budget of ${defaultBudgets.lcp}ms`);
    }
  });

  // Check FID
  performanceMonitor.observeFID((fid) => {
    if (fid > defaultBudgets.fid) {
      results.passed = false;
      results.violations.push(`FID: ${fid}ms exceeds budget of ${defaultBudgets.fid}ms`);
    }
  });

  // Check CLS
  performanceMonitor.observeCLS((cls) => {
    if (cls > defaultBudgets.cls) {
      results.passed = false;
      results.violations.push(`CLS: ${cls} exceeds budget of ${defaultBudgets.cls}`);
    }
  });

  return results;
}

// Export default instance for convenience
export default performanceMonitor;