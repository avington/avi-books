import {GoogleAuthService} from './google-auth.service';
import {ProfileDataService} from './profile-data.service';

export const GLOBAL_PROVIDERS: Array<any> = [
  GoogleAuthService,
  ProfileDataService
];
