import {createSelector} from '@ngrx/store';
import * as fromBookStore from '../../../books-area/store';

export const getGlobalLoadingSelector = createSelector(
  fromBookStore.getMyBookShelvesLoadingFromState, (loading) => {
    return loading;
  }
);
