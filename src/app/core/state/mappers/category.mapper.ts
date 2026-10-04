import { Category } from '../../models/category.model';
import { CategoryApiDto } from '../dtos/category.dto';

export function mapCategoryDtoToModel(dto: CategoryApiDto): Category {
  return {
    id: dto.id,
    name: dto.name,
    slug: dto.slug,
  };
}

export function mapCategoryListToModel(dtos: CategoryApiDto[] | null | undefined): Category[] {
  return (dtos ?? []).map(mapCategoryDtoToModel);
}
