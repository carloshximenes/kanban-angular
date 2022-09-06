import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { AuthService } from './auth.services';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private _authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this._authService.getAuthToken();

    if (token) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
    }

    return next.handle(request).pipe(
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            return this._authService.login().pipe(
              switchMap((token: string) => {
                this._authService.setAuthToken(token);
                request = request.clone({
                  setHeaders: { Authorization: `Bearer ${token}` },
                });
                return next.handle(request);
              })
            );
          }
        }
        return throwError(err);
      })
    );
  }
}
