export interface HomeArticle {
  id: number;
  url: string;
  pretitle: string | null;
  title: string;
  subtitle: string | null;
  enter: string | null;
  author: string | null;
  publicationDate: string;
  categorySlug: string;
  categoryName: string;
  imageUrl: string;
}

export interface HomeSide {
  id: number;
  url: string;
  title: string;
  author: string | null;
  publicationDate: string;
  categorySlug: string;
}

export interface HomeSection {
  categoryId: number;
  categoryName: string;
  categorySlug: string;
  main: HomeArticle | null;
  sides: HomeSide[];
}

export interface HomeFeed {
  lead: HomeArticle | null;
  secondary: HomeArticle[];
  recent: HomeArticle[];
  sections: HomeSection[];
}
