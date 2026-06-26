export interface User {
  id: number;
  name: string;
  email: string;
  access: string;
  state: string;
}

export interface Source {
  id: number;
  name: string;
  url: string;
  state: string;
}

export interface Category {
  id: number;
  name: string;
  url: string;
  state: string;
}

export interface Multimedia {
  id: number;
  news_id: number;
  description?: string;
  url: string;
  type: string;
  state: string;
}

export interface News {
  id: number;
  user_id: number;
  category_id: number;
  source_id: number;
  intranet_id?: number;
  url: string; // The URL slug or path
  pretitle?: string;
  title: string;
  path: string;
  subtitle?: string;
  enter?: string; // The excerpt/intro text
  body: string;
  author?: string;
  publication_date: string; // ISO Date String
  state: string;
  category?: Category;
  source?: Source;
  multimedia?: Multimedia[];
}
