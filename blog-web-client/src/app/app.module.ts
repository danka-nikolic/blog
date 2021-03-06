import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { AppRoutingModule } from './app-routing.module';
import { BlogListItemComponent } from './blog/blog-list-item/blog-list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogItemComponent } from './blog/blog-item/blog-item.component';
import { TruncateModule } from 'ng2-truncate';
import { BlogAddOrEditComponent } from './blog/blog-add-or-edit/blog-add-or-edit.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlogListComponent,
    BlogListItemComponent,
    BlogItemComponent,
    BlogAddOrEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    TruncateModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
