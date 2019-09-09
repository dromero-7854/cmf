// dependencies
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// models
import { Credentials } from '../models/core.model';
// services
import { AuthTokenService } from './auth-token.service';
import { HttpResponse } from '@angular/common/http';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static readonly TOKEN_STORAGE_KEY = 'token';

  redirectToUrl: string = '/back-office/home';
  loginUrl: string = '/auth';

  constructor(
    private router: Router,
    private tokenService: AuthTokenService
  ) { }

  public login(credentials: Credentials): void {
    this.tokenService.getResponseHeaders(credentials)
      .subscribe((res: HttpResponse<any>) => {
        this.saveToken(res.headers.get('authorization'));
        this.router.navigate([this.redirectToUrl]);
      });
  }

  public logout(): void {
    localStorage.removeItem(AuthService.TOKEN_STORAGE_KEY);
    this.router.navigate([this.loginUrl]);
  }

  public isLoggedIn(): boolean {
    return !!this.getToken();
  }

  private saveToken(token: string) {
    localStorage.setItem(AuthService.TOKEN_STORAGE_KEY, token);
  }

  public getToken(): string {
    return localStorage.getItem(AuthService.TOKEN_STORAGE_KEY);
  }

}
