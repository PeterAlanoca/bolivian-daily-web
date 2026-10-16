export interface HomeFeedMediaApiDto {
  id: number;
  articleId: number;
  description: string | null;
  url: string;
}

export interface HomeFeedCategoryApiDto {
  id: number;
  name: string;
  slug: string;
}

export interface HomeFeedArticleApiDto {
  id: number;
  slug: string;
  originalUrl: string;
  title: string;
  lead: string | null;
  author: string | null;
  publishedAt: string;
  category: HomeFeedCategoryApiDto;
  media: HomeFeedMediaApiDto[];
}

export interface HomeFeedSideApiDto {
  id: number;
  slug: string;
  originalUrl: string;
  title: string;
  author: string | null;
  publishedAt: string;
}

export interface HomeFeedSectionApiDto {
  category: HomeFeedCategoryApiDto;
  main: HomeFeedArticleApiDto | null;
  sides: HomeFeedSideApiDto[];
}

export interface HomeFeedApiDto {
  lead: HomeFeedArticleApiDto | null;
  secondary: HomeFeedArticleApiDto[];
  recent: HomeFeedArticleApiDto[];
  sections: HomeFeedSectionApiDto[];
}
