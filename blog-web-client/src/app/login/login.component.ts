import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  readonly returnUrl: '/blog-list';

  readonly HARDCODED_USERNAME = 'admin';
  readonly HARDCODED_PASSWORD= 'admin123';

  constructor(private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
    
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

 
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    const username = this.f.username.value; 
    const password = this.f.password.value;

    if (this.HARDCODED_USERNAME === username && this.HARDCODED_PASSWORD === password) {
      this.router.navigate(['../blog-list']);
    }
    // this.authenticationService.login(this.f.username.value, this.f.password.value)
    //     .pipe(first())
    //     .subscribe(
    //         data => {
    //             this.router.navigate([this.returnUrl]);
    //         },
    //         error => {
    //             this.alertService.error(error);
    //             this.loading = false;
    //         });
}

}
