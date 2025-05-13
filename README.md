# PropertyCare NZ Website

This is the official website for PropertyCare NZ, a property maintenance and repair service in Auckland, New Zealand.

## Features

- React-based frontend with TypeScript
- SEO-optimized with React Helmet and semantic HTML
- Responsive design using TailwindCSS
- Static site generation (SSG) for optimal SEO
- Optimized for search engines with:
  - Semantic HTML5 structure
  - Structured data (JSON-LD)
  - Meta tags for social sharing
  - Sitemap.xml and robots.txt
  - Web App Manifest
  - PWA capabilities

## Development

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/propertycare-nz.git
cd propertycare-nz

# Install dependencies
npm install
# or
yarn
```

### Running locally

```bash
# Start development server
npm run dev
# or
yarn dev
```

The site will be available at http://localhost:5173/

### Building for production

```bash
# Standard build (React SPA)
npm run build
# or
yarn build

# Static site generation build with SEO optimization (recommended)
npm run build:static
# or
yarn build:static
```

The built files will be in the `dist` directory.

## Static Site Generation

This project uses a custom static site generation (SSG) pipeline to create HTML files for each route, which greatly improves SEO. Here's how it works:

1. **Build process**: The `npm run build:static` command:
   - Compiles the React app with TypeScript (`tsc && vite build`)
   - Runs the prerender script (`node scripts/prerender.js`)

2. **Prerender script**: The prerender script:
   - Creates HTML files for each route defined in the routes array
   - Injects route-specific metadata (title, description, canonical URL, etc.)
   - Updates Open Graph and Twitter card data for social sharing

3. **Deploy-ready**: The generated static site is ready to deploy to any static hosting service.

## Deployment

The site can be deployed to any static hosting service like Netlify, Vercel, or GitHub Pages.

```bash
# Preview production build
npm run preview
# or
yarn preview
```

### Netlify Deployment

This project includes a `netlify.toml` configuration file for easy deployment to Netlify. It handles:

- Build command and publish directory configuration
- SPA redirects for client-side routing
- Cache control for static assets
- Security headers for better protection

To deploy to Netlify:

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket)
2. Connect your repository to Netlify
3. Netlify will automatically detect the configuration and deploy your site

## SEO Features

This site is built with SEO in mind:

1. **Static Site Generation**: Pre-rendered HTML for each page for better SEO
2. **Semantic HTML**: Proper use of HTML5 elements for better accessibility and SEO
3. **Meta Tags**: Comprehensive meta tags for search engines and social sharing
4. **Structured Data**: JSON-LD schema markup for local business
5. **Performance Optimization**: Fast loading times for better search ranking
6. **Mobile Responsive**: Fully responsive design for all devices
7. **Sitemap & Robots.txt**: Properly configured for search engine crawling
8. **Canonical URLs**: Avoiding duplicate content issues
9. **Security Headers**: Enhanced security for better SEO ranking
10. **PWA Support**: Progressive Web App capabilities

## License

Copyright © 2023 PropertyCare NZ. All rights reserved. 