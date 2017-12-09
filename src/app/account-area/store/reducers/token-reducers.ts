import { TokenActions } from "./../actions/token-actions";
import { Token } from "../../models/token";
import * as tokenActions from "../actions/token-actions";

export interface TokenState {
  token: Token;
  loaded: boolean;
}

const initialState: TokenState = {
  token: null,
  loaded: false
};

export function reducer(
  state = initialState,
  action: tokenActions.TokenActions
) {
  switch (action.type) {
    case tokenActions.HAS_USER_TOKEN:
    case tokenActions.UPDATE_USER_TOKEN: {
      const token = action.payload;

      console.log(action.payload);
      return {
        ...state,
        loaded: true,
        token
      };
    }
  }

  return state;
}

export const getToken = (state: TokenState) => state.token;
export const getTokenLoaded = (state: TokenState) => state.loaded;
