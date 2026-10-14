/**
 * Formats an article slug in MercadoLibre style: `:id-:slug`.
 * Example: formatArticleSlug(9, 'exportaciones-litio') => '9-exportaciones-litio'
 */
export function formatArticleSlug(id: number, slug: string): string {
  if (!slug) return String(id);
  if (slug.startsWith(`${id}-`)) return slug;
  return `${id}-${slug}`;
}

/**
 * Extracts the numeric ID from a MercadoLibre-style slug (`:id-:slug` or `:id`).
 * Example: parseArticleIdFromSlug('9-exportaciones-litio-suben-45') => 9
 */
export function parseArticleIdFromSlug(slug?: string | null): number | null {
  if (!slug) return null;
  const match = slug.match(/^(\d+)/);
  if (!match) return null;
  const id = parseInt(match[1], 10);
  return Number.isFinite(id) ? id : null;
}
