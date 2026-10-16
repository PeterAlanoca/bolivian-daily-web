export interface ArticleMediaApiDto {
  id: number;
  articleId: number;
  description: string | null;
  url: string;
}

export interface ArticleDetailApiDto {
  id: number;
  originalId: number | null;
  newsSourceId: number | null;
  categoryId: number | null;
  slug: string;
  originalUrl: string;
  title: string;
  lead: string | null;
  body: string;
  author: string | null;
  publishedAt: string;
  media: ArticleMediaApiDto[];
}
