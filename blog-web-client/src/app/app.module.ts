import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { AppRoutingModule } from './app-routing.module';
import { BlogListItemComponent } from './blog-list-item/blog-list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogItemComponent } from './blog/blog-item/blog-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlogListComponent,
    BlogListItemComponent,
    BlogItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
