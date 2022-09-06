import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
  constructor(private _http: HttpClient) {}

  getAuthToken(): string | null {
    return sessionStorage.getItem('token');
  }

  setAuthToken(token: string): void {
    return sessionStorage.setItem('token', token);
  }

  login(): Observable<any> {
    return this._http.post<string>(
      `${environment.backendServer}/login`,
      environment.auth
    );
  }
}
