import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Blog } from '../blog-list-item/model/blog.model';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-blog-add-or-edit',
  templateUrl: './blog-add-or-edit.component.html',
  styleUrls: ['./blog-add-or-edit.component.css']
})
export class BlogAddOrEditComponent implements OnInit {

  buttonDisplayName = '';
  imageUrlPath = '';

  isEditMode = false;
  isAddMode = false;
  blog: Blog = null; 

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private blogService: BlogService,
              private toastrService: ToastrService) {
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
    this.setButtonName();
    this.createForm();
  }

  createForm(): void {
    const imageValue = this.isEditMode ? this.blog.imgUrl : '';
    this.imageUrlPath = imageValue;
    this.form = this.fb.group({
      title: [this.isEditMode ? this.blog.title : '', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(200)])],
      content: [this.isEditMode ? this.blog.content : '', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(6000)])],
      imgUrl: [imageValue, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(2000)])]
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
        this.toastrService.success('Blog successfully added!');
        this.router.navigate(['../blog-list']);
      });
    }
    if (this.isEditMode) {
      this.blogService.editBlog(blog).subscribe(result => {
        this.toastrService.success('Blog successfully edited!');
        this.router.navigate(['../blog-view'], { state: { blog: result } });
      });
    }
  }

  onCancel(): void {
    if (this.isAddMode) {
      this.router.navigate(['../blog-list']);
    }
    if (this.isEditMode) {
      this.router.navigate(['blog-view'], { state: { blog: this.blog } });
    }
  }

  setButtonName(): void {
    if (this.isEditMode) {
      this.buttonDisplayName = 'Edit';
    } else {
      this.buttonDisplayName = 'Add';
    }
  }
}
