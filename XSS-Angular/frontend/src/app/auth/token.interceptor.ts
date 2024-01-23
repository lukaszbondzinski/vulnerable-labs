import {
  HttpEvent,
  HttpHandler, HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from "./auth.service";
import {TokenService} from "./token.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.tokenService.isAuthenticated) {
      request = request.clone({
        headers: new HttpHeaders({
          Authorization: `Bearer  ${this.tokenService.getToken()}`
        })
      });
    }
    return next.handle(request);
  }
}
