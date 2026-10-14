export interface ArticleMedia {
  id: number;
  articleId: number;
  description?: string;
  url: string;
}

export interface ArticleDetail {
  id: number;
  intranetId?: number;
  userId: number;
  newsSourceId?: number;
  categoryId?: number;
  url: string;
  slug: string;
  pretitle?: string;
  title: string;
  subtitle?: string;
  lead?: string;
  body: string;
  author?: string;
  state: string;
  publishedAt: string;
  scrapedAt: string;
  createdAt: string;
  updatedAt: string;
  media: ArticleMedia[];
}
