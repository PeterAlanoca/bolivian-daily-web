import { RecentArticleDto } from '../dtos/recent-article.dto';
import { RecentArticle } from '../../models/recent-article.model';

export function mapRecentArticleDtoToModel(dto: RecentArticleDto): RecentArticle {
  return {
    id: dto.id,
    url: dto.url,
    pretitle: dto.pretitle,
    title: dto.title,
    subtitle: dto.subtitle,
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
