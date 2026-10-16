export interface CategoryApiDto {
  id: number;
  name: string;
  slug: string;
}

export interface CategoryArticleMediaApiDto {
  id: number;
  articleId: number;
  description: string | null;
  url: string;
}

export interface CategoryArticleItemApiDto {
  id: number;
  originalId: number | null;
  slug: string;
  originalUrl: string;
  title: string;
  lead: string | null;
  author: string | null;
  publishedAt: string;
  media: CategoryArticleMediaApiDto[];
}

export interface CategoryArticlesResponseApiDto {
  category: CategoryApiDto;
  items: CategoryArticleItemApiDto[];
  nextCursor: string | null;
}
