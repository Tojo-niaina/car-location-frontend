import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth-service';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  private router = inject(Router);
  private authService = inject(AuthService);
  isLoggedIn = false;
  logLabel = "";

  login() {
    this.router.navigate(["/login"])
  }

  ngOnInit() {
    this.authService.isLoggedIn.subscribe( value => {
        this.isLoggedIn = value;
        this.logLabel = this.isLoggedIn ? "Se deconnecter" : "Se connecter"
      }
    )
  }
}
