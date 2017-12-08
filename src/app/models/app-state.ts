import {Profile} from '../account-area/models/profile';
import {Token} from '../account-area/models/token';

export interface AppState {
  profile: Profile;
  token: Token;
}
