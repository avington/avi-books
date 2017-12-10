import {
  getMyBooksEntities,
  getMyBooksLoaded,
  getMyBooksLoading
} from '../reducers/my-books.reducer';
import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';

export const getMyBooksState = createSelector(
  fromFeature.getBooksState,
  (state: fromFeature.BooksState) => state.myBooks
);

export const getMyBooksEntitiesFromState = createSelector(
  getMyBooksState,
  getMyBooksEntities
);

export const getMyBooksLoadedFromState = createSelector(
  getMyBooksState,
  getMyBooksLoaded
);

export const getMyBooksLoadingFromState = createSelector(
  getMyBooksState,
  getMyBooksLoading
);
