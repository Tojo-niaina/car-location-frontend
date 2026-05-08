import { Component, inject, OnDestroy } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginCredentials, LoginService } from '../../services/login/loginService';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnDestroy {

  private formBuilder = inject(FormBuilder);
  private loginService = inject(LoginService);
  private router = inject(Router);

  private loginSubscription: Subscription | null = null;

  loginFormGroup = this.formBuilder.group({
    'email': ['', [Validators.required]],
    'password': ['', [Validators.required]]
  });

  invalidCredentials = false;

  login() {
    this.loginSubscription = this.loginService.login(this.loginFormGroup.value as LoginCredentials)
      .subscribe({
        next: () => this.navigateHome(),
        error: () => this.invalidCredentials = true
      });
  }

  logout() {
    this.loginService.logout();
    this.navigateLogin();
  }

  navigateLogin() {
    this.router.navigate(['login']);
  }

  navigateHome(): void {
    this.router.navigate(['home']);
  }

  ngOnDestroy(): void {
    this.loginSubscription?.unsubscribe();
  }

}
