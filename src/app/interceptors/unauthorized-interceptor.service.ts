import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/Operators';
import * as fromRootStore from '../store';
import { Store } from '@ngrx/store';

@Injectable()
export class UnauthorizedInterceptorService implements HttpInterceptor {
  private payload: any;

  constructor(private store: Store<any>) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            // do stuff with response if you want
          }
        },
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.payload = {
                path: 'login'
              };
              this.store.dispatch(new fromRootStore.GoAction(this.payload));
            }
          }
        }
      )
    );
  }
}
