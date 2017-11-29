import {Injectable} from '@angular/core';
import {ProfileDataService} from '../../global-providers/profile-data.service';
import {Effect, Actions} from '@ngrx/effects';
import * as profileActions from './../actions/profile-actions';


@Injectable()
export class ProfileEffectsService {

  constructor(private profileService: ProfileDataService,
              private actions$: Actions) {
  }

  @Effect() loadProfile$ = this.actions$
    .ofType(profileActions.LOAD_PROFILE)
    .switchMap(() => {
      return this.profileService.getProfile().map(profile => new profileActions.LoadProfileSuccessAction(profile));
    });
}
