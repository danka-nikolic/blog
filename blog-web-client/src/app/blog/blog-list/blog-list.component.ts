import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/blog-list-item/model/blog.model';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogs: Blog[] = this.initBlogList();

  constructor() { }

  ngOnInit(): void {
  }

  initBlogList(): Blog[] {
    const blogList = [];

    const blog1 = new Blog();
    blog1.id = 1;
    blog1.title = 'Naslov 1';
    blog1.date = new Date();
    blog1.content = '';

    const blog2 = new Blog();
    blog2.id = 2;
    blog2.title = 'Naslov 2';
    blog2.date = new Date();
    blog2.content = '';

    const blog3 = new Blog();
    blog3.id = 3;
    blog3.title = 'Naslov 3';
    blog3.date = new Date();
    blog3.content = '';

    const blog4 = new Blog();
    blog4.id = 4;
    blog4.title = 'Naslov 4';
    blog4.date = new Date();
    blog4.content = '';

    const blog5 = new Blog();
    blog5.id = 3;
    blog5.title = 'Naslov 5';
    blog5.date = new Date();
    blog5.content = '';

    const blog6 = new Blog();
    blog6.id = 3;
    blog6.title = 'Naslov 6';
    blog6.date = new Date();
    blog6.content = '';

    const blog7 = new Blog();
    blog7.id = 3;
    blog7.title = 'Naslov 7';
    blog7.date = new Date();
    blog7.content = '';

    const blog8 = new Blog();
    blog8.id = 3;
    blog8.title = 'Naslov 8';
    blog8.date = new Date();
    blog8.content = '';

    const blog9 = new Blog();
    blog9.id = 3;
    blog9.title = 'Naslov 9';
    blog9.date = new Date();
    blog9.content = '';

    const blog10 = new Blog();
    blog10.id = 3;
    blog10.title = 'Naslov 10';
    blog10.date = new Date();
    blog10.content = '';

    const blog11 = new Blog();
    blog11.id = 3;
    blog11.title = 'Naslov 11';
    blog11.date = new Date();
    blog11.content = '';

    blogList.push(blog1);
    blogList.push(blog2);
    blogList.push(blog3);
    blogList.push(blog4);
    blogList.push(blog5);
    blogList.push(blog6);
    blogList.push(blog7);
    blogList.push(blog8);
    blogList.push(blog9);
    blogList.push(blog10);
    blogList.push(blog11);
    
    return blogList;
  }

}
