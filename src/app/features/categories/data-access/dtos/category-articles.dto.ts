export interface CategoryApiDto {
  id: number;
  name: string;
  slug: string;
  state: string;
  createdAt: string;
  updatedAt: string;
}

export interface CategoryArticleMediaApiDto {
  id: number;
  articleId: number;
  description: string | null;
  url: string;
}

export interface CategoryArticleItemApiDto {
  id: number;
  intranetId: number | null;
  url: string;
  pretitle: string | null;
  title: string;
  subtitle: string | null;
  lead: string | null;
  author: string | null;
  state: string;
  publishedAt: string;
  createdAt: string;
  media: CategoryArticleMediaApiDto[];
}

export interface CategoryArticlesResponseApiDto {
  category: CategoryApiDto;
  items: CategoryArticleItemApiDto[];
  nextCursor: string | null;
}
