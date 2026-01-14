import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  noindex?: boolean;
}

export default function SEO({ title, description, canonical, noindex = false }: SEOProps) {
  useEffect(() => {
    document.title = title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    const metaOgTitle = document.querySelector('meta[property="og:title"]');
    if (metaOgTitle) {
      metaOgTitle.setAttribute('content', title);
    }

    const metaOgDescription = document.querySelector('meta[property="og:description"]');
    if (metaOgDescription) {
      metaOgDescription.setAttribute('content', description);
    }

    const metaTwitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (metaTwitterTitle) {
      metaTwitterTitle.setAttribute('content', title);
    }

    const metaTwitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (metaTwitterDescription) {
      metaTwitterDescription.setAttribute('content', description);
    }

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonical);
    }

    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      if (noindex) {
        metaRobots.setAttribute('content', 'noindex, nofollow');
      } else {
        metaRobots.setAttribute('content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
      }
    }
  }, [title, description, canonical, noindex]);

  return null;
}
