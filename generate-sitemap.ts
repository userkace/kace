import { PROJECTS } from './src/constants';
import { writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

const DOMAIN = 'https://kace.dev';
const currentDate = new Date().toISOString().split('T')[0];

// Define static routes with their metadata
const staticRoutes: Record<string, Omit<SitemapUrl, 'loc'>> = {
  '/': {
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: '1.0'
  },
  '/projects': {
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: '0.8'
  },
  '/about': {
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: '0.8'
  },
  '/contact': {
    lastmod: currentDate,
    changefreq: 'weekly',
    priority: '0.8'
  }
};

// Generate sitemap URLs
const generateSitemapUrls = (): SitemapUrl[] => {
  const urls: SitemapUrl[] = [];

  // Add static routes
  Object.entries(staticRoutes).forEach(([route, metadata]) => {
    urls.push({
      loc: `${DOMAIN}/#${route}`,
      ...metadata
    });
  });

  // Add project detail pages
  PROJECTS.forEach(project => {
    urls.push({
      loc: `${DOMAIN}/#/project/${project.id}`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.6'
    });
  });

  return urls;
};

// Generate XML sitemap
const generateSitemapXml = (urls: SitemapUrl[]): string => {
  const urlEntries = urls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlEntries}
</urlset>`;
};

// Main function
const main = () => {
  try {
    console.log('🗺️  Generating sitemap...');
    
    const urls = generateSitemapUrls();
    const sitemapXml = generateSitemapXml(urls);
    
    // Write to public directory
    const outputPath = join(process.cwd(), 'public', 'sitemap.xml');
    writeFileSync(outputPath, sitemapXml, 'utf8');
    
    console.log(`✅ Sitemap generated successfully!`);
    console.log(`📍 Location: ${outputPath}`);
    console.log(`🔗 Total URLs: ${urls.length}`);
    console.log(`🌐 Domain: ${DOMAIN}`);
    
    // List all generated URLs
    console.log('\n📋 Generated URLs:');
    urls.forEach((url, index) => {
      console.log(`  ${index + 1}. ${url.loc}`);
    });
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
};

// Run if this file is executed directly
const __filename = fileURLToPath(import.meta.url);
if (__filename === process.argv[1]) {
  main();
}

export { main, generateSitemapUrls, generateSitemapXml };
