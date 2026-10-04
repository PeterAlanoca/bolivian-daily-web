import { Routes } from '@angular/router';
import { HomePageComponent } from './features/home/pages/home-page/home-page.component';
import { CategoryListPageComponent } from './features/categories/pages/category-list-page/category-list-page.component';
import { ArticleDetailPageComponent } from './features/articles/pages/article-detail-page/article-detail-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: ':category', component: CategoryListPageComponent },
  { path: ':category/:slug', component: ArticleDetailPageComponent },
  { path: '**', redirectTo: '' },
];
