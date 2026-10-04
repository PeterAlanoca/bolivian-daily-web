import {
  HomeArticle,
  HomeFeed,
  HomeSection,
  HomeSide,
} from '../../models/home-article.model';
import {
  HomeFeedApiDto,
  HomeFeedArticleApiDto,
  HomeFeedSectionApiDto,
  HomeFeedSideApiDto,
} from '../dtos/home-feed.dto';

export function mapHomeFeedArticleDtoToModel(dto: HomeFeedArticleApiDto): HomeArticle {
  return {
    id: dto.id,
    url: dto.url,
    pretitle: dto.pretitle,
    title: dto.title,
    subtitle: dto.subtitle,
    enter: dto.lead,
    author: dto.author,
    publicationDate: dto.publishedAt,
    categorySlug: dto.category.slug,
    categoryName: dto.category.name,
    imageUrl: dto.media.length > 0 ? dto.media[0].url : '',
  };
}

export function mapHomeFeedSideDtoToModel(dto: HomeFeedSideApiDto, categorySlug: string): HomeSide {
  return {
    id: dto.id,
    url: dto.url,
    title: dto.title,
    author: dto.author,
    publicationDate: dto.publishedAt,
    categorySlug,
  };
}

export function mapHomeFeedSectionDtoToModel(dto: HomeFeedSectionApiDto): HomeSection {
  return {
    categoryId: dto.category.id,
    categoryName: dto.category.name,
    categorySlug: dto.category.slug,
    main: dto.main ? mapHomeFeedArticleDtoToModel(dto.main) : null,
    sides: (dto.sides ?? []).map((side) => mapHomeFeedSideDtoToModel(side, dto.category.slug)),
  };
}

export function mapHomeFeedDtoToModel(dto: HomeFeedApiDto): HomeFeed {
  return {
    lead: dto.lead ? mapHomeFeedArticleDtoToModel(dto.lead) : null,
    secondary: (dto.secondary ?? []).map(mapHomeFeedArticleDtoToModel),
    recent: (dto.recent ?? []).map(mapHomeFeedArticleDtoToModel),
    sections: (dto.sections ?? []).map(mapHomeFeedSectionDtoToModel),
  };
}
