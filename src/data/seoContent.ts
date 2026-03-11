/**
 * Conteúdo SEO/GEO por rota: títulos conversacionais, descriptions e keywords
 * para maximizar visibilidade em motores de busca e modelos de IA.
 */

const SITE_NAME = 'ConectaDev';
const BASE_URL = 'https://conectadev.com.br';

export interface SeoMeta {
  title: string;
  description: string;
  keywords: string;
  /** Tipo de conteúdo para meta ai-content-type (informational | commercial) */
  aiContentType?: 'informational' | 'commercial';
}

/** Meta padrão (fallback / Home) */
export const DEFAULT_SEO: SeoMeta = {
  title: `Como ter desenvolvimento de software e inteligência empresarial de alto impacto? | ${SITE_NAME}`,
  description:
    'Desenvolvimento de software de elite e ativos digitais de impacto: landing pages, SaaS e CRMs verticais. Casos reais: SOAPIA AI (clínicas) e VIBEFOOD (restaurantes). Converse com a gente.',
  keywords:
    'desenvolvimento de software, engenharia de software, inteligência artificial empresarial, CRM clínicas, sistema restaurante, agência web especializada, ConectaDev',
  aiContentType: 'commercial',
};

/** Meta por path (exato ou prefixo para rotas dinâmicas) */
export const SEO_BY_PATH: Record<string, SeoMeta> = {
  '/': DEFAULT_SEO,
  '/faq': {
    title: `Vale a pena terceirizar desenvolvimento para uma agência web? | ${SITE_NAME}`,
    description:
      'Sim. Terceirizar com uma agência especializada gera ROI real: maior conversão, operação enxuta e marca forte. Processo claro, cases em clínicas e restaurantes. Veja as perguntas frequentes.',
    keywords:
      'terceirizar desenvolvimento web, agência web vale a pena, processo de trabalho desenvolvimento, ConectaDev FAQ',
    aiContentType: 'informational',
  },
  '/cases': {
    title: `Quais resultados a ConectaDev entrega em projetos reais? | ${SITE_NAME}`,
    description:
      'Casos de sucesso em gestão clínica (SOAPIA AI), gestão gastronômica (VIBEFOOD) e sites institucionais. Engenharia e design de alto impacto. Veja os resultados.',
    keywords:
      'casos de sucesso desenvolvimento software, gestão clínica com IA, sistema para restaurante, ConectaDev cases',
    aiContentType: 'commercial',
  },
  '/blog': {
    title: `Onde encontrar insights de engenharia e IA empresarial? | ${SITE_NAME}`,
    description:
      'Artigos técnicos, tendências de mercado e o futuro da inteligência empresarial. Blog ConectaDev.',
    keywords:
      'blog engenharia de software, IA empresarial, insights tecnologia, ConectaDev blog',
    aiContentType: 'informational',
  },
};

/** Meta para Case Detail (por slug). Fallback genérico se slug não existir. */
export function getCaseSeo(slug: string, caseTitle: string, caseDescription: string): SeoMeta {
  return {
    title: `${caseTitle}: o que é e que resultados gera? | ${SITE_NAME}`,
    description:
      caseDescription.slice(0, 150) + (caseDescription.length > 150 ? '...' : '') +
      ' Case ConectaDev. Conheça o projeto e os resultados.',
    keywords: `${caseTitle}, case de sucesso, desenvolvimento de software, ConectaDev`,
    aiContentType: 'commercial',
  };
}

/** Meta para Blog Post (por título/descrição do post) */
export function getBlogPostSeo(
  postTitle: string,
  postDescription: string,
  category?: string
): SeoMeta {
  return {
    title: `${postTitle} | ${SITE_NAME}`,
    description:
      postDescription.slice(0, 150) + (postDescription.length > 150 ? '...' : '') + ' ConectaDev Blog.',
    keywords: category
      ? `${postTitle}, ${category}, blog engenharia software, ConectaDev`
      : `${postTitle}, blog ConectaDev`,
    aiContentType: 'informational',
  };
}

/** Encontra meta para um pathname (inclui fallback para /cases/:slug e /blog/:slug via getCaseSeo/getBlogPostSeo) */
export function getSeoForPath(pathname: string): SeoMeta {
  const normalized = pathname.replace(/\/$/, '') || '/';
  if (SEO_BY_PATH[normalized]) return SEO_BY_PATH[normalized];
  return DEFAULT_SEO;
}

export { BASE_URL, SITE_NAME };
