#!/usr/bin/env node

/**
 * Performance Check Script
 * Monitors memory usage and identifies potential performance issues
 */

const fs = require('fs');
const path = require('path');

// Performance monitoring utilities
const performanceMonitor = {
  getMemoryUsage: () => {
    if (typeof performance !== 'undefined' && 'memory' in performance) {
      const memory = performance.memory;
      return {
        used: Math.round(memory.usedJSHeapSize / 1048576), // MB
        total: Math.round(memory.totalJSHeapSize / 1048576), // MB
        limit: Math.round(memory.jsHeapSizeLimit / 1048576), // MB
        percentage: Math.round((memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100)
      };
    }
    return null;
  },

  logMemoryUsage: (label = 'Memory Usage') => {
    const memory = performanceMonitor.getMemoryUsage();
    if (memory) {
      console.log(`🔍 ${label}:`, {
        used: `${memory.used}MB`,
        total: `${memory.total}MB`, 
        limit: `${memory.limit}MB`,
        percentage: `${memory.percentage}%`
      });
    }
  }
};

// Check for potential memory leaks in code
const checkForMemoryLeaks = (filePath) => {
  const content = fs.readFileSync(filePath, 'utf8');
  const issues = [];

  // Check for event listeners without cleanup
  const eventListenerRegex = /addEventListener\([^)]+\)/g;
  const cleanupRegex = /removeEventListener\([^)]+\)/g;
  const eventListeners = content.match(eventListenerRegex) || [];
  const cleanups = content.match(cleanupRegex) || [];

  if (eventListeners.length > cleanups.length) {
    issues.push(`⚠️  Potential memory leak: ${eventListeners.length} event listeners vs ${cleanups.length} cleanups`);
  }

  // Check for intervals without cleanup
  const intervalRegex = /setInterval\([^)]+\)/g;
  const clearIntervalRegex = /clearInterval\([^)]+\)/g;
  const intervals = content.match(intervalRegex) || [];
  const clearIntervals = content.match(clearIntervalRegex) || [];

  if (intervals.length > clearIntervals.length) {
    issues.push(`⚠️  Potential memory leak: ${intervals.length} intervals vs ${clearIntervals.length} clearIntervals`);
  }

  // Check for timeouts without cleanup
  const timeoutRegex = /setTimeout\([^)]+\)/g;
  const clearTimeoutRegex = /clearTimeout\([^)]+\)/g;
  const timeouts = content.match(timeoutRegex) || [];
  const clearTimeouts = content.match(clearTimeoutRegex) || [];

  if (timeouts.length > clearTimeouts.length) {
    issues.push(`⚠️  Potential memory leak: ${timeouts.length} timeouts vs ${clearTimeouts.length} clearTimeouts`);
  }

  // Check for large imports
  const importRegex = /import.*from.*['"]([^'"]+)['"]/g;
  const imports = [];
  let match;
  while ((match = importRegex.exec(content)) !== null) {
    imports.push(match[1]);
  }

  if (imports.length > 50) {
    issues.push(`⚠️  Large number of imports: ${imports.length} imports detected`);
  }

  return issues;
};

// Check bundle size
const checkBundleSize = () => {
  const buildPath = path.join(__dirname, '../build');
  if (!fs.existsSync(buildPath)) {
    console.log('❌ Build directory not found. Run "npm run build" first.');
    return;
  }

  const jsFiles = fs.readdirSync(path.join(buildPath, 'static/js'))
    .filter(file => file.endsWith('.js'))
    .map(file => {
      const filePath = path.join(buildPath, 'static/js', file);
      const stats = fs.statSync(filePath);
      return {
        name: file,
        size: stats.size,
        sizeKB: Math.round(stats.size / 1024),
        sizeMB: Math.round(stats.size / 1024 / 1024 * 100) / 100
      };
    });

  console.log('\n📦 Bundle Size Analysis:');
  jsFiles.forEach(file => {
    const sizeIndicator = file.sizeMB > 1 ? '🔴' : file.sizeKB > 500 ? '🟡' : '🟢';
    console.log(`${sizeIndicator} ${file.name}: ${file.sizeKB}KB (${file.sizeMB}MB)`);
  });

  const totalSize = jsFiles.reduce((sum, file) => sum + file.size, 0);
  const totalSizeMB = Math.round(totalSize / 1024 / 1024 * 100) / 100;
  console.log(`\n📊 Total JS Bundle Size: ${totalSizeMB}MB`);
};

// Main performance check
const main = () => {
  console.log('🚀 Portfolio Performance Check\n');

  // Check for memory leaks in key files
  const keyFiles = [
    'src/Pages/Home.tsx',
    'src/Components/MovingDoodleBackground.tsx',
    'src/Components/RadialMenu.tsx'
  ];

  console.log('🔍 Checking for potential memory leaks:');
  keyFiles.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      const issues = checkForMemoryLeaks(filePath);
      if (issues.length > 0) {
        console.log(`\n📁 ${filePath}:`);
        issues.forEach(issue => console.log(`  ${issue}`));
      } else {
        console.log(`✅ ${filePath}: No obvious memory leaks detected`);
      }
    }
  });

  // Check bundle size
  checkBundleSize();

  // Performance recommendations
  console.log('\n💡 Performance Recommendations:');
  console.log('1. ✅ Remove performance monitoring in production (already implemented)');
  console.log('2. ✅ Reduce doodle count from 100 to 50 (already implemented)');
  console.log('3. ✅ Optimize carousel auto-cycling (already implemented)');
  console.log('4. 🔄 Consider lazy loading images for better initial load time');
  console.log('5. 🔄 Consider replacing react-slick with a lighter alternative');
  console.log('6. 🔄 Implement code splitting for better performance');

  console.log('\n✨ Performance check complete!');
};

// Run the performance check
if (require.main === module) {
  main();
}

module.exports = { performanceMonitor, checkForMemoryLeaks, checkBundleSize };
