import { PROJECTS } from './src/constants';
import { writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: string;
}

interface StaticRouteMetadata extends Omit<SitemapUrl, 'loc'> {}

interface SitemapConfig {
  domain: string;
  outputPath: string;
}

class SitemapGenerator {
  private readonly config: SitemapConfig;
  private readonly currentDate: string;
  private readonly staticRoutes: Record<string, StaticRouteMetadata>;

  constructor(config: SitemapConfig) {
    this.config = config;
    this.currentDate = new Date().toISOString().split('T')[0];
    this.staticRoutes = {
      '/': {
        lastmod: this.currentDate,
        changefreq: 'weekly',
        priority: '0.9'
      },
      '/projects': {
        lastmod: this.currentDate,
        changefreq: 'weekly',
        priority: '0.8'
      },
      '/about': {
        lastmod: this.currentDate,
        changefreq: 'weekly',
        priority: '0.8'
      },
      '/contact': {
        lastmod: this.currentDate,
        changefreq: 'weekly',
        priority: '0.8'
      }
    };
  }

  public generateSitemapUrls(): SitemapUrl[] {
    const urls: SitemapUrl[] = [];

    // Add canonical root URL (highest priority)
    urls.push({
      loc: `${this.config.domain}/`,
      lastmod: this.currentDate,
      changefreq: 'weekly',
      priority: '1.0'
    });

    // Add static routes with hash
    Object.entries(this.staticRoutes).forEach(([route, metadata]) => {
      urls.push({
        loc: `${this.config.domain}/#${route}`,
        ...metadata
      });
    });

    // Add project detail pages
    PROJECTS.forEach(project => {
      urls.push({
        loc: `${this.config.domain}/#/project/${project.id}`,
        lastmod: this.currentDate,
        changefreq: 'monthly',
        priority: '0.6'
      });
    });

    return urls;
  }

  public generateSitemapXml(urls: SitemapUrl[]): string {
    const urlEntries = urls.map(url => `  <url>
    <loc>${this.escapeXml(url.loc)}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n');

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
  }

  private escapeXml(unsafe: string): string {
    return unsafe
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }


  public generate(): void {
    try {
      console.log('🗺️  Generating sitemap...');
      
      const urls = this.generateSitemapUrls();
      const sitemapXml = this.generateSitemapXml(urls);
      
      // Ensure output directory exists
      const outputPath = this.config.outputPath;
      writeFileSync(outputPath, sitemapXml, 'utf8');
      
      this.logSuccess(urls, outputPath);
    } catch (error) {
      this.logError(error);
    }
  }

  private logSuccess(urls: SitemapUrl[], outputPath: string): void {
    console.log('✅ Sitemap generated successfully!');
    console.log(`📍 Location: ${outputPath}`);
    console.log(`🔗 Total URLs: ${urls.length}`);
    console.log(`🌐 Domain: ${this.config.domain}`);
    
    // List all generated URLs
    console.log('\n📋 Generated URLs:');
    urls.forEach((url, index) => {
      console.log(`  ${index + 1}. ${url.loc}`);
    });
  }

  private logError(error: unknown): void {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('❌ Error generating sitemap:', errorMessage);
    process.exit(1);
  }
}

// Default configuration
const DEFAULT_CONFIG: SitemapConfig = {
  domain: 'https://kace.dev',
  outputPath: join(process.cwd(), 'public', 'sitemap.xml')
};

// Main function
const main = (): void => {
  const generator = new SitemapGenerator(DEFAULT_CONFIG);
  generator.generate();
};

// Legacy exports for backward compatibility
const generateSitemapUrls = (): SitemapUrl[] => {
  const generator = new SitemapGenerator(DEFAULT_CONFIG);
  return generator.generateSitemapUrls();
};

const generateSitemapXml = (urls: SitemapUrl[]): string => {
  const generator = new SitemapGenerator(DEFAULT_CONFIG);
  return generator.generateSitemapXml(urls);
};

// Run if this file is executed directly
const __filename = fileURLToPath(import.meta.url);
if (__filename === process.argv[1]) {
  main();
}

export { main, generateSitemapUrls, generateSitemapXml, SitemapGenerator, DEFAULT_CONFIG };
export type { SitemapUrl, SitemapConfig };
