export interface ArticleMedia {
  id: number;
  articleId: number;
  description?: string;
  url: string;
}

export interface ArticleDetail {
  id: number;
  originalId?: number | null;
  newsSourceId?: number;
  categoryId?: number;
  slug: string;
  originalUrl: string;
  title: string;
  lead?: string | null;
  body: string;
  author?: string;
  publishedAt: string;
  media: ArticleMedia[];
}
