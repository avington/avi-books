import {createSelector} from '@ngrx/store';
import * as fromFeature from '../reducers';

export const getTokenState = createSelector(
  fromFeature.getAccountState,
  ((state: fromFeature.AccountState) => state.token));

export const getTokenFromState = createSelector(
  getTokenState,(state) => state.token
);
