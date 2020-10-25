import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Blog } from './model/blog.model';
import { BlogService } from '../blog/service/blog.service';

@Component({
  selector: 'app-blog-list-item',
  templateUrl: './blog-list-item.component.html',
  styleUrls: ['./blog-list-item.component.css']
})
export class BlogListItemComponent implements OnInit {

  @Output() 
  updateEvent = new EventEmitter();
  @Input() blog: Blog;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
  }

  deleteBlog(id: number) {
    this.blogService.deleteBlogById(id).subscribe(result => {
        this.updateEvent.emit();
    });
  }
}
