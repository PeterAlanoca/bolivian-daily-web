import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { ArticleComponent } from './pages/article/article.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':category', component: CategoryComponent },
  { path: ':category/:slug', component: ArticleComponent },
  { path: '**', redirectTo: '' }
];
