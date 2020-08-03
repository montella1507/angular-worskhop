import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(
    fb: FormBuilder,
    private router: Router
    ) {
    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: [false],
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.valid) {
      localStorage.setItem('user', 'xyz');
      this.router.navigate(['/']);

    } else {
      this.form.markAllAsTouched();
    }

  }
}
