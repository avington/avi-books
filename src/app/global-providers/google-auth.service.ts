import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable()
export class GoogleAuthService {

  constructor() {
  }

  buildUrl(state: string) {

    const rootUrl = environment.google.oath2;

    /* tslint:disable */
    const fullUrl = `${rootUrl}?scope=${environment.google.scopes}&include_granted_scopes=true&redirect_uri=${environment.google.redirectUri}&response_type=token&client_id=${environment.google.clientId}&state=${state}`;
    /* tslint:enable */
    return fullUrl;
  }

}

/* https://accounts.google.com/o/oauth2/v2/auth?
    scope=https://www.googleapis.com/auth/books&
    include_granted_scopes=true&
    redirect_uri=http://localhost:4200/callback&
    response_type=token&
    client_id=474819375433-k249ib6o8f784f1is1r0dnc113dmmpsi.apps.googleusercontent.com&
    state=test&
    login_hint=hint */
