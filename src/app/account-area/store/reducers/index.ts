import * as fromToken from './token-reducers';
import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';

export interface AccountState {
  token: fromToken.TokenState;
}

export const reducers: ActionReducerMap<AccountState> = {
  token: fromToken.reducer
};

export const getAccountState = createFeatureSelector<AccountState>('account');


export * from './token-reducers';
