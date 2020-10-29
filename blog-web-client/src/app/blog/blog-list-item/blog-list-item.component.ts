import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Blog } from './model/blog.model';
import { BlogService } from '../service/blog.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
              private router: Router,
              private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

  viewBlog(blog: Blog) {
    this.router.navigate(['blog-view', this.blog.id], { state: { blog: this.blog } });
  }

  deleteBlog(id: number) {
    this.blogService.deleteBlogById(id).subscribe(result => {
        this.toastrService.success('Blog successfully deleted!');
        this.updateEvent.emit();
    });
  }
}
