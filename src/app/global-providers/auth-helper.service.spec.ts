import { TestBed, inject } from '@angular/core/testing';

import { AuthHelperService } from './auth-helper.service';
import { Token } from '../account-area/models/token';

describe('AuthHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthHelperService]
    });
  });

  it(
    'should be created',
    inject([AuthHelperService], (service: AuthHelperService) => {
      expect(service).toBeTruthy();
    })
  );

  describe('isAthenticated', () => {
    const time = new Date();
    const token: Token = {
      accessToken: 'token',
      expiresIn: '3600',
      scope: '',
      timeCreated: time,
      tokenType: 'type'
    };

    it(
      'should be false when no token exists',
      inject([AuthHelperService], (service: AuthHelperService) => {
        const newToken = { ...token, accessToken: '' };
        const result = service.isAuthenticated(newToken);
        expect(result).toEqual(false);
      })
    );

    it(
      'should be true when token is valid and not expired',
      inject([AuthHelperService], (service: AuthHelperService) => {
        const result = service.isAuthenticated(token);
        expect(result).toEqual(true);
      })
    );

    it(
      'should be false when token is valid and expired',
      inject([AuthHelperService], (service: AuthHelperService) => {
        const newtoken = { ...token, timeCreated: new Date(2000, 1, 1) };

        const result = service.isAuthenticated(newtoken);
        expect(result).toEqual(false);
      })
    );
  });
});
