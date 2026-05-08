import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { ClientModel } from '../../models/ClientModel';
import { map, Observable, tap } from 'rxjs';
import { AuthService } from '../auth/auth-service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private BASE_URL = 'http://localhost:8081';
  private http = inject(HttpClient);
  private authService = inject(AuthService)
  user = signal<ClientModel | undefined | null>(undefined);

  login(credentials: LoginCredentials): Observable<ClientModel | null | undefined> {
    return this.http.post(this.BASE_URL + '/api/v1/login', credentials).pipe(
      tap((resultat: any) => {
        this.authService.login(resultat['token']);
        const user = Object.assign(new ClientModel(), resultat['user']);
        this.user.set(user);
      }),
      map((resultat: any) => {return this.user();})
    );
  }

  logout() {
    this.authService.logout();
    sessionStorage.clear();
    this.user.set(null);
  }
}

export interface LoginCredentials {
  email: string;
  password: string
}
