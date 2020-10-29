import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogAddOrEditComponent } from './blog/blog-add-or-edit/blog-add-or-edit.component';
import { BlogItemComponent } from './blog/blog-item/blog-item.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'blog-list', component: BlogListComponent },
  { path: 'blog-view/:id', component: BlogItemComponent },
  { path: 'blog-add', component: BlogAddOrEditComponent },
  { path: 'blog-edit/:id', component: BlogAddOrEditComponent },
  { path: 'login', component: LoginComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }