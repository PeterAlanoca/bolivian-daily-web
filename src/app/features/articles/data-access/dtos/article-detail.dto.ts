export interface ArticleMediaApiDto {
  id: number;
  articleId: number;
  description: string | null;
  url: string;
}

export interface ArticleDetailApiDto {
  id: number;
  intranetId: number | null;
  userId: number;
  newsSourceId: number | null;
  categoryId: number | null;
  url: string;
  pretitle: string | null;
  title: string;
  subtitle: string | null;
  lead: string | null;
  body: string;
  author: string | null;
  state: string;
  publishedAt: string;
  scrapedAt: string;
  createdAt: string;
  updatedAt: string;
  media: ArticleMediaApiDto[];
}
