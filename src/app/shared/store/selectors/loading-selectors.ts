import {createSelector} from '@ngrx/store';
import * as fromBookStore from '../../../books-area/store';

export const getGlobalLoadingSelector = createSelector(
  fromBookStore.getMyBookShelvesLoadingFromState,
  fromBookStore.getMyBookShelfLoading,
  (loadingShelves, loadingShelf) => {
    console.log()
    return loadingShelves || loadingShelf;
  }
);
