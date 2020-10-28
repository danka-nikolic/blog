import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Blog } from '../blog-list-item/model/blog.model';

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
              private router: Router) {
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
      title: ['neki naslov', [Validators.required]],
      content: ['neki sadrzaj', [Validators.required]],
      imgUrl: ['neki url', [Validators.required]]
    });
  }

  onSubmit(): void {
    console.log('akcija ADD');
  }

  onCancel(): void {
    if (this.isAddMode) {
      this.router.navigate(['../blog-list']);
    }
  }
}
