import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogItemComponent } from './blog/blog-item/blog-item.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'blog-list', component: BlogListComponent },
  { path: 'blog-view', component: BlogItemComponent },
  { path: 'login', component: LoginComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }