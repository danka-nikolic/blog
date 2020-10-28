import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/blog/blog-list-item/model/blog.model';
import { BlogService } from '../service/blog.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  username = '';
  readonly appName = 'BloGEO';
  blogs: Blog[] = [];

  constructor(private blogService: BlogService,
              private router: Router,
              private userService: UserService) { }

  ngOnInit(): void {
    this.username = this.userService.getUsername();
    this.initBlogList();
  }

  initBlogList(): void {
    this.reloadBlogList();
  }

  reloadBlogList() {
    this.blogService.getAllBlogs().subscribe(result => {
      this.blogs = result;
    });
  }

  addBlog(): void {
    this.router.navigate(['../blog-add'], { state: { isAddMode: true } });
  }

  logout(): void {
    this.userService.logoutUser();
    this.router.navigate(['../blog-login']);
  }
}
