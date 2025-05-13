import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';

// Define all routes that should be pre-rendered
const routes = [
  '/',
  '/about',
  '/services', // Main services page
  '/projects',
  '/contact',
  '/sitemap',

  // Parent Services
  '/general-repairs',
  '/healthy-homes',
  '/insurance-work',
  '/installations',
  '/outdoor-maintenance',
  '/handyman',

  // Child Services
  '/general-repairs/building-repairs',
  '/general-repairs/kitchen-maintenance',
  '/general-repairs/bathroom-repairs',
  '/general-repairs/roof-gutter-repairs',
  '/general-repairs/carpet-flooring-repairs',
  '/general-repairs/windows-doors-repairs',
  '/general-repairs/tiling',
  '/general-repairs/gib-plastering',
  '/healthy-homes/insulation-installation',
  '/healthy-homes/heating-installation',
  '/healthy-homes/ventilation-systems',
  '/healthy-homes/drainage-guttering',
  '/healthy-homes/mould-removal',
  '/healthy-homes/healthy-homes-assessment',
  '/insurance-work/fire-damage-restoration',
  '/insurance-work/flood-damage-repairs',
  '/insurance-work/insurance-building-repairs',
  '/installations/double-glazing',
  '/installations/heat-pump-installation',
  '/installations/air-conditioning',
  '/installations/home-automation',
  '/installations/locks-handles',
  '/installations/cupboards-shelves',
  '/installations/pergola-assembly',
  '/outdoor-maintenance/paving-bricklaying',
  '/outdoor-maintenance/concreting',
  '/outdoor-maintenance/fence-gate-repairs',
  '/outdoor-maintenance/roof-cleaning',
  '/outdoor-maintenance/water-blasting',
  '/outdoor-maintenance/driveway-cleaning',
  '/outdoor-maintenance/building-cleaning',
  '/outdoor-maintenance/cladding-repairs',
  '/handyman/general-repairs',
  '/handyman/gutter-cleaning',
  '/handyman/windows-doors',
  '/handyman/shelving-installation',
  '/handyman/tiling-repairs'
];

// Custom plugin to generate static HTML files for each route
function staticHTMLGeneration(): Plugin {
  return {
    name: 'static-html-generation',
    async closeBundle() {
      console.log('Generating static HTML files...');
      
      // Create a dist directory if it doesn't exist
      if (!fs.existsSync('dist')) {
        fs.mkdirSync('dist');
      }
      
      // Get the index.html content
      const indexPath = path.resolve('dist/index.html');
      if (!fs.existsSync(indexPath)) {
        console.error('dist/index.html not found. Build may have failed.');
        return;
      }
      
      let indexContent = fs.readFileSync(indexPath, 'utf-8');
      
      // Create a folder for each route and copy index.html
      for (const route of routes) {
        if (route === '/') continue; // Skip root route as it already has index.html
        
        const routePath = path.join('dist', route.slice(1));
        
        // Create directories recursively if they don't exist
        if (!fs.existsSync(routePath)) {
          fs.mkdirSync(routePath, { recursive: true });
        }
        
        // Write index.html to each route folder for SPA fallback
        fs.writeFileSync(path.join(routePath, 'index.html'), indexContent);
        console.log(`Generated static HTML for ${route}`);
      }
      
      console.log('Static HTML generation complete!');
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    staticHTMLGeneration(),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom', 'react-helmet-async'],
          'ui': ['lucide-react']
        }
      }
    },
    // Enable minification for better performance
    minify: 'terser',
    // Generate source maps for debugging
    sourcemap: process.env.NODE_ENV !== 'production',
    // Report compressed size
    reportCompressedSize: true,
    // Pre-render routes for SEO
    ssrManifest: true,
  },
  server: {
    // Configure headers for better SEO
    headers: {
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    }
  }
});
