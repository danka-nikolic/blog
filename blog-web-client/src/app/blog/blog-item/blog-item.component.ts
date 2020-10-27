import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/blog-list-item/model/blog.model';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {

  blog: Blog = null;
  blogId: number = null;

  constructor(private blogService: BlogService,
              private router: Router) {
    this.blogId = this.router.getCurrentNavigation().extras.state.blogId;
    const isViewMode = this.router.getCurrentNavigation().extras.state.isViewMode;
  }

  ngOnInit(): void {
    this.blogService.getBlogById(this.blogId).subscribe(result => {
      this.blog = result;
    });
  }

}
