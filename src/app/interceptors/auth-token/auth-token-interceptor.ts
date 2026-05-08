import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError } from 'rxjs';
import { AuthService } from '../../services/auth/auth-service';

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService)
  const token = authService.getToken();
  let requestToSend = req;
  const excludedUrls = ['/login', '/subscribe']

  if (excludedUrls.some(url => req.url.includes(url))){
    return next(req);
  }

  if(token){
    const headers = req.headers.set('Authorization', 'Bearer ' + token);
    requestToSend = req.clone({headers: headers});
  }

  return next(requestToSend);
};
