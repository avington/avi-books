import {Action} from '@ngrx/store';
import {Token} from '../../models/token';

export const UPDATE_USER_TOKEN = '[Account] UPDATE_USER_TOKEN';

export class UpdateUserTokenAction implements Action {
  readonly type: string = UPDATE_USER_TOKEN;

  constructor(public payload: Token) {
  }
}

export type Actions = UpdateUserTokenAction;
