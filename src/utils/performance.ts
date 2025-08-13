import React from 'react';

// Performance monitoring utilities
export const performanceMonitor = {
  // Track memory usage
  getMemoryUsage: () => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      return {
        used: Math.round(memory.usedJSHeapSize / 1048576), // MB
        total: Math.round(memory.totalJSHeapSize / 1048576), // MB
        limit: Math.round(memory.jsHeapSizeLimit / 1048576), // MB
        percentage: Math.round((memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100)
      };
    }
    return null;
  },

  // Log memory usage
  logMemoryUsage: (label: string = 'Memory Usage') => {
    const memory = performanceMonitor.getMemoryUsage();
    if (memory) {
      console.log(`🔍 ${label}:`, {
        used: `${memory.used}MB`,
        total: `${memory.total}MB`, 
        limit: `${memory.limit}MB`,
        percentage: `${memory.percentage}%`
      });
    }
  },

  // Monitor component render times
  measureRender: (componentName: string, fn: () => void) => {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`⚡ ${componentName} render time: ${(end - start).toFixed(2)}ms`);
  },

  // Check for memory leaks by monitoring object count
  objectCount: new Map<string, number>(),
  
  trackObjects: (category: string, count: number) => {
    performanceMonitor.objectCount.set(category, count);
    console.log(`📊 Objects in ${category}: ${count}`);
  }
};

// Hook for monitoring component performance
export const usePerformanceMonitor = (componentName: string) => {
  const startTime = React.useRef(performance.now());
  
  React.useEffect(() => {
    const currentStartTime = startTime.current;
    const renderTime = performance.now() - currentStartTime;
    console.log(`⚡ ${componentName} mounted in ${renderTime.toFixed(2)}ms`);
    
    // Log memory usage on mount
    performanceMonitor.logMemoryUsage(`${componentName} Mount`);
    
    return () => {
      const unmountTime = performance.now() - currentStartTime;
      console.log(`🗑️ ${componentName} unmounted after ${unmountTime.toFixed(2)}ms`);
      performanceMonitor.logMemoryUsage(`${componentName} Unmount`);
    };
  });
  
  return performanceMonitor;
};
