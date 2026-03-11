import { Helmet } from 'react-helmet-async';
import type { SeoMeta } from '../../data/seoContent';

interface PageSEOProps {
  meta: SeoMeta;
}

/**
 * Define title, description, keywords e meta para crawlers de IA (robots, googlebot, bingbot, ai-content-type).
 */
export function PageSEO({ meta }: PageSEOProps) {
  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      {meta.aiContentType && <meta name="ai-content-type" content={meta.aiContentType} />}
    </Helmet>
  );
}
