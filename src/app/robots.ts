import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/siteConfig';

// Explicitly allow every crawler — traditional search AND AI/LLM bots.
// GEO (Generative Engine Optimization): being indexed by AI crawlers is now
// as important as Google. Never block them unless you have a legal reason.
// Only /api/ is disallowed (no crawlable content, just a POST endpoint).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Traditional search engines
      { userAgent: 'Googlebot',       allow: ['/'], disallow: ['/api/'] },
      { userAgent: 'Googlebot-Image', allow: ['/'] },
      { userAgent: 'Bingbot',         allow: ['/'], disallow: ['/api/'] },
      { userAgent: 'Slurp',           allow: ['/'] }, // Yahoo

      // Google AI Overviews / Gemini
      { userAgent: 'Google-Extended', allow: ['/'] },

      // OpenAI — ChatGPT search and browsing
      { userAgent: 'GPTBot',          allow: ['/'] },
      { userAgent: 'ChatGPT-User',    allow: ['/'] },
      { userAgent: 'OAI-SearchBot',   allow: ['/'] },

      // Anthropic — Claude
      { userAgent: 'ClaudeBot',       allow: ['/'] },
      { userAgent: 'anthropic-ai',    allow: ['/'] },

      // Perplexity AI
      { userAgent: 'PerplexityBot',   allow: ['/'] },

      // Meta AI
      { userAgent: 'FacebookBot',     allow: ['/'] },
      { userAgent: 'meta-externalagent', allow: ['/'] },

      // Cohere
      { userAgent: 'cohere-ai',       allow: ['/'] },

      // Apple (Siri / Spotlight)
      { userAgent: 'Applebot',        allow: ['/'] },

      // Catch-all
      { userAgent: '*', allow: ['/'], disallow: ['/api/'] },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
