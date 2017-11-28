import {TestBed, inject} from '@angular/core/testing';
import * as _ from 'lodash';

import {GoogleAuthService} from './google-auth.service';
import {environment} from '../../environments/environment';

describe('GoogleAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleAuthService]
    });
  });

  it('should be created',
    inject([GoogleAuthService], (service: GoogleAuthService) => {
      expect(service).toBeTruthy();
    }));

  it('should have a function buildUrl',
    inject([GoogleAuthService], (service: GoogleAuthService) => {
      expect(!_.isNil(service.buildUrl)).toBeTruthy();
    })
  );

  it('should build the correct URL',
    inject([GoogleAuthService], (service: GoogleAuthService) => {

    const expectedUrl = `https://accounts.google.com/o/oauth2/v2/auth?
       scope=https://www.googleapis.com/auth/books&
       include_granted_scopes=true&
       redirect_uri=http://localhost:4200/callback&
       response_type=token&
       client_id=474819375433-k249ib6o8f784f1is1r0dnc113dmmpsi.apps.googleusercontent.com&
       state=test&
       login_hint=hint`;

      const url = service.buildUrl('test', 'hint');

      expect(url).toEqual(expectedUrl);
    })
    );
});
