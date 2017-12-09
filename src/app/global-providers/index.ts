import { GoogleAuthService } from "./google-auth.service";
import { ProfileDataService } from "./profile-data.service";
import { WindowReferenceService } from "./window-reference.service";
import { AuthHelperService } from "./auth-helper.service";

export const GLOBAL_PROVIDERS: Array<any> = [
  GoogleAuthService,
  ProfileDataService,
  WindowReferenceService,
  AuthHelperService
];
