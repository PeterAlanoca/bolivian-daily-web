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

import type { Category } from './category.model';

export type { Category };

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
  original_id?: number | null;
  slug?: string;
  original_url?: string;
  url: string;
  title: string;
  lead?: string;
  body: string;
  author?: string;
  publication_date: string;
  state: string;
  category?: Category;
  source?: Source;
  multimedia?: Multimedia[];
}
