export interface RecentArticle {
  id: number;
  slug: string;
  originalUrl: string;
  url: string;
  title: string;
  lead?: string | null;
  author: string | null;
  publicationDate: string;
  categorySlug: string;
  categoryName: string;
  imageUrl: string | null;
}
