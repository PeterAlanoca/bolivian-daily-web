export interface RecentArticle {
  id: number;
  url: string;
  pretitle: string | null;
  title: string;
  subtitle: string | null;
  author: string | null;
  publicationDate: string;
  categorySlug: string;
  categoryName: string;
  imageUrl: string | null;
}
