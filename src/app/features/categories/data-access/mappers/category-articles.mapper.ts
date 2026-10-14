import { Category, News } from '@core/models/news.model';
import { formatArticleSlug } from '@core/utils/slug.utils';
import {
  CategoryApiDto,
  CategoryArticleItemApiDto,
  CategoryArticlesResponseApiDto,
} from '../dtos/category-articles.dto';

export interface CategoryArticlesResult {
  category: Category;
  items: News[];
  nextCursor: string | null;
}

export function mapCategoryApiDtoToModel(dto: CategoryApiDto): Category {
  return {
    id: dto.id,
    name: dto.name,
    slug: dto.slug,
  };
}

export function mapCategoryArticleItemDtoToNews(
  dto: CategoryArticleItemApiDto,
  category: Category,
): News {
  const formattedSlug = formatArticleSlug(dto.id, dto.url);
  return {
    id: dto.id,
    user_id: 1,
    category_id: category.id,
    source_id: 1,
    intranet_id: dto.intranetId ?? undefined,
    url: formattedSlug,
    pretitle: dto.pretitle ?? undefined,
    title: dto.title,
    path: `${category.slug}/${formattedSlug}`,
    subtitle: dto.subtitle ?? undefined,
    enter: dto.lead ?? undefined,
    body: '',
    author: dto.author ?? undefined,
    publication_date: dto.publishedAt,
    state: dto.state,
    category,
    multimedia: (dto.media ?? []).map((m) => ({
      id: m.id,
      news_id: m.articleId,
      url: m.url,
      description: m.description ?? undefined,
      type: 'image',
      state: 'A',
    })),
  };
}

export function mapCategoryArticlesResponseDtoToResult(
  dto: CategoryArticlesResponseApiDto,
): CategoryArticlesResult {
  const category = mapCategoryApiDtoToModel(dto.category);
  return {
    category,
    items: (dto.items ?? []).map((item) => mapCategoryArticleItemDtoToNews(item, category)),
    nextCursor: dto.nextCursor,
  };
}
