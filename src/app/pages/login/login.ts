import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private formBuilder = inject(FormBuilder);
  loginFormGroup = this.formBuilder.group({
    'username': ['', [Validators.required]],
    'password': ['', [Validators.required]]
  });

  invalidCredentials = false;

  login() {
    
  }

}
