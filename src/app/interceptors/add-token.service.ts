import { Token } from "./../account-area/models/token";
import { LocalStorage } from "ngx-webstorage";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";

@Injectable()
export class AddTokenService implements HttpInterceptor {
  @LocalStorage() token: Token;

  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.token.accessToken}`
      }
    });
    return next.handle(request);
  }
}
