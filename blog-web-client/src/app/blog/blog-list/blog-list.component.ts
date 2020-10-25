import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/blog-list-item/model/blog.model';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogs: Blog[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.initBlogList();
  }

  initBlogList(): void {
    this.blogService.getAllBlogs().subscribe(result => {
      this.blogs = result;
    });
  }

}
