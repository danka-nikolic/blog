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


    blogList.push(blog1);
    blogList.push(blog2);
    blogList.push(blog3);

    return blogList;
  }

}
