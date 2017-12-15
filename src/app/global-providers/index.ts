import { GoogleAuthService } from './google-auth.service';
import { ProfileDataService } from './profile-data.service';
import { WindowReferenceService } from './window-reference.service';
import { AuthHelperService } from './auth-helper.service';
import {AddTokenService} from '../interceptors/add-token.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

export const GLOBAL_PROVIDERS: Array<any> = [
  GoogleAuthService,
  ProfileDataService,
  WindowReferenceService,
  AuthHelperService
];
