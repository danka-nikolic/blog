import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Blog } from './model/blog.model';
import { BlogService } from '../blog/service/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-list-item',
  templateUrl: './blog-list-item.component.html',
  styleUrls: ['./blog-list-item.component.css']
})
export class BlogListItemComponent implements OnInit {

  @Output() 
  updateEvent = new EventEmitter();
  @Input() blog: Blog;

  constructor(private blogService: BlogService,
              private router: Router) { }

  ngOnInit(): void {
  }

  viewBlog(blog: Blog) {
    this.router.navigate(['blog-view'], { state: { blog: this.blog, isViewMode: true } });
  }

  deleteBlog(id: number) {
    this.blogService.deleteBlogById(id).subscribe(result => {
        this.updateEvent.emit();
    });
  }
}
