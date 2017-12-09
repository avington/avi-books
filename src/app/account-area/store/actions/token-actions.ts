import { Action } from "@ngrx/store";
import { Token } from "../../models/token";

export const UPDATE_USER_TOKEN = "[Account] UPDATE_USER_TOKEN";
export const HAS_USER_TOKEN = "[Account] Has User Token";

export class UpdateUserTokenAction implements Action {
  readonly type: string = UPDATE_USER_TOKEN;

  constructor(public payload: Token) {}
}
export class HasUserTokenAction implements Action {
  readonly type: string = HAS_USER_TOKEN;

  constructor(public payload: Token) {}
}

export type TokenActions = UpdateUserTokenAction | HasUserTokenAction;
