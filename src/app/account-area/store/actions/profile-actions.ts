import {Profile} from '../../models/profile';

export const LOAD_PROFILE = 'LOAD_PROFILE';
export const LOAD_PROFILE_SUCCESS = 'LOAD_PROFILE_SUCCESS';

export class LoadProfileAction {
  readonly type = LOAD_PROFILE;

  constructor() {
  }
}

export class LoadProfileSuccessAction {
  readonly type = LOAD_PROFILE_SUCCESS;

  constructor(public payload: Profile) {
  }
}

export type Action
  = LoadProfileAction
  | LoadProfileSuccessAction;
