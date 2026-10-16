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
    originalId: dto.originalId ?? undefined,
    newsSourceId: dto.newsSourceId ?? undefined,
    categoryId: dto.categoryId ?? undefined,
    slug: dto.slug,
    originalUrl: dto.originalUrl,
    title: dto.title,
    lead: dto.lead ?? undefined,
    body: dto.body,
    author: dto.author ?? undefined,
    publishedAt: dto.publishedAt,
    media: (dto.media ?? []).map(mapArticleMediaDtoToModel),
  };
}
