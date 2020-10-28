import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Blog } from '../blog-list-item/model/blog.model';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-blog-add-or-edit',
  templateUrl: './blog-add-or-edit.component.html',
  styleUrls: ['./blog-add-or-edit.component.css']
})
export class BlogAddOrEditComponent implements OnInit {

  imageUrlPath = '';

  isEditMode = false;
  isAddMode = false;
  blog: Blog = null; 

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private blogService: BlogService) {
    const state = this.router.getCurrentNavigation().extras.state;
    this.blog = state.blog;
    if (state.isEditMode != null) {
      this.isEditMode = state.isEditMode;
    }
    if (state.isAddMode != null) {
      this.isAddMode = state.isAddMode;
    }
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]],
      imgUrl: ['', [Validators.required]]
    });
  }

  prepare(): Blog {
    const controls = this.form.controls;
    const blog = new Blog();

    if (this.blog && this.blog.id) {
      blog.id = this.blog.id;
    }
    blog.title = controls.title.value;
    blog.content = controls.content.value;
    blog.imgUrl = controls.imgUrl.value;

    return blog;
  }

  onSubmit(): void {
    const blog = this.prepare();
    if (this.isAddMode) {
      this.blogService.addBlog(blog).subscribe(result => {
        this.router.navigate(['../blog-list']);
      });
    }
  }

  onCancel(): void {
    if (this.isAddMode) {
      this.router.navigate(['../blog-list']);
    }
  }
}
