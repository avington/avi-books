import {AddTokenService} from './add-token.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {UnauthorizedInterceptorService} from './unauthorized-interceptor.service';

export const INTERCEPTORS: any[] = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AddTokenService,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: UnauthorizedInterceptorService,
    multi: true
  }
];
