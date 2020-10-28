import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/blog/blog-list-item/model/blog.model';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {

  blog: Blog;

  constructor(private blogService: BlogService,
              private router: Router) {
    this.blog = this.router.getCurrentNavigation().extras.state.blog;
  }

  ngOnInit(): void {

  }

  deleteBlog(id: number): void {
    this.blogService.deleteBlogById(id).subscribe(result => {
      this.router.navigate(['../blog-list']);
    });
  }

  editBlog(blog: Blog): void {
   
  }

}
