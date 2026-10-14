import { formatArticleSlug } from '@core/utils/slug.utils';
import { ArticleDetail, ArticleMedia } from '../../models/article-detail.model';
import { ArticleDetailApiDto, ArticleMediaApiDto } from '../dtos/article-detail.dto';

export function mapArticleMediaDtoToModel(dto: ArticleMediaApiDto): ArticleMedia {
  return {
    id: dto.id,
    articleId: dto.articleId,
    description: dto.description ?? undefined,
    url: dto.url,
  };
}

export function mapArticleDetailDtoToModel(dto: ArticleDetailApiDto): ArticleDetail {
  return {
    id: dto.id,
    intranetId: dto.intranetId ?? undefined,
    userId: dto.userId,
    newsSourceId: dto.newsSourceId ?? undefined,
    categoryId: dto.categoryId ?? undefined,
    url: dto.url,
    slug: formatArticleSlug(dto.id, dto.url),
    pretitle: dto.pretitle ?? undefined,
    title: dto.title,
    subtitle: dto.subtitle ?? undefined,
    lead: dto.lead ?? undefined,
    body: dto.body,
    author: dto.author ?? undefined,
    state: dto.state,
    publishedAt: dto.publishedAt,
    scrapedAt: dto.scrapedAt,
    createdAt: dto.createdAt,
    updatedAt: dto.updatedAt,
    media: (dto.media ?? []).map(mapArticleMediaDtoToModel),
  };
}
