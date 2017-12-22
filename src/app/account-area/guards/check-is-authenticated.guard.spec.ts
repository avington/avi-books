import { TestBed, async, inject } from '@angular/core/testing';

import { CheckIsAuthenticatedGuard } from './check-is-authenticated.guard';
import {StoreModule} from '@ngrx/store';
import {AuthHelperService} from '../../global-providers/auth-helper.service';

describe('CheckIsAuthenticatedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [
        CheckIsAuthenticatedGuard,
        AuthHelperService
      ]
    });
  });

  it('should ...', inject([CheckIsAuthenticatedGuard], (guard: CheckIsAuthenticatedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
