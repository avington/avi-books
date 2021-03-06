import { StoreModule } from '@ngrx/store';
import { TestBed, inject } from '@angular/core/testing';

import { UnauthorizedInterceptorService } from './unauthorized-interceptor.service';

describe('UnauthorizedInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnauthorizedInterceptorService],
      imports: [StoreModule.forRoot({})]
    });
  });

  it(
    'should be created',
    inject(
      [UnauthorizedInterceptorService],
      (service: UnauthorizedInterceptorService) => {
        expect(service).toBeTruthy();
      }
    )
  );
});
