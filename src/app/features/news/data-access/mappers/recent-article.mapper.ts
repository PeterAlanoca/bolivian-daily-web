import { formatArticleSlug } from '@core/utils/slug.utils';
import { RecentArticleDto } from '../dtos/recent-article.dto';
import { RecentArticle } from '../../models/recent-article.model';

export function mapRecentArticleDtoToModel(dto: RecentArticleDto): RecentArticle {
  const formattedSlug = formatArticleSlug(dto.id, dto.slug);
  return {
    id: dto.id,
    slug: dto.slug,
    originalUrl: dto.originalUrl,
    url: formattedSlug,
    title: dto.title,
    lead: dto.lead,
    author: dto.author,
    publicationDate: dto.publicationDate,
    categorySlug: dto.categorySlug,
    categoryName: dto.categoryName,
    imageUrl: dto.imageUrl,
  };
}

export function mapRecentArticlesDtoToModel(dtos: RecentArticleDto[]): RecentArticle[] {
  return (dtos ?? []).map(mapRecentArticleDtoToModel);
}
